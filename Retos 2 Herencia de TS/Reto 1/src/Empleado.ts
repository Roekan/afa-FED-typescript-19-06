//Reto 1 POO TS2


class Empleado {
  //1 - Atributos de class
  protected nombre: string = '';
  protected edad: number = 18;
  protected salario: number = 800;
  

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number,newSalario:number) {
    this.nombre = newNombre,
    this.edad = newEdad,
    this.salario = newSalario
  }

  //3 - Metodos de class

  //getters y setters

  getNombre(){
    return this.nombre
  }
  getEdad(){
    return this.edad
  }
  getSalario(){
    return this.salario
  }

  setNombre(valor:string){
    this.nombre=valor
  }
  setEdad(valor:number){
    this.edad=valor
  }
  setSalario(valor:number){
    this.salario=valor
  }


}


