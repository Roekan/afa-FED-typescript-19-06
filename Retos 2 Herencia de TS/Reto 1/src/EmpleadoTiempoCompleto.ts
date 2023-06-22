//Reto 1 POO TS2


class EmpleadoTiempoCompleto extends Empleado {
  //1 - Atributos de class
  private horasTrabajadas: number = 40;

  

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number,newSalario:number) {
    super(newNombre,newEdad,newSalario);
  }

  //3 - Metodos de class

  //getters y setters

  getHorasTrabajadas(){
    return this.horasTrabajadas
  }
  setHorasTrabajadas(horas:number){
    this.horasTrabajadas=horas
  }

  calcularSalario(tarifa:number):number{
    let salarioTotal:number=tarifa*this.horasTrabajadas;
    this.salario=salarioTotal;
    return this.salario;
  }



}


