//Reto 1 POO TS2


class Triangulo extends Figura {
  //1 - Atributos de class
  private lado1:number=0;
  private lado2:number=0;
  private lado3:number=0;
  private base:number=0;
  private altura:number=0;

  //2 - constructor de class
  constructor(newLado1:number,newLado2:number,newLado3:number,newAltura:number){
    super();
    this.lado1=newLado1;
    this.lado2=newLado2;
    this.lado3=newLado3;
    this.base=this.escogerBase();
    this.altura=newAltura;
  }
  //3 - Metodos de class

  //getters y setters

getLado1():number{
  return this.lado1
}
setLado1(valor:number){
  this.lado1=valor
}

getLado2():number{
  return this.lado2
}
setLado2(valor:number){
  this.lado2=valor
}

getLado3():number{
  return this.lado3
}
setLado3(valor:number){
  this.lado3=valor
}



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

    return (this.base * this.altura)/2

    // if(this.lado1!=this.lado2 && this.lado2!=this.lado3 && this.lado3!=this.lado1)
    // return Math.sqrt(p* ((p-this.lado1)*(p-this.lado2)*(p-this.lado3)))
    // }

  }

  calcularPerimetro():number{
    let perimetro:number=this.lado1+this.lado2+this.lado3;
    return perimetro;
  }

  escogerBase():number{
    return Math.min(this.lado1, this.lado2,this.lado3);
  }


}


