let xcen;
let ycen;

let divx1;
let divx2;

let tiempoRef1 = 0;
let tiempoCont1;
let tiempoPulso1 = 1000;
let tiempoRef2 = 0;
let tiempoCont2;
let tiempoPulso2 = 500;

let col1;
let col2;
let col3;

let posx;
let posy;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  divx1 = width / 3;
  divx2 = (width / 3) * 2;

  xcen = width / 2;
  ycen = height / 2;

  col1 = color(random(255), random(255), random(255));

  posx = random(divx1, divx2);;
  posy = 0;
  
}

function draw() {
  background(200);

  // calculo tiempo
  tiempoCont1 = millis() - tiempoRef1;
  tiempoCont2 = millis() - tiempoRef2;

  if (tiempoCont1 >= tiempoPulso1) {
    tiempoRef1 = millis();
    col1 = color(random(255), random(255), random(255));
  }

  if (tiempoCont2 >= tiempoPulso2) {
    tiempoRef2 = millis();

    posx = random(divx1, divx2);
    posy = random(0, height);
  }



  // divisiones
  strokeWeight(2);
  stroke(255);
  line(divx1, 0, divx1, height);
  line(divx2, 0, divx2, height);

  // rect1
  noStroke();
  fill(col1);
  rect(0, 0, divx1, height);

   // ellipses
   noStroke();
   fill(255);
   ellipse(posx, posy, 100, 100);
}

function keyPressed() {
}