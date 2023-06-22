//Reto 2 POO TS

//Se puede declarar un tipo personalizado

class Password {
  //1 - Atributos de class
  private longitud: number = 1;
  public contraseña: string = "";

  constructor(newLongitud: number) {
    this.longitud = newLongitud;
    this.contraseña = this.generarPassword(this.longitud);
  }

  generarPassword(longitud: number): string {
    let pass: string = "";
    const stcharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

    for (let i = 0; i < longitud; i++) {
      pass += stcharacters[Math.floor(Math.random() * 65)];
    }

    return pass;
  }
}
//Instanciar objetos

let pass = new Password(10);

console.log(pass);
