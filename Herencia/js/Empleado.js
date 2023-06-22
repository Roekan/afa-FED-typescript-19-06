"use strict";
class Empleado {
    constructor(newNombre, newEdad) {
        this.nombre = newNombre;
        this.departamento = 'IT';
        this.edad = newEdad;
        this.esResponsable = false;
    }
    setResponsable() {
        if (this.esResponsable == true) {
            this.esResponsable = false;
        }
        else {
            this.esResponsable = true;
        }
    }
}
