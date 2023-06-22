//Reto 1 POO TS

//Se puede declarar un tipo personalizado
// type sexType = 'H'|'M';

// const genero: sexType = "H";

// class Persona {
//   //1 - Atributos de class
//   private nombre: string = "";
//   private edad: number = 0;
//   private dni: string;
//   private sexo: sexType = genero;
//   private peso: number = 0;
//   private altura: number = 0;

//   constructor(
//     newNombre: string,
//     newEdad: number,
//     newDni: string,
//     newSexo: string,
//     newPeso: number,
//     newAltura: number
//   ) {
//     this.nombre = newNombre;
//     this.edad = newEdad;
//     this.dni = newDni;
//     this.sexo = newSexo;
//     this.peso = newPeso;
//     this.altura = newAltura;
//   }

//   saluda(): void {
//     console.log(`Hola, soy ${this.nombre}`);
//   }

//   //getters
//   getNombre(): string {
//     return this.nombre;
//   }
//   getEdad(): number {
//     return this.edad;
//   }
//   getDni(): string {
//     return this.dni;
//   }
//   getGenero(): string {
//     return this.sexo;
//   }
//   getPeso(): number {
//     return this.peso;
//   }
//   getAltura(): number {
//     return this.altura;
//   }
//   //setter
//   setNombre(name: string): void {
//     this.nombre = name;
//   }

//   setEdad(age: number): void {
//     this.edad = age;
//   }
//   setDni(dni: string): void {
//     this.dni = dni;
//   }
//   setGenero(gnr: string): void {
//     this.sexo = gnr;
//   }
//   setPeso(weight: string): void {
//     this.sexo = weight;
//   }
//   setAltura(size: string): void {
//     this.sexo = size;
//   }
// }
// //Instanciar objetos

// let p1 = new Persona("Pedro", 18, "23546891X", "H", 85, 180);
// let p2 = new Persona("Maria", 52, "13154689F", "M", 60, 160);
// let p3 = new Persona("Paco", 86, "54897614X", "H", 74, 1740);

// console.log(p1);
// console.log(p2);
// console.log(p3);
