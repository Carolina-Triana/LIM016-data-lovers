let aux= document.getElementById("audio");
aux.volume = 0.05;

/*import func from './data.js'

fetch('./data/rickandmorty/rickandmorty.json')
.then(function(info){ //primer then establece la conexion con el archivo
    return info.json()
})
.then(function(data){ //segundo then me llama la data de .json
    let person = data.results
    let alive=func.filterData(person, "none", "none", "Alive")
    let dead=func.filterData(person, "none", "none", "Dead")
    let unknown=func.filterData(person, "none", "none", "unknown")

    let porcAlive=func.computeData(person, alive)
    let porcDead=func.computeData(person, dead)
    let porcUnknown=func.computeData(person, unknown)

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Estado de vida', 'Cantidad de personajes'],
          ['Vivo',     porcAlive],
          ['Muerto',     porcDead],
          ['Desconocido',     porcUnknown]
        ]);

        var options = {
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'ffffff',
          },
          title: 'Estado de vida',
          colors:['#9acd32','#40e0d0', '#696969'],
          legend: {position: 'top', textStyle: {color: 'black', fontSize:16, alignment: 'end', position: 'right'}}
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }
})*/

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
/////********* graficas************/////
/*async function fetchdata(){
  const url = 'https://rickandmortyapi.com/api/character';
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  return data;

}*/
