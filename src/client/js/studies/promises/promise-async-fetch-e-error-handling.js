const fetch = require('node-fetch');

function extractStatusCode(response) {
  response = undefined;
  return response.status;
}

fetch('http://httpbin.org/get')
  .then(extractStatusCode, errorInFetch => {
    console.error('This will not be executed.');
    console.error(errorInFetch.message);
    // forward the error
    return Promise.reject(errorInFetch);
  })
  .then(statusCode => {
    console.log('Request using Promises. Response status code: %s', statusCode);
  })
  .catch(error => {
    console.error('There was an error somewhere in the chain.');
    console.error(error.message);
  });
