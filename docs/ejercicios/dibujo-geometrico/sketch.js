function setup() {
  cv = createCanvas(400, 400);
}

function draw() {
  background(40);

  // rueda
  fill(180);
  noStroke();
  ellipse(205, 270, 40, 40);

  // procesador y antena
  stroke(250, 250, 0);
  strokeWeight(2);
  line(233, 75, 233, 95);
  noStroke();
  fill(25, 200, 100);
  rect(190, 110, 55, 30);
  rect(228, 95, 10, 30);
  triangle(245, 140, 220, 160, 200, 140);

  // cabeza
  noStroke();
  fill(255);
  beginShape();
  vertex(180, 100);
  vertex(200, 100);
  vertex(230, 135);
  vertex(230, 270);
  vertex(180, 270);
  endShape();

  // ojo
  fill(0);
  ellipse(200, 150, 25, 25);
  fill(255, 0, 0);
  ellipse(212, 130, 5, 5);
  ellipse(200, 150, 8, 8);

  // altavoz
  stroke(0);
  strokeWeight(2);
  line(220, 180, 220, 200);
  line(225, 180, 225, 200);
  line(215, 180, 215, 200);

  // sensor
  fill(0);
  ellipse(210, 250, 10, 10);

  // tornillos
  noStroke();
  fill(110);
  ellipse(184, 104, 3, 3);
  ellipse(199, 104, 3, 3);
  ellipse(226, 136, 3, 3);
  ellipse(184, 266, 3, 3);
  ellipse(226, 266, 3, 3);

  // pantalla
  fill(190);
  rect(150, 200, 30, 20);
  fill(255);
  rect(150, 220, 30, 10);
  fill(0, 50, 50);
  rect(155, 205, 20, 10);
  strokeWeight(1);
  stroke(255);
  point(160, 208);
  line(164, 208, 170, 208);
  line(158, 212, 167, 212);
}
