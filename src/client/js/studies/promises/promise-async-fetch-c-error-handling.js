const fetch = require('node-fetch');

function extractStatusCode(response) {
  return response.status;
}

fetch('invalid URL')
  .then(extractStatusCode, errorInFetch => {
    console.error('An error occurred in the fetch call.');
    console.error(errorInFetch.message);
    // return null as response code since no request has been performed
    return null;
  })
  .then(statusCode => {
    console.log('Request using Promises. Response status code: %s', statusCode);
  })
  .catch(error => {
    console.error('This will never be executed');
  });
