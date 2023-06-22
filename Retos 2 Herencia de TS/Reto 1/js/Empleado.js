"use strict";
//Reto 1 POO TS2
class Empleado {
    //2 - constructor de class
    constructor(newNombre, newEdad, newSalario) {
        //1 - Atributos de class
        this.nombre = '';
        this.edad = 18;
        this.salario = 800;
        this.nombre = newNombre,
            this.edad = newEdad,
            this.salario = newSalario;
    }
    //3 - Metodos de class
    //getters y setters
    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }
    getSalario() {
        return this.salario;
    }
    setNombre(valor) {
        this.nombre = valor;
    }
    setEdad(valor) {
        this.edad = valor;
    }
    setSalario(valor) {
        this.salario = valor;
    }
}
