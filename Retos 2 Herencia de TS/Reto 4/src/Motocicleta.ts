//Reto 1 POO TS2


class Motocicleta extends Vehiculo {
  //1 - Atributos de class

  private cilindrada:number=0;

  //2 - constructor de class
  constructor(newMarca:string,newModelo:string,newAnio:number,newPrecio:number,newCilindrada:number){
    super(newMarca,newModelo,newAnio,newPrecio)
    this.cilindrada=newCilindrada
  }
  //3 - Metodos de class

  //getters y setters


  getCilindrada():number{
    return this.cilindrada;
  }
  setCilindrada(valor:number){
    this.cilindrada=valor;
  }

  calcularImpuesto(){
    return this.precio *0.01;
  }

}


