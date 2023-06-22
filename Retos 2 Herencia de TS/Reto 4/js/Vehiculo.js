"use strict";
//Reto 1 POO TS2
class Vehiculo {
    //2 - constructor de class
    constructor(newMarca, newModelo, newAnio, newPrecio) {
        //1 - Atributos de class
        this.marca = '';
        this.modelo = '';
        this.anio = 0;
        this.precio = 0;
        this.marca = newMarca,
            this.modelo = newModelo,
            this.anio = newAnio,
            this.precio = newPrecio;
    }
    //3 - Metodos de class
    //getters y setters
    getMarca() {
        return this.marca;
    }
    setMarca(valor) {
        this.marca = valor;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(valor) {
        this.modelo = valor;
    }
    getAnio() {
        return this.anio;
    }
    setAnio(valor) {
        this.anio = valor;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(valor) {
        this.precio = valor;
    }
}
