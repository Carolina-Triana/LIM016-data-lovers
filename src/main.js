fetch('./data/rickandmorty/rickandmorty.json')
    .then(function(info){ //primer then establece la coneccion con el archivo
        return info.json();
    })
    .then(function(data){ //segundo then me llama la data de .json
    let person = data.results;
    console.log(person);
    let list=''
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
 let li = document.getElementById("profiles").innerHTML=list

    let alpha = person.filter((gen) => {
        if (gen.gender === "Female"){
            return true;
        } else {
            return false;
        }
})
let filter = document.getElementById("gender");
filter.addEventListener('click', () => {
console.log(alpha); // AL HACER CLICK IMPRIME EL VALOR DE ALPHA
})
})    
       //no consigo como hacer que muestre solo este resultado, investiga un poco sobre eso =)
//console.log(person);