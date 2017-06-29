const fetch = require('node-fetch');

const queryParameters = [ 'ahoy', 'hello', 'hallo' ];

let mostRecentPromise = Promise.resolve([]);
// start with an immediately resolving promise and an empty list
queryParameters.forEach(queryParam => {
  // chain the promise to the previous one
  mostRecentPromise = mostRecentPromise.then(requestedUrlsSoFar => {
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
});

mostRecentPromise
  .then(allUrls => {
    console.log('The return values of all requests are passed as an array:');
    console.log(allUrls);
  })
  .catch(error => {
    console.error('A call failed:');
    console.error(error.message);
  });
