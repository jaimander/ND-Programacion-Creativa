
// arrays de strings 
let v1 = [];
let v2 = [];
let v3 = [];
let v4 = [];
let v5 = [];

// posiciones y 
let yv1 = 0;
let yv2 = 0;
let yv3 = 0;
let yv4 = 0;
let yv5 = 0;

let font;

let v1r = 0;
let v2r = 0;
let v3r = 0;
let v4r = 0;
let v5r = 0;


// v1 - protagonista A
// v2 - acción A
// v3 - contexto pt1 B
// v4 - contexto pt2 B
// v5 - epíteto A


function setup() {
  cv = createCanvas(windowWidth, windowHeight);

  font = loadFont('assets/WorkSans-Regular.ttf');

  v1[0] = "Un acróbata de apariencia cansada";
  v1[1] = "Un congresista de energía apagada";
  v1[2] = "Una vendedora con su ropa completamente mojada";

  v2[0] = "da tumbos entre la multitúd pesada";
  v2[1] = "camina por la escalara empinada";
  v2[2] = "se entristece por no haber vendido nada";

  v3[0] = "un señor grita";
  v3[1] = "una mujer tirita";
  v3[2] = "un perra se agita";

  v4[0] = "¡nadie como yo lo imita!";
  v4[1] = "se tropieza con una pita";
  v4[2] = "gaña como un chita";

  v5[0] = "la gente se extrañó al ver al vendedor de cocadas.";
  v5[1] = "nunca se volvió a ver una situación tan alocada.";
  v5[2] = "justo cuando la plaza está más abarrotada.";

  v1r = int(random(0, 3));
  v2r = int(random(0, 3));
  v3r = int(random(0, 3));
  v4r = int(random(0, 3));
  v5r = int(random(0, 3));

}

function draw() {
  background(80);
  fill(255);
  textSize(30);
  textFont(font);

  yv1 = 200;
  yv2 = 250;
  yv3 = 300;
  yv4 = 350;
  yv5 = 400;

  
  text(v1[v1r], 100, yv1);
  text(v2[v2r], 100, yv2);
  text(v3[v3r], 100, yv3);
  text(v4[v4r], 100, yv4);
  text(v5[v5r], 100, yv5);

}

function preload() {
  loadFont('assets/WorkSans-Regular.ttf');
}

function keyPressed(){
  v1r = int(random(0, 3));
  v2r = int(random(0, 3));
  v3r = int(random(0, 3));
  v4r = int(random(0, 3));
  v5r = int(random(0, 3));
}