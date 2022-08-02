// https://www.flaticon.com/premium-icon/tree_4319613?term=tree&page=1&position=64&page=1&position=64&related_id=4319613&origin=search
// https://www.flaticon.com/premium-icon/elephant_3359878?related_id=3359878&origin=search

let tiempoRef = 0;
let tiempoCont = 0;
let tiempoEspera = 1000;

let momento = 0;
let xElef;
let xArbol;
let cfondo;

let imgElef;
let imgArbol;

let ciclo = 0;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  xElef = 200;
  xArbol = width;
  cfondo = color(0, 0, 20);
}

function draw() {
  background(cfondo);

  noStroke();
  fill(140, 170, 60);
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
    xElef += 2;
    xArbol -= 2;
    if (tiempoCont >= tiempoEspera) {
      tiempoRef = millis();
      cfondo = color(0, 0, 20);
      momento = 0;
    }
  }

  image(imgArbol, xArbol, 180, 120, 120);
  image(imgElef, xElef, 200, 100, 100);

  if (ciclo < 7) {
    image(imgElef, xElef - 100, 220, 80, 80);
  }
}

function preload() {
  imgElef = loadImage('assets/elefante.png');
  imgArbol = loadImage('assets/arbol.png');
}

