

/*

setInterval Didn't Work so I switched to setTimeout

var rangeslider = document.getElementById("nyanSlider");
var nyanValue = document.getElementById("nyanSlider").value;
var output = document.getElementById("output");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
  nyanValue = this.value;
}



var myVar;
function nyanTimer() {   
    myVar = setInterval(nyanGenerator, 300);
}

rangeslider.oninput = function() {
    output.innerHTML = this.value;
    nyanValue = this.value;
  }

function nyanGenerator() {
let myNumX = Math.floor(Math.random() * Math.floor(445));
let myNumY = Math.floor(Math.random() * Math.floor(600));
let root = document.documentElement;
root.style.setProperty('--nyanX', `${myNumX}` + "px");
root.style.setProperty('--nyanY', `${myNumY}` + "px");
console.log(`${myNumX}, ${myNumY}`)
console.log(document.getElementById("nyanSlider").value);
}


nyanTimer();  

*/
var trap = new Audio('trap-long.mp3');
trap.loop = false;
trap.addEventListener('ended', function() {
    this.currentTime = 0;
    this.pause();
}, true);


var route = new Audio('route-101quiet.mp3');
route.volume = 0.18;


var timing = 500,
    output = document.getElementById('output');
    output.innerHTML = "0.50 seconds";
function nyanGenerator() {
  let myNumX = Math.floor(Math.random() * Math.floor(445));
  let myNumY = Math.floor(Math.random() * Math.floor(600));
  let root = document.documentElement;
  root.style.setProperty('--nyanX', `${myNumX}` + "px");
  root.style.setProperty('--nyanY', `${myNumY}` + "px");
  console.log(`${myNumX}, ${myNumY}`)
  console.log(document.getElementById("nyanSlider").value);
  root.style.setProperty('--transitionX', `${timing * 0.0005}` + "s");
  root.style.setProperty('--transitionY', `${timing * 0.001}` + "s");
  if (timing < 61){
    document.getElementById("nyanid").classList = "speednyan";
    document.getElementById("mother").classList = "mother redglow";
    document.getElementById("redbox").classList = "redbox";
    document.getElementById("nyanSpeed").classList = "invertedHeader";
    document.getElementById("header").classList = "invertedHeader";
    document.getElementById("body").classList = "invertedBody";
    trap.play();
    route.pause();
  }
  else {
    document.getElementById("nyanid").classList = "nyancat";
    document.getElementById("mother").classList = "mother";
    document.getElementById("redbox").classList = "clearbox";
    document.getElementById("nyanSpeed").classList = "normalHeader";
    document.getElementById("header").classList = "normalHeader";
    document.getElementById("body").classList = "normalBody";
    trap.pause();
    trap.currentTime = 0;
    route.play();

  }
  window.setTimeout(nyanGenerator, timing);
}

document.getElementById("nyanSlider").addEventListener('input', function () {
  timing = this.value;
  output.innerHTML = (this.value * 0.001).toFixed(2) + " seconds";
});

nyanGenerator();
