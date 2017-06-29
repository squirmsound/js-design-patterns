const fetch = require('node-fetch');

const queryParameters = [ 'ahoy', 'hello', 'hallo' ];

const fetchPromises = queryParameters.map(queryParam => {
  return fetch(`http://httpbin.org/get?${queryParam}`)
    .then(response => {
      // parse response body as JSON
      return response.json();
    })
    .then(response => {
      // extract the URL property from the response object
      let url = response.url;
      console.log('Response from: %s', url);
      return url;
    });
});

Promise
  .all(fetchPromises)
  .then(allUrls => {
    console.log('The return values of all requests are passed as an array:');
    console.log(allUrls);
  })
  .catch(error => {
    console.error('A call failed:');
    console.error(error.message);
  });
