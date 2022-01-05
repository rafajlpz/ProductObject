"use strict";

// Crea constructores, getters, setters y toString

// No se llama directamente a la propiedad cuando se usa Producto.Precio, en este caso "Precio", se entraria por el Getter, se esta llamando al Getter, y cuando se hace Producto..Precio =, ese = hace que se llame al Setter, se sobreescriben las operaciones, por eso hay que usar barra baja _Precio. Es una forma de indicar que ese atributo/propiedad es PRIVADA, que no se debe tocar.

class Producto {
  constructor(Nombre, Precio) {
    this._Nombre = Nombre;
    this._Precio = Precio;  
    
  }
  get Precio() {
    return this._Precio;
  }
  set Precio(nuevoPrecio) {
    return (this._Precio = nuevoPrecio);
  }
  get Nombre() {
    return this._Nombre;
  }
  set Nombre(nuevoNombre) {
    return (this._Nombre = nuevoNombre);
  }
  calcular = (cantidad) => {
    return Precio * cantidad;
  };
}
class Perecedero extends Producto {
  constructor(Nombre, Precio, diasACaducar) {
    super(Nombre, Precio);

    this._diasACaducar = diasACaducar;
  }
  get diasACaducar() {
    return this._diasACaducar;
  }
  set diasACaducar(nuevosDiasACaducar) {
    return (this._diasACaducar = nuevosDiasACaducar);
  }
  calcular = (cantidad) => {
    precioFinal() = super.calcular(cantidad);

    switch(this.diasACaducar){
      case 1:
        precioFinal / 4;
        break;
      case 2: 
        precioFinal / 3;
        break;
      case 3:
        precioFinal / 2;
        break;
    }
    return precioFinal;

  };
}
class NoPerecedero extends Producto {
  constructor(Nombre, Precio, tipo) {
    super(Nombre, Precio);

    this._tipo = tipo;
  }
  get tipo() {
    return this._tipo;
  }
  set tipo(nuevoTipo) {
    return (this._tipo = nuevoTipo);
  }
  calcular = (cantidad) => {
    return Precio * cantidad;
 }
}
class ejecutable{

}

// Instanciar objetos
const producto = new Producto('Platanos', 10);
const perecedero = new Perecedero('Chuletas',5, 30);
const noperecedero = new NoPerecedero('Arroz', 1.99, 'Paquete');

console.log(producto, perecedero, noperecedero);

// Producto.Precio = 3;
// console.log(Producto.Precio);
