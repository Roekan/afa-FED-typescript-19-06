
//Base, Altura
let vehiculo1 = new Vehiculo('renault','5',1990,5000)

console.log(vehiculo1);
console.log(`Marca: ${vehiculo1.getMarca()}`);
console.log(`Modelo: ${vehiculo1.getModelo()}`);
console.log(`Año: ${vehiculo1.getAnio()}`);
console.log(`Precio: ${vehiculo1.getPrecio()}`);


let vehiculo2 = new Automovil('volkswagen','corrado',1995,12000,3)
console.log(vehiculo2);
console.log(`Marca: ${vehiculo2.getMarca()}`);
console.log(`Modelo: ${vehiculo2.getModelo()}`);
console.log(`Año: ${vehiculo2.getAnio()}`);
console.log(`Precio: ${vehiculo2.getPrecio()}`);
console.log(`Puertas: ${vehiculo2.getCantidadPuertas()}`);
console.log(`Impuesto: ${vehiculo2.calcularImpuesto()}`);

let vehiculo3 = new Motocicleta('Kawasaki','Ninja',1990,2000,300)
console.log(vehiculo3);
console.log(`Marca: ${vehiculo3.getMarca()}`);
console.log(`Modelo: ${vehiculo3.getModelo()}`);
console.log(`Año: ${vehiculo3.getAnio()}`);
console.log(`Precio: ${vehiculo3.getPrecio()}`);
console.log(`Cilindrada: ${vehiculo3.getCilindrada()}`);
console.log(`Impuesto: ${vehiculo3.calcularImpuesto()}`);