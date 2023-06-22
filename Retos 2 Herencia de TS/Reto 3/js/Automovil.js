"use strict";
//Reto 1 POO TS2
class Automovil extends Vehiculo {
    //2 - constructor de class
    constructor(newMarca, newModelo, newAnio, newPrecio, newCantidadPuertas) {
        super(newMarca, newModelo, newAnio, newPrecio);
        //1 - Atributos de class
        this.cantPuertas = 3;
        this.cantPuertas = newCantidadPuertas;
    }
    //3 - Metodos de class
    //getters y setters
    getCantidadPuertas() {
        return this.cantPuertas;
    }
    setCantidadPuertas(valor) {
        this.cantPuertas = valor;
    }
    calcularImpuesto() {
        return this.precio * 0.02;
    }
}
