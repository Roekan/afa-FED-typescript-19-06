class Empleado{
    protected nombre:string;
    protected departamento:string;
    protected edad:number;
    protected esResponsable:boolean;


    constructor(newNombre:string,newEdad:number){

        this.nombre=newNombre;
        this.departamento='IT';
        this.edad=newEdad;
        this.esResponsable = false;
    }

    setResponsable(){
        if(this.esResponsable == true){
            this.esResponsable = false;
        }else{
            this.esResponsable = true;
        }
    }

}


