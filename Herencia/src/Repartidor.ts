// clase hija de empleado

class Repartidor extends Empleado{
//1 - Atributos de clase
    protected area:string;

//2 - Constructor de clase
    constructor(newName:string,newEdad:number,newArea:string){
        super(newName,newEdad); //traes los atributos del padre
        this.area=newArea;
    }
//3 - Métodos propio de clase
    getArea():string{
        return this.area;
    }

    setArea(newArea:string):void{
        this.area = newArea;
    }
}


