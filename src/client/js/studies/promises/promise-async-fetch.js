const fetch = require('node-fetch');

fetch('http://httpbin.org/get')
  .then(response => {
    console.log(
      'Request using Promises done. Response status code: %d',
      response.status
    );
  })
  .catch(error => {
    console.error('Oh shoot. Something went wrong with the promise code:');
    console.error(error.message);
  });
