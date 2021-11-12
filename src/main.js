import func from './data.js'
fetch('./data/rickandmorty/rickandmorty.json')
.then(function(info){ //primer then establece la conexion con el archivo
    return info.json()
})
.then(function(data){ //segundo then me llama la data de .json
    let person = data.results

    function renderData (list){
        let profiles=''
        list.forEach(function(element){
          profiles+= 
          `<div class="container">
          <div class="card">
          <div class="front">
          <img src=${element.image}></img>
          <h2>${element.name}</h2>
          </div>
          <div class="info">
          <ul>
          <p><b>Estado:</b> ${element.status}</p>
          <p><b>Especie:</b> ${element.species}</p>
          <p><b>Genero:</b> ${element.gender}</p>
          <p><b>Origen:</b> ${element.origin.name}</p>
          <p><b>Locacion:</b> ${element.location.name}</p>
          </ul>
          </div>
          </div>
          </div>`
        })
        return profiles
    }    

    let personFormat=renderData(person)
    document.getElementById("profiles").innerHTML=personFormat

    let getResults=document.getElementById("applyFilters")
    getResults.addEventListener('click',() =>{
        let genderChoice=document.getElementById("gender").value
        let speciesChoice=document.getElementById("species").value
        let statusChoice=document.getElementById("status").value
        let filterResults=func.filterData(person, genderChoice, speciesChoice, statusChoice)
        let numberResults=filterResults.length
        document.getElementById("numberOfResults").innerHTML=numberResults + " resultados"
        let orderChoice=document.getElementById("alphabet").value
        let orderedResults=func.sortData(filterResults, orderChoice)
        let renderedData=renderData(orderedResults)
        document.getElementById("profiles").innerHTML=renderedData
    })
})

let clean = document.getElementById("clean")
clean.addEventListener('click',() => {
    location.reload()
})



// boton up //

document.getElementById("btn-up").addEventListener("click", scrollUp);
function scrollUp(){
    let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    if( scroll >0 ){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, scroll -(scroll / 5));
    }
}
let btn = document.getElementById("btn-up");
window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if(scroll > 500){
     btn.style.transform = "scale(1)";
    }else if(scroll < 500){
        btn.style.transform = "scale(0)";

    }
}