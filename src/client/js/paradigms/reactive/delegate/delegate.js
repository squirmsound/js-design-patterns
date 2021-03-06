function delegate(wrapper, selector, eventName){
  return Rx.Observable.fromEvent(
    document.querySelector('wrapper'),
    eventName,
    e => ({event:e,delegate:e.target.closest(selector)})
  ).filter(x => x.delegate !== null);
}

delegate('.wrapper', 'button', 'click')
.subscribe(e => console.dir(e));