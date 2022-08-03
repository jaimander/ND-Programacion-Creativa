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

let tabla;
let cantidadOpciones;

// RIMA - VERSO - FUNCIÓN NARRATIVA
// A    - v1    - personaje
// A    - v2    - acción del personaje
// B    - v3    - acción complementaria del personaje / evento del contexto 1 B
// B    - v4    - acción complementaria del personaje / evento del contexto 2 B
// A    - v5    - final o conclusión

function setup() {
  cv = createCanvas(innerWidth, innerHeight);

  font = loadFont('assets/WorkSans-Regular.ttf');

  cantidadOpciones = tabla.getRowCount();

  v1r = int(random(0, cantidadOpciones));
  v2r = int(random(0, cantidadOpciones));
  v3r = int(random(0, cantidadOpciones));
  v4r = int(random(0, cantidadOpciones));
  v5r = int(random(0, cantidadOpciones));

  v1 = tabla.getColumn('v1');
  v2 = tabla.getColumn('v2');
  v3 = tabla.getColumn('v3');
  v4 = tabla.getColumn('v4');
  v5 = tabla.getColumn('v5');
}

function draw() {
  background(80);

  yv1 = 200;
  yv2 = 250;
  yv3 = 300;
  yv4 = 350;
  yv5 = 400;

  fill(255);
  textSize(30);
  textFont(font);
  textAlign(LEFT);

  text(v1[v1r], 140, yv1);
  text(v2[v2r], 140, yv2);
  text(v3[v3r], 140, yv3);
  text(v4[v4r], 140, yv4);
  text(v5[v5r], 140, yv5);

  // console.log(tabla.getString(0, 0)); // Un acróbata de apariencia cansada
  // console.log('filas ' + tabla.getRowCount()); // 7
  // console.log('columnas ' + tabla.getColumnCount()); // 5
  // console.log('column name ' + tabla.getColumn('v1'));
  console.log(v1[0]); // Un acróbata de apariencia cansada

  fill(0, 255, 255);
  textAlign(LEFT);
  textSize(20);
  textFont(font);
  text('Oprime cualquier tecla para generar un limerick nuevo', 140, yv5 + 100);
}

function preload() {
  loadFont('assets/WorkSans-Regular.ttf');
  tabla = loadTable('assets/versos.csv', 'csv', 'header');
}

function keyPressed() {
  v1r = int(random(0, cantidadOpciones));
  v2r = int(random(0, cantidadOpciones));
  v3r = int(random(0, cantidadOpciones));
  v4r = int(random(0, cantidadOpciones));
  v5r = int(random(0, cantidadOpciones));
}

function touchStarted() {
  v1r = int(random(0, cantidadOpciones));
  v2r = int(random(0, cantidadOpciones));
  v3r = int(random(0, cantidadOpciones));
  v4r = int(random(0, cantidadOpciones));
  v5r = int(random(0, cantidadOpciones));
}
