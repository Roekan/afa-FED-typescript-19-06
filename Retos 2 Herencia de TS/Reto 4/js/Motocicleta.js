"use strict";
//Reto 1 POO TS2
class Motocicleta extends Vehiculo {
    //2 - constructor de class
    constructor(newMarca, newModelo, newAnio, newPrecio, newCilindrada) {
        super(newMarca, newModelo, newAnio, newPrecio);
        //1 - Atributos de class
        this.cilindrada = 0;
        this.cilindrada = newCilindrada;
    }
    //3 - Metodos de class
    //getters y setters
    getCilindrada() {
        return this.cilindrada;
    }
    setCilindrada(valor) {
        this.cilindrada = valor;
    }
    calcularImpuesto() {
        return this.precio * 0.01;
    }
}
