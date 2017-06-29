const fetch = require('node-fetch');

function extractStatusCode(response) {
  return response.status;
}

fetch('invalid URL')
  .then(extractStatusCode, errorInFetch => {
    console.error('An error occurred in the fetch call.');
    console.error(errorInFetch.message);
    // forward the error
    return Promise.reject(errorInFetch);
  })
  .then(statusCode => {
    console.log('Request using Promises. Response status code: %s', statusCode);
  })
  .catch(error => {
    console.error('This will now be executed as another exception handler.');
  });
