"use strict";
class Television extends Electrodomestico {
    //2 - Constructor de clase
    constructor(newColor, newConsumo, newPeso, newResolucion, newCalidad4k) {
        super(newColor, newConsumo, newPeso);
        //1 - Atributos de class
        this.resolucion = 20;
        this.calidad4K = false;
        this.resolucion = newResolucion;
        this.calidad4K = newCalidad4k;
        this.precio = this.precioFinal();
    }
    //3 - Metodos de class
    getResolucion() {
        return this.resolucion;
    }
    getCalidad4k() {
        return this.calidad4K;
    }
    //dejar identico al padre
    precioFinal() {
        let precio = super.precioFinal();
        if (this.resolucion > 40) {
            let precioPorcentaje = (precio / 100) * 30;
            precio += precioPorcentaje;
        }
        if (this.calidad4K) {
            precio += 50;
        }
        return precio;
    }
}
