//Reto 3 POO TS

type typeConsumo = "A" | "B" | "C" | "D" | "E" | "F";
type typeColor = "blanco" | "negro" | "rojo" | "azul" | "gris";

const defPrecio: number = 100;
const defColor: typeColor = "blanco";
const defConsumo: typeConsumo = "F";
const defPeso: number = 5;
//1 - Atributos de class
class Electrodomestico {
  protected precio: number = defPrecio;
  protected color: typeColor = defColor;
  protected consumo: typeConsumo = defConsumo;
  protected peso: number = defPeso;

  //2 - constructor de class
  constructor(newColor: typeColor, newConsumo: typeConsumo, newPeso: number) {
    
    this.color = this.comprobarColor(newColor);
    this.consumo = this.comprobarConsumoEnergetico(newConsumo);
    this.peso = newPeso;
    this.precio = this.precioFinal();
  }

  //3 - Metodos de class

  //getters y setters

  getPrecio(): number {
    return this.precio;
  }
  getColor(): typeColor {
    return this.color;
  }
  getConsumo(): typeConsumo {
    return this.consumo;
  }
  getPeso(): number {
    return this.peso;
  }

  setPrecio(valor:number) {
    this.precio=valor;
  }
  setColor(valor:typeColor) {
    this.color=valor;
  }
  setConsumo(valor:typeConsumo) {
    this.consumo=valor;
  }
  setPeso(valor:number) {
    this.peso=valor;
  }

  comprobarConsumoEnergetico(letra: string): typeConsumo {

    let consumo: typeConsumo;

    switch (letra.toLowerCase()) {
      case "a":
        consumo = "A";
        break;
      case "b":
        consumo = "B";
        break;
      case "c":
        consumo = "C";
        break;
      case "d":
        consumo = "D";
        break;
      case "e":
        consumo = "E";
        break;
        
      default:
        consumo = defConsumo;
    }

    return consumo;
  }

  comprobarColor(color: string): typeColor {
    let colorElectrodomestico: typeColor;

    switch (color.toLowerCase()) {
      case "negro":
        colorElectrodomestico = "negro";
        break;
      case "rojo":
        colorElectrodomestico = "rojo";
        break;
      case "azul":
        colorElectrodomestico = "azul";
        break;
      case "gris":
        colorElectrodomestico = "gris";
        break;

      default:
        colorElectrodomestico = defColor;
    }

    return colorElectrodomestico;
  }

  precioFinal(): number {
    let precio: number = defPrecio;

    switch (this.consumo) {
      case "A":
        precio += 100;
        break;
      case "B":
        precio += 80;
        break;
      case "C":
        precio += 60;
        break;
      case "D":
        precio += 50;
        break;
      case "E":
        precio += 30;
        break;
      default:
        precio += 10;
    }

    if (this.peso > 0 && this.peso <= 19) {
      precio += 10;
    } else if (this.peso > 19 && this.peso <= 49) {
      precio += 50;
    } else if (this.peso > 49 && this.peso <= 79) {
      precio += 80;
    } else {
      precio += 100;
    }
    return precio;
  }
}


