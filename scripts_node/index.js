const request = require('request');

request("http://goggle.com", function() {
  console.log("Termine la peticion a google");
});
