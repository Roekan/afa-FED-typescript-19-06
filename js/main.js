
//let resultsContainer = document.getElementById('results');



// const getAllCharacers = async () =>{
//     let res = await axios.get('https://rickandmortyapi.com/api/character')

//     return res.data.results;
// }


// //Pinto todo al cargar la página

// window.addEventListener('load',()=>{
//     resultsContainer.replaceChildren()
//     getAllCharacers()
//     .then(res =>{
//     res.map((char)=>{
//         console.log(char);

//     const tarjetaPersonaje = document.createElement("div")
//     const nombrePersonaje = document.createElement('div')
    
//     appendAndStyle(resultsContainer,tarjetaPersonaje,'card',char.name)
    

  

//         nombrePersonaje.classList.add('nombre')

//         nombrePersonaje.innerHTML= char.name





//             })
//         })
// })


// const appendAndStyle = (father, child, clase, content)=>{
//     father.appendChild(child);
//     child.classList.add(clase)
//     if(content){
//         child.innerHTML = content
//     }
// }





//API CALL

//Consigo el contenedor donde vamos a pintar el HTML
let container = document.getElementById('results');

//Consigo el input de busqueda
let inputSearch = document.getElementById('inputText');

//Consigo el boton del input de busqueda
let buttonSearch = document.getElementById('inputButton');






//Hago la llamada a la API
const getAllCharacters = async() =>{
    let res = await axios.get('https://rickandmortyapi.com/api/character')
    //console.log(res.data.results)
    return res.data.results
}

const getCharacterFilter= async() =>{
    let res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${inputText}`)
    return res.data.results
}


//CREO EL EVENTO DE CAMBIO DEL INPUT

let searchTerm="";

inputSearch.addEventListener("change", (e) => {
        inputText = e.target.value
        console.log(inputText)
    })

buttonSearch.addEventListener('click',()=>{
    container.replaceChildren();
    getCharacterFilter().then((res)=>{
res.map((char)=>{
console.log(char);

const characterCard =document.createElement('div')
const citySection =document.createElement('div')
const characterStatus=document.createElement('div')
const characterImage=document.createElement('div')

const characterSpecie=document.createElement('div')

addElement(container,characterCard,'card',`<div class="section"><span class="black">Nombre:</span> ${char.name}</div>`)
addElement(characterCard,citySection,'section',`<span class="black">Ciudad: </span>${char.location.name}`)
addElement(characterCard,characterStatus,'section',`<span class="black">Estado: </span>${char.status}`)
addElement(characterCard,characterImage,'image',`<img src="${char.image}" alt="${char.name}">`)
addElement(characterCard,characterSpecie,'section',`<span class="link">${char.species}</span>`)
        })
    })
})




//CREO EL EVENTO DE CARGA DE PÄGINA
window.addEventListener('load',()=>{
    getAllCharacters()
    .then(res=>{
        res.map((char)=>{
            // console.log(char);

            //////////////////////Pintar todo al cargar la página
  
  
  
  
  
            //Creamos el elemento
const characterCard =document.createElement('div')




const citySection =document.createElement('div')
const characterStatus=document.createElement('div')
const characterImage=document.createElement('div')


const characterSpecie=document.createElement('div')

addElement(container,characterCard,'card',`<div class="section"><span class="black">Nombre:</span> ${char.name}</div>`)






addElement(characterCard,citySection,'section',`<span class="black">Ciudad: </span>${char.location.name}`)
addElement(characterCard,characterStatus,'section',`<span class="black">Estado: </span>${char.status}`)
addElement(characterCard,characterImage,'image',`<img src="${char.image}" alt="${char.name}">`)

addElement(characterCard,characterSpecie,'section',`<span class="link">${char.species}</span>`)
        })
    })
})










//Funcion para añadir elementos en el HTML
//Primero hay que crear el elemento
const addElement = (father,child,styleClass,info) =>{
    father.appendChild(child);
    child.classList.add(styleClass)
    if(info){
        child.innerHTML=info;
    }
}



