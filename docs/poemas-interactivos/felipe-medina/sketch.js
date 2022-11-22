/// INICIO DEL CÓDIGO

// variables para determinar el movimiento del círculo
let posicion;
let velocidad;
let direccion;
let aceleracion;

let imgCarita;
let caritaX;
let caritaY;

let x1 = 1;
let x2 = 50;
let vel1 = 1;
let dir1 = 1;
// variables para guardar la posición del círculo en el mouseX & mouseY
let atractor;
let xAzul;
let yAzul;

const bolitas = [];

function preload() {
  imgCarita = loadImage('imagenes/smiley.png');


}

function setup() {
  createCanvas(400, 400);
 

 xAzul = random(0, width);
 yAzul = random(0, height);


  posicion = createVector(100, 100);
  aceleracion = createVector(0, 0);
  velocidad = createVector(0, 0);
  atractor = createVector(mouseX, mouseY);
 
   bolitas.push(new Bolita()); //cada "bolitas.push" es una bola blanca nueva
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
   bolitas.push(new Bolita());
  //frameRate(1);
 }

class Bolita {
  constructor() {
    this.posicion = createVector(random(0, width), random(0, height));
    this.aceleracion = createVector(0, 0);
    this.velocidad = createVector(0, 0);
    
  }

  mover() {
    this.direccion = p5.Vector.sub(atractor, this.posicion);
    this.direccion.normalize();
    this.aceleracion = this.direccion;
    // si la distancia entre mouse es mayor a 50 mult(1) else mult(-1)
    this.aceleracion.mult(-1); // se multiplica la aceleración por -1 para que se repela
    this.velocidad.add(this.aceleracion);
    this.velocidad.limit(2);
    this.posicion.add(this.velocidad);

   /* if(this.posicion.x < mouseX) || this.posicion.y > height){
      this.direccion = -1;
    }
*/
    ellipse(this.posicion.x, this.posicion.y, 50, 50);
  }

  limite(){
   
  }
}



function draw() {
 background(40);

 strokeWeight(1);
 stroke(255);
 fill(0, 0, 255);
 ellipse(xAzul, yAzul, 50, 50);
 // círculo atractor mouse
 

 strokeWeight(1);
 stroke(255);
 noFill();
 ellipse(atractor.x, atractor.y, 100, 100);

 if(dist(mouseX, mouseY, xAzul, yAzul) < 100) {
  
  image(imgCarita, xAzul - 25, yAzul - 25, 50, 50);
 }
 //circulo que no se mueve 

 x1 = x1 + vel1 * dir1;

  if (x1 > width) {
    dir1 = -1;
  }

  if (x1 < 0) {
    dir1 = 1;
  }
 

 

 // círculo atraído o repelido
 noStroke();
 fill(255);
 atractor = createVector(mouseX, mouseY);
// if (mouseX < posicion.x + 50 || mouseX > posicion.x - 50 || mouseY < )
 
bolitas.forEach(bolita => {
  bolita.mover();
})
 
}

/// FIN DEL CÓDIGO
