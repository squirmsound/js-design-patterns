const fetch = require('node-fetch');

const queryParameters = [ 'ahoy', 'hello', 'hallo' ];

let mostRecentPromise = queryParameters.reduce(
  (previousPromise, queryParam) => {
    return previousPromise.then(requestedUrlsSoFar => {
      return fetch(`http://httpbin.org/get?${queryParam}`)
        .then(response => {
          // parse response body as JSON
          return response.json();
        })
        .then(response => {
          // extract the URL property from the response object
          let url = response.url;
          console.log('Response from: %s', url);
          requestedUrlsSoFar.push(url);
          return requestedUrlsSoFar;
        });
    });
  },
  Promise.resolve([])
);

mostRecentPromise
  .then(allUrls => {
    console.log('The return values of all requests are passed as an array:');
    console.log(allUrls);
  })
  .catch(error => {
    console.error('A call failed:');
    console.error(error.message);
  });
// The overall approach here is the same as with the forEach loop.
// We specify a starting value of Promise.resolve([]) and call the reduce method on the messages array
// with a function that receives two arguments. One is the previous return value and the other is the
// current value of the array that we are accessing. This way we can reduce the array to a single value.
// In our case this will be the most recent Promise that we can then use to know when everything is done.
