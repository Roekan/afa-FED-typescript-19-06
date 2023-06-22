"use strict";
//Reto 1 POO TS2
class Rectangulo extends Figura {
    //2 - constructor de class
    constructor(newBase, newAltura) {
        super();
        //1 - Atributos de class
        this.base = 0;
        this.altura = 0;
        this.base = newBase;
        this.altura = newAltura;
    }
    //3 - Metodos de class
    //getters y setters
    getBase() {
        return this.base;
    }
    setBase(valor) {
        this.base = valor;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(valor) {
        this.altura = valor;
    }
    //otros metodos
    calcularArea() {
        return this.base * this.altura;
    }
    calcularPerimetro() {
        let perimetro = 0;
        return (this.base * 2) + (this.altura * 2);
    }
}
