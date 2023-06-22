// //Persona class
// class Persona{
//     //1 - Atributos de class
//     private nombre:string='' ; //public, acceder desde cualquier lado
//     public edad:number=0; //private, acceder solo desde la clase
//     public haceDeporte: boolean = true; ///protected, acceder desde la clase y las que la hereden

//     //2 - constructor de class
//     constructor(newNombre:string, newEdad:number, newDeporte:boolean){

//         this.nombre = newNombre;
//         this.edad = newEdad;
//         this.haceDeporte = newDeporte;

//     }

//     //3 - Metodos de class
//     saluda():void{
//         console.log(`Hola, soy ${this.nombre}`);
//     }

//     //getters y setters

//     getNombre():string{
//         return this.nombre;
//     }

//     setNombre(newName:string):void{
//         this.nombre = newName;
//     }
// }



// //Creamos objetos instancias de clase
// let per1 = new Persona('Juan',35,true);
// console.log(per1.getNombre());


// let per2 = new Persona('Pepe',40,false);
// console.log(per2);
// // per2.nombre = 'Alvaro';
// per2.setNombre('Alvaro') 
// // console.log(per2.nombre);
// console.log(per2.getNombre());
// per2.saluda()



