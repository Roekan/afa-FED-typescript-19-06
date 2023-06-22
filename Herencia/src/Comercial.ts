// clase hija de empleado

class Comercial extends Empleado{
//1 - Atributos de clase
    private comision:number;

//2 - Constructor de clase
    constructor(newName:string,newEdad:number,newComision:number){
        super(newName,newEdad); //traes los atributos del padre
        this.comision=newComision;
    }
//3 - Métodos propio de clase

}


