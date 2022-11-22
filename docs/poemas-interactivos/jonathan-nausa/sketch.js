// variables globales

let xCir;
let yCir;

let xRojo;
let yRojo;

let valorAleatorio;

let distancia;

let pg;

// setup
function setup() {
  createCanvas(400, 800);
  pg = createGraphics(400, 900);

  xRojo = 0;
  yRojo = 0;

}

// draw
function draw() {
  background(40);

  push;
  fill(255);
  textSize(20);
  text("FORMADO BAJO PRESIÓN", 75, 30);
  pop;

  push;
  fill(255);
  textSize(12);
  text("[Sumérjase en el abismo.]", 130, 60);
  pop;
  

  xCir = mouseX;
  yCir = mouseY;



  distancia = dist(xCir, yCir, 0, 700); //distancia máxima es 700
  console.log(distancia);

  valorAleatorio = map(distancia, 0, 600, 50, 0);



  stroke(255);
  noFill();
  ellipse(xCir + random(valorAleatorio), yCir + random(valorAleatorio), 50, 50);

  //peñasco 1
  
    let colMont = color(20);
    let y1 = 0;
    let y2 = height;
    pg.strokeWeight(1);

    for (i = 0; i < width; i++) {
      let x = i;
      y1 += random(-2, 2) + 5;
      pg.stroke(colMont);
      pg.line(x, y1, x, y2);
   
    }
    

  //peñasco 2/
  
  
    let colMont2 = color(20);
    let y1b = height;
    let y2b = height;
    pg.strokeWeight(1);
  
    for (i = 245; i < width; i++) {
      let x2 = i;
      y1b -= random(-2, 2) + 5;
      pg.stroke(colMont2);
      pg.line(x2, y1b, x2, y2b);
     
    }
    
    image(pg, 0, 1);

}