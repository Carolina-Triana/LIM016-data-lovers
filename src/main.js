    fetch('./data/rickandmorty/rickandmorty.json')
    .then(function(info){ //primer then establece la coneccion con el archivo
        return info.json();
    })
    .then(function(data){ //segundo then me llama la data de .json
    let person = data.results;
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
    document.getElementById("profiles").innerHTML=list
    })
