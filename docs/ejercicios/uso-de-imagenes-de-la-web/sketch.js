let img;
let audio1;
let area;
let played = false;

function preload() {
  img = loadImage('assets/trancon.jpg');
  audio1 = loadSound('assets/transmilenio.mp3');
}

function setup() {
  createCanvas(img.width, img.height);
  background(50);

  // audio1.play();
  area = new AreaInteractiva(210, 335, 160, 110, audio1);
}

function draw() {
  image(img, 0, 0);
  area.actualizar();
  area.mostrar();

  // fill(255, 0, 0);
  textSize(20);
  //text(mouseX + ' ' + mouseY, mouseX, mouseY);
}

/*
function mousePressed() {
  if (audio1.isPlaying()) {
    // .isPlaying() returns a boolean
    audio1.stop();
    background(255, 0, 0);
  } else {
    audio1.play();
    background(0, 255, 0);
  }
}
*/

function mousePressed() {
  area.pressed();
}

function mouseReleased() {
  area.released();
}
