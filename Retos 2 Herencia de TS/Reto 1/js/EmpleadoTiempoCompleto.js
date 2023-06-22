"use strict";
//Reto 1 POO TS2
class EmpleadoTiempoCompleto extends Empleado {
    //2 - constructor de class
    constructor(newNombre, newEdad, newSalario, newHorasTrabajadas) {
        super(newNombre, newEdad, newSalario);
        //1 - Atributos de class
        this.horasTrabajadas = 0;
        this.horasTrabajadas = newHorasTrabajadas;
    }
    //3 - Metodos de class
    //getters y setters
    getHorasTrabajadas() {
        return this.horasTrabajadas;
    }
    setHorasTrabajadas(horas) {
        this.horasTrabajadas = horas;
    }
    calcularSalario() {
        let salarioTotal = this.getSalario();
        return salarioTotal * this.horasTrabajadas;
    }
}
