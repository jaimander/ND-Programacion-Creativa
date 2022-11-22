// "Sigue a tu corazón, él siempre conoce el camino" & "Algunas veces el camino correcto no es el más fácil"

let x1 = 1339;
let x2 = 1368;
let x3 = 1350;
let xCorazonCentro = 1352;
let yCorazonCentro = 270;

let y = 265;
let y1 = -925;
let y2 = 658;
let y3 = 680;

let fondo = 0;

let snowflakes = [];

// Coordenadas de los checkpoints
let cp1X = 550;
let cp1Y = 740;
let cp1FueTocado = false;

let cp2X = 402;
let cp2Y = 577;
let cp2FueTocado = false;

let cp3X = 402;
let cp3Y = 330;
let cp3FueTocado = false;

let contadorCheckpoints = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255, 255, 255, 100);
  background(0);
  fondo = (248, 188, 211); //rosa

}

function draw() {
  let t = frameCount / 70;


  //cuadrado fondo 1
  push();
  background(0);
  fill(fondo);
  rect(0, 0, windowWidth, windowHeight);
  pop();

  // checkpoints (puntos de control)
  if (dist(mouseX, mouseY, cp1X, cp1Y) < 50 && cp1FueTocado == false) { 
    cp1FueTocado = true;  
    contadorCheckpoints += 1;
  }

  if (dist(mouseX, mouseY, cp1X, cp1Y) < 50 && cp2FueTocado == false) {
    cp2FueTocado = true;
    contadorCheckpoints += 1;
  }

  if (dist(mouseX, mouseY, cp1X, cp1Y) < 50 && cp3FueTocado == false) {
    cp3FueTocado = true;
    contadorCheckpoints += 1;
  }


  // movimiento de corazón
  push();
  noStroke();
  translate(xCorazonCentro, yCorazonCentro);
  fill(235, 23, 12);


  ellipse(-14, yCorazonCentro - y, 40, 40);
  ellipse(16, yCorazonCentro - y, 40, 40);
  angleMode(DEGREES);
  fill(235, 23, 12);
  // translate(300, 100);
  rotate(45);
  rect(-10, -6, 45, 39);
  pop();

  

  //nube
  push();
  noStroke();
  fill(255);
  ellipse(x3, y2, 40, 40); //arriba
  ellipse(1375, y2, 40, 40);
  ellipse(1335, y3, 40, 40); //abajo
  ellipse(1364, y3, 40, 40);
  ellipse(1392, y3, 40, 40);
  pop();


  //circulo mouse relleno
  push();
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  ellipse(mouseX, mouseY, 25, 25);
  pop();


  //circulo mouse
  noFill();
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(5);
  ellipse(mouseX, mouseY, 70, 70);


  if (mouseX < 50 && mouseY < 50) {
    cursor(CROSS);
  }

  else if (mouseX > 50 && mouseY > 50) {
    cursor('grab');
  }



  //laberinto
  //contorno
  stroke(255);
  strokeWeight(3);
  line(10, 640, 10, 20); //izq vertical 1
  line(10, 800, 10, 730); //izq vertical 2

  line(1300, 208, 1300, 20); //der vertical 1
  line(1300, 620, 1300, 320); //der vertical 2
  line(1300, 800, 1300, 700); //der vertical 3

  line(10, 20, 1300, 20); //arriba horizontal
  line(10, 800, 1300, 800); //abajo horizontal


  //interior
  //lineas horizontales y verticales
  //fila 1
  stroke(255);
  strokeWeight(3);
  line(230, 110, 120, 110); //hor
  line(10, 200, 230, 200); //hor
  line(230, 200, 230, 110); //ver
  line(10, 360, 120, 360); //hor
  line(120, 360, 120, 280); //ver
  line(10, 620, 120, 620); //hor

  //fila 2
  stroke(255);
  strokeWeight(3);
  line(350, 200, 350, 110); //ver
  line(460, 110, 350, 110); //hor
  line(460, 200, 350, 200); //hor
  line(460, 280, 460, 200); //ver
  line(10, 200, 230, 200); //hor
  line(460, 280, 230, 280); //hor
  line(230, 360, 230, 280); //ver
  line(230, 360, 350, 360); //hor
  line(350, 440, 350, 360); //ver
  line(350, 440, 120, 440); //hor
  line(120, 530, 120, 440); //ver
  line(350, 520, 120, 520); //hor
  line(350, 700, 350, 520); //ver
  line(350, 700, 120, 700); //hor
  line(230, 620, 230, 550); //ver

  //fila 3
  stroke(255);
  strokeWeight(3);
  line(460, 620, 350, 620); //hor
  line(460, 550, 460, 360); //ver.
  line(460, 800, 460, 620); //ver
  line(570, 360, 460, 360); //hor
  line(690, 550, 460, 550); //hor.
  line(570, 700, 570, 550); //ver.
  line(570, 410, 570, 490); //ver
  line(570, 20, 570, 280); //ver
  line(690, 280, 570, 280); //hor
  line(1000, 700, 570, 700); //hor
  line(690, 410, 570, 410); //hor
  line(690, 490, 570, 490); //hor

  //fila 4
  stroke(255);
  strokeWeight(3);
  line(690, 360, 690, 410); //ver
  line(690, 20, 690, 110); //ver
  line(1150, 110, 690, 110); //hor
  line(1300, 210, 690, 210); //hor
  line(1300, 320, 930, 320); //hor
  line(690, 360, 810, 360); //hor
  line(810, 210, 810, 440); //ver
  line(930, 320, 930, 440); //ver
  line(1050, 400, 1050, 550); //ver 
  line(1180, 400, 1180, 550); //ver 
  line(1300, 550, 810, 550); //hor
  line(810, 550, 810, 630); //ver
  line(1300, 620, 1000, 620); //hor
  line(1300, 700, 1200, 700); //hor
  line(1200, 700, 1200, 750); //ver
  line(700, 630, 810, 630); //hor

  // background cambia a rosa
  push();
  // if (dist (mouseX, mouseY, x1, y) < 100){  // esta condición se puede complementar con la condición de sí ha tocado todos los checkpoints
  if (dist(mouseX, mouseY, x1, y) < 100 && contadorCheckpoints == 3) { // cuando toca un cp por primera vez suma 1, de modo que cuando el jugador toca los tres cp, la variable contadorCheckpoints va a ser igual a 3
    fondo = color(248, 188, 211);
  }
  else {
    fondo = color(0);
  }
  pop();


   
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); 
  }

  
  for (let flake of snowflakes) {
    flake.update(t); 
    flake.display(); 
  }

}


function snowflake() {
  angleMode(RADIANS); 
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    
    let w = 0.6; 
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    
    this.posY += pow(this.size, 0.5);

  
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };

}
