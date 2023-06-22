"use strict";
const c = 5;
class Lavadora extends Electrodomestico {
    //2 - Constructor de clase
    constructor(newColor, newConsumo, newPeso, newCarga) {
        super(newColor, newConsumo, newPeso);
        //1 - Atributos de class
        this.carga = c;
        this.carga = newCarga;
        this.precio = this.precioFinal();
    }
    //3 - Metodos de class
    getCarga() {
        return this.carga;
    }
    //El metodo que traemos del padre tiene que ser igual (pasarle los mismo atributos)
    //Si debemos añadir algo más de la clase actual con this.atributo se le puede añadir
    precioFinal() {
        let precio = super.precioFinal();
        if (this.carga > 30) {
            precio += 50;
        }
        return precio;
    }
}
