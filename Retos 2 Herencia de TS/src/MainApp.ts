
let arrayElectrodomesticos = [
//LAVADORAS: //Color //Consumo //Peso //Carga
  new Lavadora('blanco','A',80,30),
  new Lavadora('rojo','B',70,50),
  new Lavadora('azul','C',90,35),
  new Lavadora('gris','D',85,29),
  new Lavadora('negro','F',67,31),
  //Televisiones: //Color //Consumo //Peso //Resolucion //4K
  new Television('gris','B',10,200,false),
  new Television('blanco','C',11,220,true),
  new Television('gris','D',9,250,true),
  new Television('negro','E',13,190,false),
  new Television('blanco','F',9,120,false)

];

let precioTelevisiones:number=0;
let precioLavadoras:number=0;

let precioElectrodomesticos:number=0;

arrayElectrodomesticos.forEach(element => {
  
  if(element instanceof Lavadora){
    precioLavadoras+=element.precioFinal();
  }else{
    precioTelevisiones+=element.precioFinal();
  }
  precioElectrodomesticos+=element.precioFinal();
});


console.log('precioLavadoras ',precioLavadoras)
console.log('precioTelevisiones ', precioTelevisiones)
console.log('precioLavadoras ', precioElectrodomesticos)