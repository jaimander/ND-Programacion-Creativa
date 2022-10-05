
/*
POEMA
Conocer personas hace parte de nuestro día a día. Pero conocer esa persona especial, esa que no puedes dejar de pensar, de ver en todos lados,
esa que te revuelve el estomago... y bueno, para no llegar a la cursilería, aquella persona que llegas a querer demasiado, se vuelve un asunto diferente.
Hay veces que el tiempo, espacio... incluso el cosmos, no son los ideales para estar con aquella persona que quieres, o, por el contrario, esa persona no es la ideal para 
lo que nececitas en ese momento de tu vida. 
Es duro darse cuenta de eso, pero toca afrontarlo y continuar... seguir con tu vida...

NOTA: El espacio de este programa esta lleno de Obstáculos que representan las situaciones de la vida, si te chocas con alguno es porque tus necesidades se alejan
de esa persona especial que será representada por un Cuadrado de color. El Círculo de color eres tu y si te chocas con las Lineas que encierran a la persona especial 
significa que no es la persona adecuada para ti.
Igualmente, cada que pase un minuto, el espacio cambiara debido a que uno no puede esperar a que sea el momento adecuado toda la vida. El tiempo es limitado.
*/

//Colores
let col = 0;
let persona1 = 0;
let elles1 = 0;
let elles2 = 0;
//Variables
let toco = false;
let l1 = 0;
let l2 = 0;
let l3 = 0;
let l4 = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let a1 = 0;
let b1 = 0;
let a2 = 0;
let b2 = 0;
let a3 = 0;
let b3 = 0;
let a4 = 0;
let b4 = 0;
let vel = 4;
let vel2 = 6;
let dira = 1;
let dirb = 1;
let dira2 = -1;
let dirb2 = -1;
let dirt1 = 1;
let dirt2 = 1;
let dirt3 = 1;
let dirt4 = 1;
let dirt5 = 1;
let dirt6 = 1;
let x = 0;
let y = 0;
let xduplicate = 0;
let yduplicate = 0;
let tamañox = 0;
let tamañoy = 0;
let t1 = 150;
let t2 = 0;
let t3 = 0;
let t4 = 150;
let t5 = 0;
let t6 = 0;
let e;
let p;
let eduplicate;
let pduplicate;
let tamañoe;
let tamañop;
let mox;
let moy;


function setup() {
  createCanvas(windowWidth, windowHeight);

  //Colores
  col = color(0);
  persona1 = color(random(100, 255), random(100, 255), random(100, 255));
  elles1 = color(random(100, 255), random(100, 255), random(100, 255));
  elles2 = color(random(100, 255), random(100, 255), random(100, 255));

  //Variables
  x1 = random(width / 1.2, width);
  y1 = random(height);
  x2 = random(width);
  y2 = random(height / 1.2, height);
  l1 = random(height / 2, height / 1.5);
  l2 = random(height / 1.8, height);
  l3 = random(width / 2, width / 1.5);
  l4 = random(width / 1.8, width);
  x = random((width / 1.2) - 200);
  y = random((height / 1.2) - 200);
  xduplicate = random((width / 1.2) - 200);
  yduplicate = random((width / 1.2) - 200);
  tamañox = random(100, 200);
  tamañoy = random(100, 200);
  e = random((width / 1.2) - 200);
  p = random((width / 1.2) - 200);
  eduplicate = random((width / 1.2) - 200);
  pduplicate = random((width / 1.2) - 200);
  tamañoe = random(100, 200);
  tamañop = random(100, 200);
  a3 = (windowWidth / 1.2) - 100;
  b3 = windowHeight;
  a4 = windowWidth;
  b4 = (windowHeight / 1.2) - 100;

}

function draw() {
  background(col);

  //Obstáculos elipses blancas
  push();
  noStroke();
  fill(255);
  ellipse(xduplicate, y, tamañox, tamañoy);
  ellipse(x, yduplicate, tamañoy, tamañox);
  pop();

  //Elipses grises
  push();
  noStroke();
  fill(240);
  ellipse(eduplicate, p, tamañoe, tamañop);
  ellipse(e, pduplicate, tamañoe, tamañox);
  pop();

  //Yo: circulo
  push();
  noStroke();
  fill(persona1)
  ellipse(mouseX, mouseY, 100, 100);
  pop();

  //Background
  let m = minute();

  if (m % 2 == 1) {//es impar

    push();
    text("Current minute: \n" + m, 50, 50);
    pop();

    //Obstáculo linea
    //col= (150); // para guardar un valor de color hace falta agregar la palabra 'color': color(150)
    col = color(150);
    push();
    noStroke();
    fill(0);
    rect(width / 1.2, 0, 10, l1);
    rect(width / 1.2, l2, 10, height);
    pop();

    //Obstáculo triangulo quieto
    push();
    noFill();
    strokeWeight(5);
    triangle(width / 2, (height / 2) - 100, (width / 2) - 100, (height / 2) + 100, (width / 2) + 100, (height / 2) + 100);

    //Obstáculos elipses blancas
    push();
    noStroke();
    fill(255);
    ellipse(x, y, tamañox, tamañoy);
    ellipse(xduplicate, yduplicate, tamañoy, tamañox);
    pop();

    //Elle 1: cuadrado 
    push();
    noStroke();
    fill(elles1);
    rect(x1, y1, 100, 100);
    pop();

    //Obstáculo cuadrado negro
    push();
    a1 = a1 + (vel * dira);
    b1 = b1 + (vel * dirb);

    fill(0);
    rect(a1, b1, 100, 100);
    if (a1 > (width / 1.2) - 100) {
      dira = -1
    }
    if (b1 > (height - 100)) {
      dirb = -1
    }
    if (a1 < 0) {
      dira = 1
    }
    if (b1 < 0) {
      dirb = 1
    }
    pop();

    //Obstáculo cuadrado gris
    push();
    a3 = a3 + (7 * dira2);
    b3 = b3 + (7 * dirb2);
    noStroke();
    fill(200);
    rect(a3, b3, 150, 150);

    if (a3 < 0) {
      dira2 = 1
    }
    if (b3 < 0) {
      dirb2 = 1
    }
    if (a3 > (width / 1.2) - 150) {
      dira2 = -1
    }
    if (b3 > (height - 150)) {
      dirb2 = -1
    }
    pop();


    //Obstáculos triángulos grises
    push();
    t1 = t1 + (vel2 * dirt1);
    t2 = t2 + (vel2 * dirt2);
    t3 = t3 + (vel2 * dirt3);

    noStroke();
    fill(100);
    triangle(width / 1.5, t1, (width / 1.5) - 50, t2, (width / 1.5) + 50, t3);

    if (t1 > (height)) {
      dirt1 = -1;
      dirt2 = -1;
      dirt3 = -1;
    }
    if (t2 < 0) {
      dirt1 = 1;
      dirt2 = 1;
      dirt3 = 1;
    }
    pop();
    push();
    t4 = t4 + (7 * dirt4);
    t5 = t5 + (7 * dirt5);
    t6 = t6 + (7 * dirt6);
    noStroke();
    fill(80);
    triangle(t4, height / 2, t5, (height / 2) - 50, t6, (height / 2) + 50);

    if (t4 > width / 1.2) {
      dirt4 = -1;
      dirt5 = -1;
      dirt6 = -1;
    }
    if (t6 < 0) {
      dirt4 = 1;
      dirt5 = 1;
      dirt6 = 1;
    }
    pop();

    //Elipses grises
    push();
    noStroke();
    fill(240);
    ellipse(e, p, tamañoe, tamañop);
    ellipse(eduplicate, pduplicate, tamañop, tamañoe);
    pop();

    //Condicional si no es el lugar correcto
    if ((dist(mouseX, mouseY, xduplicate, y) < 150 || dist(mouseX, mouseY, x, yduplicate) < 150 ||
      dist(mouseX, mouseY, eduplicate, p) < 150 || dist(mouseX, mouseY, e, pduplicate) < 150 ||
      dist(mouseX, mouseY, x, y) < 150 || dist(mouseX, mouseY, xduplicate, yduplicate) < 150 ||
      dist(mouseX, mouseY, xduplicate, yduplicate) < 150 || dist(mouseX, mouseY, a1, b1) < 150 ||
      dist(mouseX, mouseY, a3, b3) < 150 || dist(mouseX, mouseY, width / 1.5, t1) < 150 ||
      dist(mouseX, mouseY, e, p) < 50 || dist(mouseX, mouseY, eduplicate, pduplicate) < 150 ||
      dist(mouseX, mouseY, width / 2, (height / 2) - 100) < 150 || dist(mouseX, mouseY, (width / 2) - 100, (height / 2) + 100) < 150)
      || dist(mouseX, mouseY, (width / 2) + 100, (height / 2) + 100) < 150 || dist(mouseX, mouseY, t4, height / 2) < 150 && toco == false) {
      push();
      toco = true;
      mouseX = 0;
      mouseY = 0;
      //nuevaFuncion();
      reorganizarTodo();
      col = color(199, 0, 57);
      pop();
    }
    else if (dist(mouseX, mouseY, xduplicate, y) > 150 || dist(mouseX, mouseY, x, yduplicate) > 150 ||
      dist(mouseX, mouseY, eduplicate, p) > 150 || dist(mouseX, mouseY, e, pduplicate) > 150 ||
      dist(mouseX, mouseY, x, y) > 150 || dist(mouseX, mouseY, xduplicate, yduplicate) > 150 ||
      dist(mouseX, mouseY, xduplicate, yduplicate) > 150 || dist(mouseX, mouseY, a1, b1) > 150 ||
      dist(mouseX, mouseY, a3, b3) > 150 || dist(mouseX, mouseY, width / 1.5, t1) > 150 ||
      dist(mouseX, mouseY, e, p) > 150 || dist(mouseX, mouseY, eduplicate, pduplicate) > 150) {
      toco = false
    }
    //Condicional es la persona correcta
    if (dist(mouseX, mouseY, x1, y1) < 100) {
      push();
      col = color(169, 0, 199);
      pop();
    }
    //Condicional no es la persona correcta
    if (mouseX > width / 1.2 - 50 && mouseX < width / 1.2 + 60 && mouseY > 0 && mouseY < l1 + 50) {
      //nuevaFuncion();
      reorganizarTodo();
      col = color(199, 0, 57);
    }

    if (mouseX > width / 1.2 - 50 && mouseX < width / 1.2 + 60 && mouseY > l2 - 50 && mouseY < height) {
      //nuevaFuncion();
      reorganizarTodo();
      col = color(199, 0, 57);
    }

  }

  if (m % 2 == 0) {//es par

    push();
    text("Current minute: \n" + m, 50, 50);
    pop();

    //Obstáculo linea
    col = color(210);
    push();
    noStroke();
    fill(0);
    rect(0, height / 1.2, l3, 10);
    rect(l4, height / 1.2, width, 10);
    pop();

    //Obstáculo triangulo quieto
    push();
    noFill();
    strokeWeight(5);
    triangle(width / 2, (height / 2) - 100, (width / 2) - 100, (height / 2) + 100, (width / 2) + 100, (height / 2) + 100);
    pop();

    //Obstáculos elipses blancas
    push();
    noStroke();
    fill(255);
    ellipse(x, yduplicate, tamañox, tamañoy);
    ellipse(xduplicate, y, tamañoy, tamañox);
    pop();

    //Elle 2: cuadrado
    push();
    noStroke();
    fill(elles1);
    rect(x2, y2, 100, 100);
    pop();

    //Obstáculo cuadrado negro
    a2 = a2 + (7 * dira);
    b2 = b2 + (7 * dirb);
    push();
    fill(0);
    rect(a2, b2, 150, 150);
    if (a2 > (width) - 150) {
      dira = -1
    }
    if (b2 > ((height / 1.2) - 150)) {
      dirb = -1
    }
    if (a2 < 0) {
      dira = 1
    }
    if (b2 < 0) {
      dirb = 1
    }
    pop();

    //Obstáculo cuadrado gris
    push();
    a4 = a4 + (vel * dira2);
    b4 = b4 + (vel * dirb2);
    noStroke();
    fill(150);
    rect(a4, b4, 100, 100);
    if (a4 > width - 100) {
      dira2 = -1
    }
    if (b4 > (height / 1.2) - 100) {
      dirb2 = -1
    }
    if (a4 < 0) {
      dira2 = 1
    }
    if (b4 < 0) {
      dirb2 = 1
    }
    pop();

    //Obstáculos triángulos grises
    t4 = t4 + (7 * dirt4);
    t5 = t5 + (7 * dirt5);
    t6 = t6 + (7 * dirt6);
    push();
    noStroke();
    fill(80);
    triangle(t4, height / 1.5, t5, (height / 1.5) - 50, t6, (height / 1.5) + 50);

    if (t4 > width) {
      dirt4 = -1;
      dirt5 = -1;
      dirt6 = -1;
    }
    if (t6 < 0) {
      dirt4 = 1;
      dirt5 = 1;
      dirt6 = 1;
    }
    pop();
    push();
    t1 = t1 + (vel2 * dirt1);
    t2 = t2 + (vel2 * dirt2);
    t3 = t3 + (vel2 * dirt3);
    noStroke();
    fill(100);
    triangle(width / 2, t1, (width / 2) - 50, t2, (width / 2) + 50, t3);

    if (t1 > (height - 150)) {
      dirt1 = -1;
      dirt2 = -1;
      dirt3 = -1;
    }
    if (t2 < 0) {
      dirt1 = 1;
      dirt2 = 1;
      dirt3 = 1;
    }
    pop();

    //Elipses grises
    push();
    noStroke();
    fill(240);
    ellipse(e, pduplicate, tamañoe, tamañop);
    ellipse(eduplicate, p, tamañop, tamañoe);
    pop();

    //Condicional si no es el lugar correcto
    if ((dist(mouseX, mouseY, e, pduplicate) < 100 || dist(mouseX, mouseY, eduplicate, p) < 100 ||
      dist(mouseX, mouseY, width / 2, t1) < 100 || dist(mouseX, mouseY, a4, b4) < 100 ||
      dist(mouseX, mouseY, t4, height / 1.2 - 100) < 100 ||
      dist(mouseX, mouseY, a2, b2) < 100 || dist(mouseX, mouseY, xduplicate, y,) < 100 ||
      dist(mouseX, mouseY, x, yduplicate) < 100) || dist(mouseX, mouseY, width / 2, (height / 2) - 100) < 100 ||
      dist(mouseX, mouseY, (width / 2) - 100, (height / 2) + 100) < 100 ||
      dist(mouseX, mouseY, (width / 2) + 100, (height / 2) + 100) < 100 && toco == false) {
      push();
      //nuevaFuncion();
      reorganizarTodo();
      col = color(199, 0, 57);
      pop();

    }
    //Condicional es la peresona correcta
    if (dist(mouseX, mouseY, x2, y2) < 100) {
      push();
      col = color(169, 0, 199);
      pop();
    }
    //Condicional no es la persona correcta
    if (mouseY > height / 1.2 - 50 && mouseY < height / 1.2 + 60 && mouseX > 0 && mouseX < l3 + 50) {
      //nuevaFuncion(); // puedes cambiarle el nombre a esta función (ej. reorganizarTodo()), al igual que pasa con las variables, para que tenga más sentido para ti como programadora
      reorganizarTodo();
      col = color(199, 0, 57);
    }
    if (mouseY > height / 1.2 - 50 && mouseY < height / 1.2 + 60 && mouseX > l4 - 50 && mouseX < width) {
      //nuevaFuncion();
      reorganizarTodo();
      col = color(199, 0, 57);
    }

  }

}

//function nuevaFuncion(){
function reorganizarTodo() {
  //Colores
  col = color(0);
  persona1 = color(random(100, 255), random(100, 255), random(100, 255));
  elles1 = color(random(100, 255), random(100, 255), random(100, 255));
  elles2 = color(random(100, 255), random(100, 255), random(100, 255));

  //Variables
  x1 = random(width / 1.2, width);
  y1 = random(height);
  x2 = random(width);
  y2 = random(height / 1.2, height);
  l1 = random(height / 2, height / 1.5);
  l2 = random(height / 1.8, height);
  l3 = random(width / 2, width / 1.5);
  l4 = random(width / 1.8, width);
  vel = random(2, 5);
  x = random((width / 1.2) - 200);
  y = random((height / 1.2) - 200);
  xduplicate = random((width / 1.2) - 200);
  yduplicate = random((width / 1.2) - 200);
  tamañox = random(100, 200);
  tamañoy = random(100, 200);
  e = random((width / 1.2) - 200);
  p = random((width / 1.2) - 200);
  eduplicate = random((width / 1.2) - 200);
  pduplicate = random((width / 1.2) - 200);
  tamañoe = random(100, 200);
  tamañop = random(100, 200);
  a3 = (windowWidth / 1.2) - 100;
  b3 = windowHeight;
  a4 = windowWidth;
  b4 = (windowHeight / 1.2) - 100;

}



