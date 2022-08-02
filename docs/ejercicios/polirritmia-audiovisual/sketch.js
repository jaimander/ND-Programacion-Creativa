let tiempoRef = 0;
let tiempoCont = 0;
let tiempoEspera = 1000;

let momento = 0;
let x;
let xArbol;
let cfondo;

let imgIzq;
let imgDer;
let imgArbol;

let ciclo = 0;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  frameRate(30);
  pixelDensity(2);
  x = 200;
  xArbol = width;
  cfondo = color(0, 0, 20);
}

function draw() {
  background(cfondo);

  noStroke();
  fill(140, 150, 60);
  rect(0, 300, width, height);

  if (momento == 0) {
    tiempoCont = millis() - tiempoRef;

    if (tiempoCont >= tiempoEspera) {
      tiempoRef = millis();
      cfondo = color(200, 240, 255);
      momento = 1;
      ciclo++;
    }
  }

  if (momento == 1) {
    tiempoCont = millis() - tiempoRef;
    x += 2;
    xArbol -= 2;
    if (tiempoCont >= tiempoEspera) {
      tiempoRef = millis();
      cfondo = color(0, 0, 20);
      momento = 0;
    }
  }

  image(imgArbol, xArbol, 180, 120, 120);
  image(imgDer, x, 200, 100, 100);

  if (ciclo < 7) {
    image(imgDer, x - 100, 220, 80, 80);
  }
}

function preload() {
  imgIzq = loadImage('assets/elefanteIzq.png');
  imgDer = loadImage('assets/elefanteDer.png');
  imgArbol = loadImage('assets/arbol.png');
}
function keyPressed() {}
