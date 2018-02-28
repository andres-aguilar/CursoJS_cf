/*
 * Codigo del curso de JS y el DOM de codigo facilito
 */

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');

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

  /*button.addEventListener('click', function(e) {
    console.log(this.target.textContent);
  });*/

  /* Efecto hover en el boton */
  button.addEventListener('mouseenter', function() {
    this.className = 'btn btn-danger';
  });
  button.addEventListener('mouseout', function() {
    this.className = 'btn btn-info';
  });

  /* Eventos del teclado
   keydown, keyup, keypress
  */
  const input = document.getElementById('title-form');
  input.addEventListener('keydown', (e) => {
    //console.log("Key pressed: " + e.key);
  });

  /* Evento submit */
  const form = document.getElementById('course-form');
  form.addEventListener('submit', function(e){
    e.preventDefault();

    let title = document.getElementById('title-form').value;
    let description = document.getElementById('description-form').value;

    console.log(title);
    console.log(description);
  });

  /* event change */
  const checkbox = document.getElementById('checkbox');
  checkbox.addEventListener('change', function() {
    console.log('change');
  });

  /* Event boubble */
  const element = document.querySelector('li');
  const list = document.querySelector('ul');
  const div_row = document.querySelector('.row');
  const div_container = document.querySelector('.container');
  const body = document.querySelector('body');

  function show_message(message) {
    console.log(message);
  }

  element.addEventListener('click', function(e) {show_message('element'), e.stopPropagation();});

  list.addEventListener('click', function() {show_message('list')});
  div_row.addEventListener('click', function() {show_message('div_row')});
  div_container.addEventListener('click', function() {show_message('div_container')});
  body.addEventListener('click', function() {show_message('body')});
});
