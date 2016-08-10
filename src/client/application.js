import './application.scss';

import * as services from './services';

// Playground
// ----------------------------------------
services.server.emitAction$('login', { username: 'foo', password: 'bar' })
  .subscribe(user => {
      console.log("We're logged in: " + user);
    }, error => {
      console.error(error);
    });

// Send the status of the server
services.server.status$.subscribe(status => console.log(status));

// Auth
// ----------------------------------------


// Components
// ----------------------------------------


// Bootstrap
// ----------------------------------------
services.socket.connect();

