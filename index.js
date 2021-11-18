let aux= document.getElementById("audio");
aux.volume = 0.05;

import func from'./data.js'

fetch('./src/data/rickandmorty/rickandmorty.json')
.then(function(info){ //primer then establece la conexion con el archivo
    return info.json()
})

.then(function(data){ //segundo then me llama la data de .json
  let person = data.results
  let alive=func.filterData(person, "none", "none", "Alive")
  let dead=func.filterData(person, "none", "none", "Dead")
  let unknown=func.filterData(person, "none", "none", "unknown")
  let porcentageA=func.computeData(person, alive)
  let porcentageD=func.computeData(person, dead)
  let porcentageU=func.computeData(person, unknown)

// eslint-disable-next-line no-undef
google.charts.load('current', {'packages':['corechart']});
// eslint-disable-next-line no-undef
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  
  // eslint-disable-next-line no-undef
  let data = google.visualization.arrayToDataTable([
    ['Estado de vida', '# de personajes'],
    ['Vivo',     porcentageA],
    ['Muerto',     porcentageD],
    ['Desconocido',     porcentageU],
  ]);

  let options = {
    title: 'Estado de personajes temporada 3',
    titleTextStyle: {bold:'true', fontSize: 18},
    colors: ['#80CA23','#45B5C7','#a9a9a9'],
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: {position: 'labeled'},
  };

  // eslint-disable-next-line no-undef
  let chart = new google.visualization.PieChart(document.getElementById('donut_single'));
  chart.draw(data, options);
}
})

const slider = document.getElementById("slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionFin = sliderSection[sliderSection.length -1];
const btnLeft = document.getElementById("slider-btn-left");
const btnRight = document.getElementById("slider-btn-rigth");
slider.insertAdjacentElement('afterbegin', sliderSectionFin); // coloca de priemero la ultima imagen para que se vuelva infinito
function next(){
  let sliderOne = document.querySelectorAll(".slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){ //setTimeOut una funcion para ejecutar despues del temporizador en este caso 500 q son medio segundo
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderOne);
    slider.style.marginLeft = "-100%";
  },500);
}
function prew(){
  let sliderSection = document.querySelectorAll(".slider-section");
  let sliderSectionFin = sliderSection[sliderSection.length-1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function(){ 
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionFin);
    slider.style.marginLeft = "-100%";
  },500);
}
btnRight.addEventListener('click', function(){
  next();
});
btnLeft.addEventListener('click', function(){
  prew();
});
setInterval(function(){ //setInterval para que se ejecute algo automaticamente
next()
},7000);

