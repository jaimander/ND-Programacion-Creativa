let cosa;

function setup() {
  createCanvas(innerWidth, innerHeight);

  cosa = new Cosa(random(width), random(height));

  background(50);
}

function draw() {
  cosa.mover();
  cosa.dibujar();
}
