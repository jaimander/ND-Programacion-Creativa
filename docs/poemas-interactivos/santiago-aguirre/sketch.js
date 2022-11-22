
//Este juego busca representar la sensación de los celos y las consecuencias que puede implicar. 
//El personaje celoso, representado por el círculo inferior, es rojo y tiembla por la ira que siente. Además está vacío porque realmente, es eso lo que siente, vacío porque cree que si la persona que quiere no está solo para él, no estará completo.
//Sus ataques son representados por los círculos rojos, igual que él. Si estos alcanzan a sus amigos, los herirá y es algo que no quiere que pase en realidad, por lo que debe autocontrolarse. Vivir y dejar vivir.
//Tras un tiempo de esfuerzo y dedicación, el círculo deja el color rojo y ahora es verde, además de estar rellenno, no vacío. Si bien no significa que haya dejado los celos por completo, o los siga teniendo, ha madurado y va por buen camino.
//LO LOGRÉ PROGRAMAR JAIME jaja

let a1 = -20;
let a2 = 500;
let b1 = 185;
let b2 = 185;
let c1 = 255;
let c2 = 350;
let d1 = -50;
let d2 = -50;
let r1 = 135;
let r2 = 115;
let t1 = 60;
let t2 = 90;
let t3 = 150;
let vel1 = 2;
let vel2 = 2;
let dir = 1;
let col = 0;
let puntos = 0;
let ins = false;
let fin = false;
let go = false;
let puntos1 = false;
let puntos2 = false;
let puntos3 = false;
let puntos4 = false;
let puntos5 = false;
let puntos6 = false;
let puntos7 = false;
let puntos8 = false;
let puntos9 = false;
let puntos10 = false;
let puntos11 = false;
let puntos12 = false;
let puntos13 = false;
let puntos14 = false;
let puntos15 = false;
let w = 32;
let h = 32;

let etapa = 0;

//Variables movimiento pelotas:
let vel3 = 4;
let dir2 = 1;
let vel4 = 4;
let dir3 = 1;


//function mouseClicked(){
//circles.clicked();
//clicked();
//let dis =dist(mouseX,mouseY,d1,d2)
//if (dis<r){
// d1=-50;
// d2=-50;
//}
//}
function setup() {
  createCanvas(500, 400);
  col = color(40);

}

function draw() {

  background(col);


  //Circulo
  noFill();
  stroke(255, 0, 0);
  ellipse(c1, c2, 32, 32);

  //Cuadrados
  noStroke();
  fill(255, 233, 51);
  rect(a1, b1, 32, 32);
  fill(51, 147, 255);
  rect(a2, b2, 32, 32);

  a1 = a1 + (vel1 * dir);
  a2 = a2 + (vel2 * -dir);

  if (dist(a1, b1, a2, b2) < 50) {
    vel1 = 0;
    vel2 = 0;

    dir = 0;
    vel1 = 0;
    vel2 = 0;
    c1 = (random(250, 260));
    c2 = (random(345, 355));
    ins = true;
   
  }
   if(ins == true){
    fill(196,91,28);
    textSize(20);
    textAlign(CENTER);
    text("¡Ataque!",250,t1);
    text("Arrastra el Mouse hacia los invasores para detenerlos.",250,t2);
    text("TOCAME para empezar",250,t3);
   
    noFill();
    stroke(76,70,67);
    strokeWeight(3);
    rect(r1,r2,230,60);

   }
 if(dist(mouseX,mouseY,r1,r2)< 50){
  r2=-100;
  t1=-50;
  t2=-50;
  t3=-50;
  go = true;

 }

  if (go == true) {
   
    fill(255, 0, 0);
    noStroke();
    ellipse(d1, d2, w, h);
    // if (etapa==0){
    d1 += (vel3 * dir2); // En X
    d2 += (vel4 * dir3); // En Y
    etapa += 1
  }

  if (dist(d1, d2, a1, b1) < 40 || (d1, d2, a2, b2) < 40) {
    vel3 = 0;
    vel4 = 0;
    fin = true;

  }

  if (fin == true){
     puntos1 = false;
     puntos2 = false;
     puntos3 = false;
     puntos4 = false;
     puntos5 = false;
     puntos6 = false;
     puntos7 = false;
     puntos8 = false;
     puntos9 = false;
     puntos10 = false;
     puntos11 = false;
     puntos12 = false;
     puntos13 = false;
     puntos14 = false;
     push();
     fill(255,0,0);
     
     textSize(20);
     textAlign(CENTER);
     text('¡Dejaste que los celos hirieran a tus amigos!', 250, 60);
     text('Reinicia para mejorar tu autocontrol', 250, 90);
     pop();

  }

  if (dist(mouseX, mouseY, d1, d2) < 20 && (puntos == 0)) {
    puntos1 = true;
    console.log(puntos1 + "puntos1");
  }


  if (puntos1 == true) {
    d1 = 240;
    dir3 = -1;
    dir2 = 0;
    d2 = 430;
    puntos = 1;
    puntos1 = false;
  }


  if (dist(mouseX, mouseY, d1, d2) < 20 && (puntos1 == false ) && (puntos == 1)) {
    puntos2 = true;
    console.log(puntos2 + "puntos2");
  }

  if (puntos2 == true) {
    d1 = -50;
    dir3 = 0;
    dir2 = 1;
    d2 = 200;
    puntos = 2;
    puntos2 = false;
    console.log(puntos2 + "puntos2");
  }
 
  if(dist(mouseX, mouseY, d1, d2) < 20 && (puntos2 == false) && (puntos == 2)) {
    puntos3 = true;
    console.log(puntos3 + "puntos3");
}

  if (puntos3 == true) {
   d1 = 440;
   dir3 = -1;
   dir2 = -1;
   d2 = 400;
   puntos = 3;
   puntos3 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 20 && (puntos3 == false) && (puntos == 3)) {
  puntos4 = true;
  console.log(puntos4 + "puntos4");
}

if (puntos4 == true) {
 d1 = 240;
 dir3 = 1;
 dir2 = 0;
 d2 = -30;
 puntos = 4;
 puntos4 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 20 && (puntos4 == false) && (puntos == 4)) {
  puntos5 = true;
  console.log(puntos5 + "puntos5");
}

if (puntos5 == true) {
 d1 = 440;
 dir3 = -1;
 dir2 = -1;
 d2 = 400;
 puntos = 5;
 puntos5 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 20 && (puntos5 == false) && (puntos == 5)) {
  puntos6 = true;
  console.log(puntos6 + "puntos6");
}

if (puntos6 == true) {
 d1 = -20;
 dir3 = -1;
 dir2 = 1;
 d2 = 420;
 puntos = 6;
 puntos6 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 20 && (puntos6 == false) && (puntos == 6)) {
  puntos7 = true;
  console.log(puntos7 + "puntos7");
}

if (puntos7 == true) {
 d1 = -50;
 dir3 = 1;
 dir2 = 1;
 d2 = -50;
 puntos = 7;
 puntos7 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 20 && (puntos7 == false) && (puntos == 7)) {
  puntos8 = true;
  console.log(puntos8 + "puntos8");
}

if (puntos8 == true) {
 d1 = 550;
 dir3 = 0;
 dir2 = -1;
 d2 = 200;
 puntos = 8;
 puntos8 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 20 && (puntos8 == false) && (puntos == 8)) {
  puntos9 = true;
  console.log(puntos9 + "puntos9");
}

if (puntos9 == true) {
 d1 = -20;
 dir3 = -1;
 dir2 = 1;
 d2 = 420;
 puntos = 9;
 puntos9 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 20 && (puntos9 == false) && (puntos == 9)) {
  puntos10 = true;
  console.log(puntos10 + "puntos10");
}

if (puntos10 == true) {
 d1 = 500;
 dir3 = 1;
 dir2 = -1;
 d2 = -20;
 puntos = 10;
 puntos10 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 40 && (puntos10 == false) && (puntos == 10)) {
  puntos11 = true;
  console.log(puntos11 + "puntos11");
}

if (puntos11 == true) {
  w = 100
  h = 100
 d1 = -50;
 dir3 = 1;
 vel3 = 3;
 vel4 = 3;
 dir2 = 1;
 d2 = -50;
 puntos = 11;
 puntos11 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 40 && (puntos11 == false) && (puntos == 11)) {
  puntos12 = true;
  console.log(puntos12 + "puntos12");
}

if (puntos12 == true) {
  w = 100
  h = 100
 d1 = 550;
 dir3 = 1;
 vel3 = 3;
 vel4 = 3;
 dir2 = -1;
 d2 = -50;
 puntos = 12;
 puntos12 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 40 && (puntos12 == false) && (puntos == 12)) {
  puntos13 = true;
  console.log(puntos13 + "puntos13");
}

if (puntos13 == true) {
  w = 100
  h = 100
 d1 = -20;
 dir3 = -1;
 vel3 = 3;
 vel4 = 3;
 dir2 = 1;
 d2 = 440;
 puntos = 13;
 puntos13 = false;
}

if(dist(mouseX, mouseY, d1, d2) < 40 && (puntos13 == false) && (puntos == 13)) {
  puntos14 += 1;
  console.log(puntos14 + "puntos14");
}

if (puntos14 > 1 ) {
  c2 = 450;
  d1 = -100
  fill(0, 255, 0);
  ellipse(255, 350, 32, 32);
  fill(0,255,0);
  textSize(20);
  textAlign(CENTER);
  text('¡Recuperaste la compostura y ya no estás celoso!', 250, 80);
  text('Dejaste a tus amigos ser felices y maduraste un poco más', 250, 110);
}

 // w = 100
  //h = 100
// d1 = 520;
// dir3 = 1;
// vel3 = 3;
// vel4 = 3;
 //dir2 = -1;
 //d2 = 420;
 //puntos = 14;
 //puntos14 = false;
//}

//if(dist(mouseX, mouseY, d1, d2) < 150 && (puntos14 == false) && (puntos == 14)) {
 //puntos15 = true;
 //console.log(puntos15 + "puntos15");
//}
//if (puntos15 == true){
 

//}




}
  //console.log("d1: " + d1 + "  d2: " + d2);

