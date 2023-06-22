

//Nombre,Edad,Salario
 let empleado = new Empleado('Alvaro',32,50)
 console.log(empleado);
 console.log(`Nombre: ${empleado.getNombre()}`);
 console.log(`Edad: ${empleado.getEdad()}`);
 console.log(`Salario: ${empleado.getSalario()}`);

//Nombre,Edad,Salario //Horas trabajadas
 let empleadoTiempoCompleto = new EmpleadoTiempoCompleto('Alvaro',32,50)
 console.log(empleadoTiempoCompleto);
 console.log(`Nombre: ${empleadoTiempoCompleto.getNombre()}`);
 console.log(`Edad: ${empleadoTiempoCompleto.getEdad()}`);
 console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario(20)}`);

//Nombre,Edad,Salario //Tarifa por Hora
let empleadoPorHoras = new EmpleadoPorHoras('Alvaro',32,50,20)
console.log(empleadoPorHoras);
console.log(`Nombre: ${empleadoPorHoras.getNombre()}`);
console.log(`Edad: ${empleadoPorHoras.getEdad()}`);
console.log(`Salario: ${empleadoPorHoras.calcularSalario(41)}`); //LEpaso por parametro las horas trabajadas





