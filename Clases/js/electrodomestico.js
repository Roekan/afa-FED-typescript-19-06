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
        this.precio = this.precioFinal(this.consumo, this.peso);
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
    precioFinal(consumo, peso) {
        let precio = 0;
        switch (consumo) {
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
        if (peso <= 19) {
            precio += 10;
        }
        else if (peso > 19 && peso <= 49) {
            precio += 50;
        }
        else if (peso > 49 && peso <= 79) {
            precio += 80;
        }
        else {
            precio += 100;
        }
        return precio;
    }
}
//  let tele = new Electrodomestico(color,consumo,peso,precio)
let tele = new Electrodomestico('rojo', 'A', 50);
console.log(tele);
