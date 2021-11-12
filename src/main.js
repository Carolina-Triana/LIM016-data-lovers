import func from './data.js'
fetch('./data/rickandmorty/rickandmorty.json')
.then(function(info){ //primer then establece la conexion con el archivo
    return info.json()
})
.then(function(data){ //segundo then me llama la data de .json
    let person = data.results
    let personFormat=func.formatData(person)
    document.getElementById("profiles").innerHTML=personFormat

    let getResults=document.getElementById("applyFilters")
    getResults.addEventListener('click',() =>{
        let genderChoice=document.getElementById("gender").value
        let speciesChoice=document.getElementById("species").value
        let filterResults=func.filterData(person, genderChoice, speciesChoice)
        let numberResults=filterResults.length
        if (numberResults>0){
            console.log(numberResults)
            document.getElementById("numberOfResults").innerHTML=numberResults+" coincidencias"
        }else{
            console.log("0 resultados")
            document.getElementById("numberOfResults").innerHTML=numberResults + "  coincidencias"
        }
        let orderChoice=document.getElementById("alphabet").value
        let orderedResults=func.sortData(filterResults, orderChoice)
        console.log(orderedResults)
        let formatedData=func.formatData(orderedResults)
        document.getElementById("profiles").innerHTML=formatedData
    })
})

let clean = document.getElementById("clean")
clean.addEventListener('click',() => {
    location.reload()
})



// boton up //
let bt =document.getElementById("btn-up").addEventListener("click", scrollUp);
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