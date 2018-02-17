const request = require('request');

function leer(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(err, response) {
      if (err) {
        reject(er);
      } else {
        resolve(response);
      }
    });
  });
}


leer("http://google.com")
  .then(function(response) {
    console.log("Termine de cargar");
  }).catch(function(err) {
    console.log(err);
  });
