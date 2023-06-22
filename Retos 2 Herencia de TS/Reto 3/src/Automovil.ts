//Reto 1 POO TS2


class Automovil extends Vehiculo {
  //1 - Atributos de class

  private cantPuertas:number=3;

  //2 - constructor de class
  constructor(newMarca:string,newModelo:string,newAnio:number,newPrecio:number,newCantidadPuertas:number){
    super(newMarca,newModelo,newAnio,newPrecio)
    this.cantPuertas=newCantidadPuertas
  }
  //3 - Metodos de class

  //getters y setters


  getCantidadPuertas():number{
    return this.cantPuertas;
  }
  setCantidadPuertas(valor:number){
    this.cantPuertas=valor;
  }

  calcularImpuesto(){
    return this.precio *0.02;
  }



}


