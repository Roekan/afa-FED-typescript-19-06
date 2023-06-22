class Television extends Electrodomestico {
  //1 - Atributos de class
  private resolucion: number = 20;
  private calidad4K: boolean = false;

  //2 - Constructor de clase
  constructor(
    newColor: typeColor,
    newConsumo: typeConsumo,
    newPeso: number,
    newResolucion: number,
    newCalidad4k: boolean
  ) {
    super(newColor, newConsumo, newPeso);
    this.resolucion = newResolucion;
    this.calidad4K = newCalidad4k;
    this.precio=this.precioFinal();
  }

  //3 - Metodos de class
  getResolucion(): number {
    return this.resolucion;
  }
  
  getCalidad4k(): boolean {
    return this.calidad4K;
  }


  //dejar identico al padre
  precioFinal():number {
    let precio = super.precioFinal();

    if (this.resolucion > 40) {
        let precioPorcentaje =  (precio/100)*30
        precio += precioPorcentaje;
    }

    if (this.calidad4K) {
        precio += 50;
    }

    return precio;
  }
}
