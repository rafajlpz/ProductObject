"use strict";

// Crea constructores, getters, setters y toString

class Producto {
  constructor(Nombre, Precio) {
    this.Nombre = Nombre;
    this.Precio = Precio;
    // this.nombres = [];
  }
}

class Perecedero {
  constructor(diasACaducar) {
    this.diasACaducar = diasACaducar;
  }
}

class NoPerecedero {
  constructor(tipo) {
    this.tipo = tipo;
  }
}
const productor = new Producto ('Platanos', 3);
const perecedero = new Perecedero (20);
const noPerecedero = new NoPerecedero('Alimentos');

console.log( productor,  perecedero,  noPerecedero);
//   agregarNombre(nombre) {
//     this.nombre.push(ombre);
//   }
//   eliminarNombre() {
//     this.nombre.pop();
//   }
// }

// ************************************************* Instanciar una clase (Crear un objeto) *************************************************
// const productoUno = new Producto("Manzanas", 2);
// const productoDos = new Producto('Platanos', 3);

// // productoUno.agregarNombres('Banana');

// console.log(productoUno);

const calcular = () => {};
