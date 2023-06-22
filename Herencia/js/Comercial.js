"use strict";
// clase hija de empleado
class Comercial extends Empleado {
    //2 - Constructor de clase
    constructor(newName, newEdad, newComision) {
        super(newName, newEdad); //traes los atributos del padre
        this.comision = newComision;
    }
}
