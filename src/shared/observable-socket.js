import { Observable, ReplaySubject } from 'rxjs';

export function clientMessage(message) {
  // Stack trace exception

  const error = new Error(message);
  error.clientMessage = message;
  return error;
}

export class ObservableSocket {
  // Know the state of my socket

  get isConnected() { return this._state.isConnected; }
  get isReconnecting() { return this._state.isReconnecting; }
  get isDead() { return !this.isConnected && !this.isReconnecting; }

  constructor(socket) {
    this._socket = socket;
    this._state = {};

    // Callbacks to add to our socket.
    // So, we can keep track of the actions we are able to respond to

    this._actionCallbacks = {};

    // Track individual requests that were sent to the server, based of the reqeustId

    this._requests = {};

    // Auto incremented everytime we send out a request

    this._nextRequestId = 0;

    // Track the state of the server connection

    this.status$ = Observable.merge(
      this.on$('connect').map(() => ({ isConnected: true })),
      this.on$('disconnect').map(() => ({ isConnected: false })),
      this.on$('reconnecting').map(attempt => ({
        isConnected: false,
        isReconnecting: true,
        attempt
      })),
      this.on$('reconnect_failed').map(() => ({ isConnected: false, isReconnecting: false }))
    )
    .publishReplay(1)

    // if sombody new subscribes, dont reconnect to all event handlers. instead share the instance of all the event handler. but when someone new subscribes publish the latest.

    .refCount();

    this.status$.subscribe(state => this._state = state);
  }

  // Basic Wrappers
  //-----------------------------
  on$(event){
    return Observable.fromEvent(this._socket,event);
  }

  on(event, callback) {
    this._socket.on(event, callback);
  }

  off(event, callback) {
    this._socket.off(event, callback);
  }

  emit(evetn, arg) {
    this._socket.emit(event, arg);
  }

  // Bind to these actions and then send a request id when we emit
  // Emit (Client Side)
  //-----------------------------
  emitAction$(action , arg) {

    // send an action to the server, expect a callback response from the server with an id.

    // this._socket.on(action, () => /* success */);
    // this._socket.on(`${action}:fail`, () => /* fail */);
    // this._socket.emit(action, arg requestId);

    const id = this._nextRequestId++;

    this._registerCallbacks(action);

    // Everytime we subscribe to the subject, if it has a value, it will send it back to us. Otherwise wait

    const subject = this._requests[id] = new ReplaySubject(1);
    this._socket.emit(action, arg, id);
    return subject;
  }

  // Register the success & failure callbacks on the socket.
  // When the server sends me something, I'm supposed to do something

  _registerCallbacks(action) {
    if(this._actionCallbacks.hasOwnProperty(action))
    return;

    this._socket.on(action, (arg, id) => {
      const request = this._popRequest(id);
      if(!request)
      return;

      request.next(arg);
      request.complete();
    });

    this._socket.on(`${action}:fail`, (arg, id) => {
      const request = this._popRequest(id);
      if(!request)
      return;

      request.error(arg);

    });

    this._actionCallbacks[action] = true;
  }

  // Takes id from the server request
  // Searches for request by id and returns it
  // Then remove it from internal representation

  _popRequest(id) {

    // if a request was sent with an id that I don't know about.

    if(!this._requests.hasOwnProperty(id)) {
      console.error(`Event with the id ${id} was returned twice, or the server did not send back an ID!`);
    }

    const request = this._requests[id];
    delete this._requests[id];
    return request;

  }


  // On (Server Side)
  //-----------------------------
  onAction(action, callback) {
    this._socket.on(action, (arg, requestId) => {
      try {
        const value = callback(arg);
        if (!value) {
          this._socket.emit(action, null, requestId);
          return;
        }

        if (typeof(value.subscribe) !== 'function') {
          this._socket.emit(action, value, requestId);
          return;
        }

        let hasValue = false;
        value.subscribe({
          next: (item) => {
            if (hasValue)
              throw new Error(`Action ${action} produced more than one value.`);

            this._socket.emit(action, item, requestId);
            hasValue = true;
          },

          error: (error) => {
            this._emitError(action, requestId, error);
            console.error(error.stack || error);

          },

          complete: () => {
            if(!hasValue) {
              this._socket.emit(action, null, requestId);
            }
          },
        });

      } catch (error) {
          if(typeof(requestId) !== 'undefined')
            this._emitError(action, requestId, error);

          console.error(error.stack || error);

      }
    });
  }

  _emitError(action, id, error) {
    const message = (error && error.clientMessage) || 'FATAL ERROR';
    this._socket.emit(`${action}:fail`, {message}, id);
  }
}