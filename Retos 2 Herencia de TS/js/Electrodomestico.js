"use strict";
//Reto 3 POO TS
const pre = 100;
const col = "blanco";
const con = "F";
const pes = 5;
//1 - Atributos de class
class Electrodomestico {
    //2 - constructor de class
    constructor(newColor, newConsumo, newPeso) {
        this.precio = pre;
        this.color = col;
        this.consumo = con;
        this.peso = pes;
        this.color = this.comprobarColor(newColor);
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.peso = newPeso;
        this.precio = this.precioFinal();
    }
    //3 - Metodos de class
    //getters y setters
    getPrecio() {
        return this.precio;
    }
    getColor() {
        return this.color;
    }
    getConsumo() {
        return this.consumo;
    }
    getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(letra) {
        let consumo;
        switch (letra.toLowerCase()) {
            case "a":
                consumo = "A";
                break;
            case "b":
                consumo = "B";
                break;
            case "c":
                consumo = "C";
                break;
            case "d":
                consumo = "D";
                break;
            case "e":
                consumo = "E";
                break;
            default:
                consumo = "F";
        }
        return consumo;
    }
    comprobarColor(color) {
        let colorElectrodomestico;
        switch (color.toLowerCase()) {
            case "negro":
                colorElectrodomestico = "negro";
                break;
            case "rojo":
                colorElectrodomestico = "rojo";
                break;
            case "azul":
                colorElectrodomestico = "azul";
                break;
            case "gris":
                colorElectrodomestico = "gris";
                break;
            default:
                colorElectrodomestico = "blanco";
        }
        return colorElectrodomestico;
    }
    precioFinal() {
        let precio = pre;
        switch (this.consumo) {
            case "A":
                precio += 100;
                break;
            case "B":
                precio += 80;
                break;
            case "C":
                precio += 60;
                break;
            case "D":
                precio += 50;
                break;
            case "E":
                precio += 30;
                break;
            default:
                precio += 10;
        }
        if (this.peso <= 19) {
            precio += 10;
        }
        else if (this.peso > 19 && this.peso <= 49) {
            precio += 50;
        }
        else if (this.peso > 49 && this.peso <= 79) {
            precio += 80;
        }
        else {
            precio += 100;
        }
        return precio;
    }
}
