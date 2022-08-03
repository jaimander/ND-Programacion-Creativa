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

  v1[0] = 'Un acróbata de apariencia cansada';
  v1[1] = 'Un congresista de energía apagada';
  v1[2] = 'Una vendedora con su ropa completamente mojada';
  v1[3] = 'Una ciclista vestida como estrella iluminada';
  v1[4] = 'Un indigente de melena enmarañada';
  v1[5] = 'Una vigilante que termina su jornada';
  v1[6] = 'Doña María busca los ingredientes para hacer su ensalada';

  v2[0] = 'da tumbos entre la multitúd pesada';
  v2[1] = 'camina por la escalara empinada';
  v2[2] = 'se entristece por no haber vendido nada';
  v2[3] = 'esquiva como puede a quienes salen de la nada';
  v2[4] = 'pide dinero para comerse una empanada';
  v2[5] = 'camina hacia la estación La Alborada';
  v2[6] = 've con dificultad a través de sus gafas empañadas';

  v3[0] = 'un señor grita';
  v3[1] = 'una mujer tirita';
  v3[2] = 'una perra se agita';
  v3[3] = 'su conciencia levita';
  v3[4] = 'de repente se excita';
  v3[5] = 'se desmaya un curita';
  v3[6] = 'de repente se excita';

  v4[0] = 'alguien lo imita';
  v4[1] = 'se tropieza con una pita';
  v4[2] = 'gaña como un chita';
  v4[3] = 'pero nadie milita';
  v4[4] = 'y alguien se lo facilita';
  v4[5] = 'recuerda a su abuelita';
  v4[6] = 'y alguien se lo facilita';

  v5[0] = 'la gente se extrañó al ver al vendedor de cocadas.';
  v5[1] = 'nunca se volvió a ver una situación tan disparatada.';
  v5[2] = 'justo cuando la plaza está más abarrotada.';
  v5[3] = 'un gran esfuerzo para conseguir su ensalada.';
  v5[4] = 'nadie notó que tenía una coartada.';
  v5[5] = 'siempre buscó donde pudo su mermelada.';
  v5[6] = 'mal momento para ir como sardinas enlatadas.';

  v1r = int(random(0, 7));
  v2r = int(random(0, 7));
  v3r = int(random(0, 7));
  v4r = int(random(0, 7));
  v5r = int(random(0, 7));
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

function keyPressed() {
  v1r = int(random(0, 7));
  v2r = int(random(0, 7));
  v3r = int(random(0, 7));
  v4r = int(random(0, 7));
  v5r = int(random(0, 7));
}
