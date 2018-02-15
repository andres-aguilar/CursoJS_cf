// imprimir mensaje en consola
console.log("Hola mundo");

// Ingresar datos
// prompt();

// Variables y constantes
let nombre = "Andres";

const PI = 3.1416;


// Funciones

function cuadrado(numero) {
  return numero * numero;
}

cuadrado(2);

// Arrow functions
let demo = ()=> {
  console.log("Hola desde una funcion de flecha");
}


// Arreglos
let arreglo = ["Java", "JavaScript", "Python", "Go", "Ruby"]

arreglo.forEach(function(elemento){
  console.log(elemento);
});

let numeros = ["2", "4", "6"];
let cuadrados = numeros.map(numero => numero * numero);

// Objetos

let persona = {
  nombre: "Andres",
  apellido: "Aguilar",
  edad: 28,
  saludar: function(){
    console.log("Hola");
  }
}
