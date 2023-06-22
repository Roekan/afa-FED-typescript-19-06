

const c = 5;

class Lavadora extends Electrodomestico{

//1 - Atributos de class
private carga:number=c;

//2 - Constructor de clase
constructor (newColor:typeColor,newConsumo:typeConsumo,newPeso:number,newCarga:number){
  super(newColor, newConsumo, newPeso);
  this.carga=newCarga;
  this.precio=this.precioFinal();
}


  //3 - Metodos de class
  getCarga():number{
    return this.carga;
  }

  setCarga(newCarga:number){
    this.carga = newCarga;
  }

  //El metodo que traemos del padre tiene que ser igual (pasarle los mismo atributos)
  //Si debemos añadir algo más de la clase actual con this.atributo se le puede añadir
  precioFinal():number {
    let precio = super.precioFinal();
    
    if(this.carga>30){
      precio+=50;
    }
    return precio;

}





}