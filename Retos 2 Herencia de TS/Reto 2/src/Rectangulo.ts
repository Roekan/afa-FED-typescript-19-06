//Reto 1 POO TS2


class Rectangulo extends Figura {
  //1 - Atributos de class
  private base:number=0;
  private altura:number=0;

  //2 - constructor de class
  constructor(newBase:number,newAltura:number){
    super();
    this.base=newBase;
    this.altura=newAltura;
  }
  //3 - Metodos de class

  //getters y setters

getBase():number{
  return this.base
}
setBase(valor:number){
  this.base=valor
}

getAltura():number{
  return this.altura
}
setAltura(valor:number){
  this.altura=valor
}

//otros metodos

  calcularArea():number{
    return this.base * this.altura;
  }


  calcularPerimetro():number{
    let perimetro:number=0;
    return (this.base*2) + (this.altura*2);
  }


}


