/// comienzo del código
let x1 = 1;
let x2 = 1;
let y1 = 120;
let y2 = 180;
let x3 = 1
let y3 = 245
let vel1 = 1;
let dir1 = 1;
let vel2 = 1.05;
let dir2 = 1;
let valorAleatorio;
let distancia;
let xRojo;
let yRojo;
let xCir;
let yCir;
let Xmeta = 380


let colorFondo; // creamos una variable llamada "colorFondo"
function setup() {
createCanvas(400, 300);


xRojo= width;
yRojo= 0;

rect(20, 20, 20, 20);
colorFondo = color(40); // asignamos un valor inicial de color gris (esto debe hacerse para que dentro del draw el programa ya sepa que esta variable va a almacenar un color)

}

if (mouseX>Xmeta){
    mouseX<mouseY 
    if(dist, mouseX, mouseY){
       gano=true;
    }
}
    if (gano=true){
        Text("WINNER")
       }
function draw() {
background(colorFondo); // usamos la variable "colorFondo", la cual modificamos más abajo dependiendo de la condición
// círculo grande posición del mouse


xCir= mouseX;
yCir= mouseY;



valorAleatorio= map(distancia, 0, 380, 0, 10)
distancia = dist(xCir, yCir, xRojo, yRojo);
console.log(distancia);

if (x2>Xmeta){
    vel2 = 0
if(dist, x2, Xmeta){
gano=true

}
   
}
background(40);

if (distancia > 10){

}
noFill();
stroke(255);
rect(xCir, yCir, 40, 40);

// cuadrado 1 AZUL
noStroke();
fill(34, 163, 227);
rect(x1 + random(valorAleatorio), y1, 50, 50);
// cuadrado 2 AMARILLO
noStroke();
fill(255, 255, 0);
rect(x2, y2, 50, 50);
// movimiento cuadrado 1 AZUL
x1 = x1 + vel1 * dir1; // x1 va a ser igual al valor que traiga + (vel1 * dir1)
if (x1 > width) {
dir1 = 0;
}
if (x1 < 0) {
dir1 = 1;
}

// movimiento cuadrado 2 AMARILLO
x2 = x2 + vel2 * dir2;
if (x2 > width) {
dir2 = 0;
}
if (x2 < 0) {
dir2 = 1;
}


rect(0, 100, 400, 1)
rect(0, 175, 400, 1)
rect(0, 240, 400, 1)
rect(3, 3, 20, 20)
rect(30, 3, 20, 20)
rect(60, 3, 20, 20)
rect(90, 3, 20, 20)
rect(120, 3, 20, 20)
rect(150, 3, 20, 20)
rect(180, 3, 20, 20)
fill(119, 47, 156)
rect(210, 3, 20, 20)
rect(240, 3, 20, 20)
rect(270, 3, 20, 20)
rect(300, 3, 20, 20)
rect(330, 3, 20, 20)
rect(360, 3, 20, 20)
rect(7, 27, 20, 20)
rect(33, 27, 20, 20)
rect(60, 27, 20, 20)
rect(90, 27, 20, 20)
rect(120, 27, 20, 20)
rect(150, 27, 20, 20)
fill(34, 163, 227)
rect(180, 27, 20, 20)
rect(210, 27, 20, 20)
rect(240, 27, 20, 20)
rect(270, 27, 20, 20)
rect(300, 27, 20, 20)
rect(330, 27, 20, 20)
rect(360, 27, 20, 20)
rect(30, 50, 20, 20)
rect(60, 50, 20, 20)
rect(90, 50, 20, 20)
rect(120, 50, 20, 20)
rect(150, 50, 20, 20)
rect(180, 50, 20, 20)
rect(210, 50, 20, 20)
rect(240, 50, 20, 20)
fill(255, 255, 0)
rect(270, 50, 20, 20)
rect(300, 50, 20, 20)
rect(330, 50, 20, 20)
noStroke();
fill(252, 252, 252);
rect(Xmeta, 100, 4, 200)
rect(390, 100, 4, 200)
rect(370, 100, 4, 200)
// cuadrado 3 verde
noStroke();
fill(119, 47, 156);
rect(x3, y3, 50, 50);
x3 = x3 + vel1 * dir1; // x1 va a ser igual al valor que traiga + (vel1 * dir1)
if (x1 > width) {
dir1 = 0;
}
if (x1 < 0) {
dir1 = 1;
}
noStroke()
fill(47,156,58)
rect(0, 70, 400, 30)

noStroke()
fill(99, 61, 20)
rect(370, 80, 4, 25)

noStroke()
fill(255, 10, 10)
rect(370, 66, 20, 17)
}