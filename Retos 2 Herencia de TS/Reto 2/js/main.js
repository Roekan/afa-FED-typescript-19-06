"use strict";
//Base, Altura
let rectangulo = new Rectangulo(5, 6);
console.log(rectangulo);
console.log(`Area: ${rectangulo.calcularArea()}`);
console.log(`Perimetro: ${rectangulo.calcularPerimetro()}`);
//Lado1,Lado2,Lado3,Base, Altura
let triangulo = new Triangulo(5, 5, 5, 10);
console.log(triangulo);
console.log(`Base: ${triangulo.escogerBase()}`);
console.log(`Area: ${triangulo.calcularArea()}`);
console.log(`Perimetro: ${triangulo.calcularPerimetro()}`);
