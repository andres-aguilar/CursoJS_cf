class User {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    console.log("Hola " + this.nombre);
  }
}

// Herencia
class Admin extends User {
  constructor(nombre) {
    super(nombre);
  }
  // override
  saludar() {
    super.saludar();
    console.log("Bienvenido al panel de administracion");
  }
}


let admin = new Admin("Andres");
admin.saludar();


// Encapsulacion
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  get get_name() {
    return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
  }

  set set_name(nombre) {
    this.nombre = nombre;
  }
}

let user = new Usuario("yosh");
console.log(user.get_name);
user.set_name = "andres";
console.log(user.get_name);


// Métodos estaticos
class Usuario {
  constructor(permisos="r") {
    this.permisos = permisos
  }
  static createAdmin() {
    let userAdmin = new Usuario("rwx");
    return userAdmin;
  }
}

let admin = Usuario.createAdmin();
console.log(admin.permisos);
