//variables
let colorRect1 = 0;
let colorRect2 = 0;
let colorRect3 = 0;
let colorRect4 = 0;
let x1;
let x2;
let x3;
let x4;
let y1;
let y2;
let y3;
let y4;
let x5; 
let y5;
let anchoCua;
let altoCua;
let anchoBase;
let altoBase;
let xAmarillo;
let yAmarillo;
let xAzul;
let yAzul;
let xVerde;
let yVerde;
let xRojo;
let yRojo;
let anchoMicroZonas;
let altoMicroZonas;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //valores base de las variables para el fondo
  colorRect1 = color(255, 191, 0);
  colorRect2 = color(0, 25, 153);
  colorRect3 = color(0, 128, 21);
  colorRect4 = color(211, 33, 45);
  anchoCua = windowWidth / 2; 
  altoCua = windowHeight / 2;
  anchoBase = 200;
  altoBase = 200;
  x1 = 0;
  y1 = 0;
  x2 = width / 2;
  y2 = 0;
  x3 = 0;
  y3 = height / 2;
  x4 = width / 2;
  y4 = height / 2;
  x5 = width / 2;
  y5 = height / 2;

}
function draw() {
  background(100);

  //cuadrado 1 amarillo (felicidad)
  noStroke();
  fill(colorRect1);
  rect(x1, y1, anchoCua, altoCua);

  //cuadrado 2 azul(tristeza)
  noStroke();
  fill(colorRect2);
  rect(x2, y2, anchoCua, altoCua);

  // cuadrado 3 verde (positivo)
  noStroke();
  fill(colorRect3);
  rect(x3, y3, anchoCua, altoCua);

  //cuadro rojo 4 (negativo)
  noStroke();
  fill(colorRect4);
  rect(x4, y4, anchoCua, altoCua);

// valores base de las variables para el cuadrado base
  xAmarillo = x5 - anchoBase / 2;
  yAmarillo = y5 - altoBase / 2;
  xAzul = x5;
  yAzul = y5 - altoBase / 2;
  xVerde = x5 - anchoBase / 2;
  yVerde = y5;
  xRojo = x5;
  yRojo = y5;
  anchoMicroZonas = anchoBase / 2;
  altoMicroZonas = altoBase / 2;

  // zona amarilla del cuadrado base
  fill(255, 192, 0);
  rect(xAmarillo, yAmarillo, anchoMicroZonas, altoMicroZonas);

  // zona azul del cuadrado base
  fill(0, 25, 153);
  rect(xAzul, yAzul, anchoMicroZonas, altoMicroZonas);

  // zona verde del cuadrado base
  fill(0, 128, 21);
  rect(xVerde, yVerde, anchoMicroZonas, altoMicroZonas);

  // zona roja del cuadrado base
  fill(211, 33, 45);
  rect(xRojo, yRojo, anchoMicroZonas, altoMicroZonas);
 
  //cuadrado base
  push(); 
  noFill();
  stroke(255);
  rectMode(CENTER)
  rect(x5, y5, anchoBase, altoBase);
  fill(0);
  stroke(100);
  textAlign(CENTER); 
  textSize(20);
  textFont('Courier New');
  text("como te sientes?", width/2, y5);
  pop() 

  //circulo mouse 
  fill(100, 149, 237);
  stroke(200);
  ellipse(mouseX, mouseY, 50, 50);

  //cambio de color
   
  if (mouseIsPressed === true) {
    // zona amarilla
    if (mouseX > xAmarillo && mouseX < xAmarillo + anchoMicroZonas && mouseY > yAmarillo && mouseY < yAmarillo + altoMicroZonas) {
      colorRect1 = color(238, 130, 238);
      colorRect2 = color(255, 105, 180);
      colorRect3 = color(250, 128, 114);
      colorRect4 = color(0, 255, 127);
    }

    //zona azul
    else if (mouseX > xAzul && mouseX < xAzul + anchoMicroZonas && mouseY > yAzul && mouseY < yAzul + altoMicroZonas) {
      colorRect1 = color(105, 105, 105);
      colorRect2 = color(112, 128, 144);
      colorRect3 = color(47, 79, 79);
      colorRect4 = color(0, 0, 0);
    }

    // zona verde
    else if (mouseX > xVerde && mouseX < xVerde + anchoMicroZonas && mouseY > yVerde && mouseY < yVerde + altoMicroZonas) {
      colorRect1 = color(0, 255, 255);
      colorRect2 = color(68, 214, 44);
      colorRect3 = color(224, 231, 34);
      colorRect4 = color(176, 38, 255);
    }

    // zona roja
    else if (mouseX > xRojo && mouseX < xRojo + anchoMicroZonas && mouseY > yRojo && mouseY < yRojo + altoMicroZonas) {
      colorRect1 = color(139, 0, 0);
      colorRect2 = color(40);
      colorRect3 = color(153, 76, 0);
      colorRect4 = color(138, 118, 104);
    }
    // ninguno
    else{
      colorRect1 = color(random(255), random(255), random(255));
      colorRect2 = color(random(255), random(255), random(255));
      colorRect3 = color(random(255), random(255), random(255));
      colorRect4 = color(random(255), random(255), random(255));
    }
  }

}