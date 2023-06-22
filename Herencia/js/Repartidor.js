"use strict";
// clase hija de empleado
class Repartidor extends Empleado {
    //2 - Constructor de clase
    constructor(newName, newEdad, newArea) {
        super(newName, newEdad); //traes los atributos del padre
        this.area = newArea;
    }
    //3 - Métodos propio de clase
    getArea() {
        return this.area;
    }
    setArea(newArea) {
        this.area = newArea;
    }
}
