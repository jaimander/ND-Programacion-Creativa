let xcir, ycir;
let pregunta1;
let pregunta2;
let cfondo;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  xcir = width / 2;
  ycir = height / 2;
  pregunta1 = new Pregunta(color(255, 255, 0));
  pregunta2 = new Pregunta(color(0, 200, 255));
  cfondo = 80;
}

function draw() {
  background(cfondo);
  noStroke();

  // circulo
  stroke(255);
  noFill();
  strokeWeight(3);
  ellipse(mouseX, mouseY, 400, 400);

  pregunta1.update();
  pregunta2.update();

  let distP1 = dist(pregunta1.x, pregunta1.y, mouseX, mouseY);
  let distP2 = dist(pregunta2.x, pregunta2.y, mouseX, mouseY);

  if(distP1 < 200 && distP2 < 200){
    cfondo = color(0, 255, 100);
  }
}

class Pregunta {
  constructor(col) {
    this.x = random(width);
    this.y = random(height);
    this.dir = 1;
    this.vel = 4;
    this.col = col;
  }

  update() {
    noStroke();
    fill(this.col);
    rectMode(CENTER);
    rect(this.x, this.y, 80, 80);

    this.x = this.x + this.vel * this.dir;

    if (this.x > width) {
      this.dir = -1;
    }
    if (this.x < 0) {
      this.dir = 1;
    }
  }
}