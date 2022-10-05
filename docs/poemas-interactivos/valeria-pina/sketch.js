// variables
let x = 100;
let y = 100;

let dir = 1;
let vel = 3;

let colorRect1 = 0;
let colorRect2 = 0;
let colorFondo = 0;

function setup() {
  createCanvas(600, 600);

  colorRect1 = color(255, 173, 1);
  colorRect2 = color(250, 128, 114);
  colorFondo = color(0);
}

function draw() {
  //fondo
  background(colorFondo);

  //letras
  textSize(20);
  fill(255);
  text("Cada vez que te busco te vas...", width / 4, 50);

  //cuadrado mostaza
  fill(colorRect1)
  noStroke();
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);

  //cuadrado salmon
  fill(colorRect2);
  noStroke();
  rectMode(CENTER);
  rect(x, y, 50, 50);

  //movimiento salmon ida
  x = x + (vel * dir);

  if (x > 500) {
    y = y + (vel * dir)
    x = 500
  }

  if (y > 200) {
    dir = -1
    x = x + (vel * dir);
  }

  if (x < 100) {
    dir = 1
    y = y + (vel * dir)
    x = 100
  }

  if (y > 300) {
    dir = 1
    x = x + (vel * dir);
  }

  if (x > 500) {
    y = y + (vel * dir)
    x = 500
  }

  if (y > 400) {
    dir = -1
    x = x + (vel * dir);
  }

  if (x < 100) {
    x = 100
    dir = 1
    y = y + (vel * dir)
  }

  if (y > 500) {
    dir = -1
    x = x + (vel * dir);
  }

  if (x < 100) {
    x = 100
    y = 100
  }

  //repeler
  if (dist(mouseX, mouseY, x, y) < 30) {
    dir = -1
    y -= 10
  }

  //cambio de color del cubo
  if (dist(mouseX, mouseY, x, y) < 50) {
    colorRect1 = color(0, 0, 255);
  } else {
    colorRect1 = color(255, 173, 1);
  }
}
 
