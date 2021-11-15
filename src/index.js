let aux= document.getElementById("audio");
aux.volume = 0.05;


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
