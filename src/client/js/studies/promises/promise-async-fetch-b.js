const fetch = require('node-fetch');

const extractStatusCode = response => {
  return response.status;
};

fetch('http://httpbin.org/get')
  .then(extractStatusCode)
  .then(response => {
    console.log(
      'Request using Promises done. Response status code: %s',
      response
    );
  })
  .catch(error => {
    console.error('Oh shoot. Something went wrong with the promise code:');
    console.error(error.message);
  });
