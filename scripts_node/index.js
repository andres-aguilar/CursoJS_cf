/*const request = require('request');

request("http://goggle.com", function() {
  console.log("Termine la peticion a google");
});
*/

// Request promise
const rp = require("request-promise");

rp("http://goggle.com")
  .then(function(html) {
    console.log("Termine la peticion a google");
  }).catch(function(err) {
    console.log(err);
  });
