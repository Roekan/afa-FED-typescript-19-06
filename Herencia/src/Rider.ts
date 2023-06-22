// clase hija de empleado

class Rider extends Repartidor{
//1 - Atributos de clase
    private kmDia:number;

//2 - Constructor de clase
    constructor(newName:string,newEdad:number,newArea:string,newKms:number){
        super(newName,newEdad,newArea); //traes los atributos del padre
        this.kmDia=newKms;
    }
//3 - Métodos propio de clase

}


