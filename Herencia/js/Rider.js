"use strict";
// clase hija de empleado
class Rider extends Repartidor {
    //2 - Constructor de clase
    constructor(newName, newEdad, newArea, newKms) {
        super(newName, newEdad, newArea); //traes los atributos del padre
        this.kmDia = newKms;
    }
}
