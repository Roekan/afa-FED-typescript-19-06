"use strict";
//Reto 1 POO TS2
class EmpleadoPorHoras extends Empleado {
    //2 - constructor de class
    constructor(newNombre, newEdad, newSalario, newTarifaHora) {
        super(newNombre, newEdad, newSalario);
        //1 - Atributos de class
        this.tarifaHora = 0;
        this.tarifaHora = newTarifaHora;
    }
    //3 - Metodos de class
    //getters y setters
    getTarifaHora() {
        return this.tarifaHora;
    }
    setTarifaHora(horas) {
        this.tarifaHora = horas;
    }
    calcularSalario(horas) {
        let salarioTotal = this.getSalario();
        salarioTotal = horas * this.tarifaHora;
        if (horas > 40) {
            salarioTotal += 1.10;
        }
        return salarioTotal;
    }
}
