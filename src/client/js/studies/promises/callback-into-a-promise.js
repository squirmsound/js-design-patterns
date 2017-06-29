const fs = require('fs');

function readFileWithPromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, content) => {
      if (err) {
        return reject(err);
      }
      return resolve(content);
    });
  });
}

readFileWithPromise('/etc/hosts')
  .then(content => {
    console.log('File content:');
    console.log(content);
  })
  .catch(err => {
    console.error('An error occurred reading this file.');
    console.error(err.message);
  });
