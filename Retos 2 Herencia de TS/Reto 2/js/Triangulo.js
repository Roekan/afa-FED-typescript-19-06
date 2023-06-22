"use strict";
//Reto 1 POO TS2
class Triangulo extends Figura {
    //2 - constructor de class
    constructor(newLado1, newLado2, newLado3, newAltura) {
        super();
        //1 - Atributos de class
        this.lado1 = 0;
        this.lado2 = 0;
        this.lado3 = 0;
        this.base = 0;
        this.altura = 0;
        this.lado1 = newLado1;
        this.lado2 = newLado2;
        this.lado3 = newLado3;
        this.base = this.escogerBase();
        this.altura = newAltura;
    }
    //3 - Metodos de class
    //getters y setters
    getLado1() {
        return this.lado1;
    }
    setLado1(valor) {
        this.lado1 = valor;
    }
    getLado2() {
        return this.lado2;
    }
    setLado2(valor) {
        this.lado2 = valor;
    }
    getLado3() {
        return this.lado3;
    }
    setLado3(valor) {
        this.lado3 = valor;
    }
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
        return (this.base * this.altura) / 2;
        // if(this.lado1!=this.lado2 && this.lado2!=this.lado3 && this.lado3!=this.lado1)
        // return Math.sqrt(p* ((p-this.lado1)*(p-this.lado2)*(p-this.lado3)))
        // }
    }
    calcularPerimetro() {
        let perimetro = this.lado1 + this.lado2 + this.lado3;
        return perimetro;
    }
    escogerBase() {
        return Math.min(this.lado1, this.lado2, this.lado3);
    }
}
