let imgFondo;
let imgSitp;
let imgTransmi;

let audio1;
let area1;
let played = false;

function preload() {
  imgFondo = loadImage('assets/trancon.jpg');

  imgSitp = loadImage('assets/sitp.png');
  imgTransmi = loadImage('assets/transmi.png');
  imgFurgon = loadImage('assets/furgon.png');

  audio1 = loadSound('assets/transmilenio.mp3');
  audio2 = loadSound('assets/furgon.mp3');
}

function setup() {
  createCanvas(imgFondo.width, imgFondo.height);
  background(50);

  // audio1.play();
  //area = new AreaInteractiva(210, 335, 160, 110, audio1, imgSitp);
  area1 = new AreaInteractiva(874, 70, 100, 80, audio1, imgTransmi);
  area2 = new AreaInteractiva(470, 410, 120, 200, audio2, imgFurgon);
}

function draw() {
  image(imgFondo, 0, 0);

  area1.actualizar();
  area1.mostrar();

  area2.actualizar();
  area2.mostrar();

  /*
  fill(255, 0, 0);
  textSize(20);
  text(mouseX + ' ' + mouseY, mouseX, mouseY);
  */

  if (
    (mouseX > area1.x &&
      mouseX < area1.x + area1.ancho &&
      mouseY > area1.y &&
      mouseY < area1.y + area1.alto) ||
    (mouseX > area2.x &&
      mouseX < area2.x + area2.ancho &&
      mouseY > area2.y &&
      mouseY < area2.y + area2.alto)
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  area1.pressed();
  area2.pressed();
}

function mouseReleased() {
  area1.released();
  area2.released();
}
