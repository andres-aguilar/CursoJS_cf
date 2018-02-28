/*
 * Codigo del curso de JS y el DOM de codigo facilito
 */
const title = document.getElementById('title');
title.innerHTML = 'Cursos';

const description = document.getElementById('description');
description.textContent = 'Listado de cursos';

// const items = document.getElementsByClassName('list-group-item');
// const items = document.getElementsByTagName('li');
//const items = document.querySelector('li:nth-child(even)');
//for (var i=0; i<items.length; i++) {
//  console.log(items[i]);
//}

const button = document.querySelector('.btn.btn-info');

button.addEventListener('click', function(e) {
  console.log(this.target.textContent);
});

/* Efecto hover en el boton */
button.addEventListener('mouseenter', function() {
  this.className = 'btn btn-danger';
});
button.addEventListener('mouseout', function() {
  this.className = 'btn btn-info';
});

setTimeout(()=>{
  console.log('Hola mundo!');
}, 800);
