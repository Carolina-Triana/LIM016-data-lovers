fetch('./data/rickandmorty/rickandmorty.json')
    .then(function(info){ //primer then establece la coneccion con el archivo
        return info.json();
    })
    .then(function(data){ //segundo then me llama la data de .json
    let person = data.results;
    let list=''//declaramos una variable que recopila el perfil de cada personaje
    person.forEach(function(element){
        list+= `<div class="card">
        <div>
        <img src=${element.image}>
        </img><h1>${element.name}</h1>
        </div>
        <div class="info">
        <ul>
        <li>Estado: ${element.status}</li>
        <li>Especie: ${element.species}</li>
        <li>Genero: ${element.gender}</li>
        <li>Origen: ${element.origin.name}</li>
        <li>Locacion: ${element.location.name}</li>
        </ul>
        </div>
        </div>`        
    })
   document.getElementById("profiles").innerHTML=list
  
   
let filterGender = document.getElementById("gender");//filtrar por genero
filterGender.addEventListener('change', () => {//usamos change para que el filtro sea inmediato cuando se cambia la opcion del select
let genderChoice=filterGender.value
let genderResults=person.filter((gen)=>{
    if(gen.gender===genderChoice){//comparamos el genero del personaje con el valor de genero elegido
        return true
    }else{
        if(genderChoice==="none")
        return person
    }
})
console.log(genderResults)
})


let filterSpecies = document.getElementById("species");//filtrar por especie
filterSpecies.addEventListener('change', () => {
let speciesChoice=filterSpecies.value
let speciesResults=person.filter((spe)=>{
    if(spe.species==speciesChoice){
        return true
    }else{
        if(speciesChoice==="none")
        return person
    }
})
console.log(speciesResults)
})


let orderAlpha=document.getElementById("alphabet")//ordenar por orden alfabetico
orderAlpha.addEventListener('change', () =>{
    let alphaChoice=orderAlpha.value
    let alphaResults=person.sort((a,b)=>{//funcion sort
        if(alphaChoice==="ascend"){//usamos ifs para saber si ordenamos de forma ascendente o descendente
                if(a.name<b.name){
                    return -1
                }if(a.name>b.name){
                    return 1
                }
                return 0
            }if(alphaChoice==="descend"){
                if(a.name<b.name){
                    return 1
                }if(a.name>b.name){
                    return -1
                }
                return 0
            }else{
            if(alphaChoice==="none"){//si no se elige un orden, se filtra como en el inicio, con el orden de id
                if(a.id<b.id){
                    return -1
                }if(a.id>b.id){
                    return 1
                }
                return 0
            }
            }
    })  
    console.log(alphaResults)
    })
})

//Ya se puede buscar y ordenar pero como proceso independiente, faltaria poder hacer busquedas cruzadas.
//Para eso deberiamos poner las funciones de filtrar y ordenar en data.js
//Ahi le dariamos inicio a todo con el boton de Aplicar filtros y orden
//La data de person iria pasando por cada filtro, reduciendo la info hasta obtener la info completamente filtrada y ordenada