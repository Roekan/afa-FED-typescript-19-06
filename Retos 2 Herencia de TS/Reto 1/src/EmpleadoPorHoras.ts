//Reto 1 POO TS2


class EmpleadoPorHoras extends Empleado {
  //1 - Atributos de class
  private tarifaHora: number = 0;
  

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number,newSalario:number,newTarifaHora:number) {
    super(newNombre,newEdad,newSalario);
    this.tarifaHora = newTarifaHora;
  }

  //3 - Metodos de class

  //getters y setters

  getTarifaHora(){
    return this.tarifaHora
  }
  setTarifaHora(horas:number){
    this.tarifaHora=horas
  }

  calcularSalario(horas:number):number{
    let salarioTotal:number=this.salario;

    salarioTotal = horas * this.tarifaHora

    if(horas>40){
      salarioTotal+=1.10;
    }

    return salarioTotal;
  }
}


