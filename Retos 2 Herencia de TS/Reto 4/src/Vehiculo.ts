//Reto 1 POO TS2


class Vehiculo {
  //1 - Atributos de class

protected marca:string='';
protected modelo:string='';
protected anio:number=0;
protected precio:number=0;

  //2 - constructor de class
constructor(newMarca:string,newModelo:string,newAnio:number,newPrecio:number){
  this.marca=newMarca,
  this.modelo=newModelo,
  this.anio=newAnio,
  this.precio=newPrecio
}
  //3 - Metodos de class

  //getters y setters


getMarca():string{
  return this.marca;
}
setMarca(valor:string){
  this.marca=valor;
}

getModelo():string{
  return this.modelo;
}
setModelo(valor:string){
  this.modelo=valor;
}

getAnio():number{
  return this.anio;
}
setAnio(valor:number){
  this.anio=valor;
}

getPrecio():number{
  return this.precio;
}
setPrecio(valor:number){
  this.precio=valor;
}



}


