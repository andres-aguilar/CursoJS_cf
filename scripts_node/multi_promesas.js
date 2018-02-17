//const request = require('request');

let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, "Hola mundo"));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 500, "Segundo hola mundo"));

let saluda = () => console.log("Hola a todos");

/*
p1.then(function() {
  p2.then(function() {
    saluda();
  });
});
*/

// Esperamos a que terminen todas las promesas
// results es un arreglo con todos los resultados
Promise.all([p1, p2]).then(results=>{
  saluda()
});


// Si una promesa falla todo el conjunto se marca como fallido
