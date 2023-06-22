//Reto 3 POO TS

type typeConsumo = "A" | "B" | "C" | "D" | "E" | "F";
type typeColor = "blanco" | "negro" | "rojo" | "azul" | "gris";

const pre: number = 100;
const col: typeColor = "blanco";
const con: typeConsumo = "F";
const pes: number = 5;
//1 - Atributos de class
class Electrodomestico {
  protected precio: number = pre;
  protected color: typeColor = col;
  protected consumo: typeConsumo = con;
  protected peso: number = pes;

  //2 - constructor de class
  constructor(newColor: typeColor, newConsumo: typeConsumo, newPeso: number) {
    
    this.color = this.comprobarColor(newColor);
    this.consumo = this.comprobarConsumoEnergetico(newConsumo);
    this.peso = newPeso;
    this.precio = this.precioFinal(this.consumo,this.peso);
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
        consumo = "F";
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
        colorElectrodomestico = "blanco";
    }

    return colorElectrodomestico;
  }

  precioFinal(consumo: typeConsumo, peso: number): number {
    let precio: number = 0;

    switch (consumo) {
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

    if (peso <= 19) {
      precio += 10;
    } else if (peso > 19 && peso <= 49) {
      precio += 50;
    } else if (peso > 49 && peso <= 79) {
      precio += 80;
    } else {
      precio += 100;
    }
    return precio;
  }
}

//  let tele = new Electrodomestico(color,consumo,peso,precio)

 let tele = new Electrodomestico('rojo','A',50)

 console.log(tele)
