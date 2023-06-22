"use strict";
//Reto 2 POO TS
//Se puede declarar un tipo personalizado
class Password {
    constructor(newLongitud) {
        //1 - Atributos de class
        this.longitud = 1;
        this.contraseña = "";
        this.longitud = newLongitud;
        this.contraseña = this.generarPassword(this.longitud);
    }
    generarPassword(longitud) {
        let pass = "";
        const stcharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
        for (let i = 0; i < longitud; i++) {
            pass += stcharacters[Math.floor(Math.random() * 65)];
        }
        return pass;
    }
}
//Instanciar objetos
let pass = new Password(10);
console.log(pass);
