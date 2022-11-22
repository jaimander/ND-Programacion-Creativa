let x;
let y;
let diametro;
let presionar = false;
let r, g, b;
let palabras = ["Depression", "Anxiety", "Sadness", "Loneliness", "Change", "Balance", "Be Better", "Happiness", "Control", "Again?"];
let contador = 0;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  x = random(200, 800);
  y = random(100, 400);
  diametro = 200;
  r = random(255);
  g = random(255);
  b = random(255);
  sizefont = 24;
}

function draw() {
  background(100, 200, 120);
  texto = palabras[contador];

  if (contador < 5) {
    fill(r, g, b);
    ellipse(x, y, diametro, diametro);
    fill(0);
    textSize(sizefont);
    textAlign(CENTER);
    text(texto, x, y + 10);
  }
  else if (contador >= 5) {
    fill(r, g, b);
    rect(x, y, diametro, diametro);
    fill(0);
    textSize(sizefont);
    textAlign(CENTER);
    text(texto, x + 120, y + 100);
  }


  if (presionar == true) {
    diametro = diametro * 2;
    sizefont = sizefont * 2;
    presionar = false;
  }

  if (diametro > width || diametro > height) {
    diametro = 200;
    x = random(200, 800);
    y = random(100, 400);
    r = random(255);
    g = random(255);
    b = random(255);
    sizefont = 24;
    contador += 1;
  }

  if (contador == 10) {
    contador = 0;
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y);
  if (d < diametro) {
    if (presionar == false) {
      presionar = true;
      console.log(presionar);
    }
  }
}
