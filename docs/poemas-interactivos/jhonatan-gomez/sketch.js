/*
Propuesta: Este poema busca entender que no siempre podemos obtener la respuesta de un sí o un no. 
A veces las personas creen que las respuestas se encuentran en lo otro, en lo ajeno. Para el poema
utilicé de referencia la poesia concreta y como se juega con el texto  y cómo asi se puede encontrar
una respuesta a aquello que buscamos. 
*/

// variables


// Esto no lo hemos visto, pero puedes encapsular líneas o secciones de código en funciones personalizadas. Voy a hacer un ejemplo con la sección de "texto recuadro verde"

let textoInicial = 'Piensa en algo a lo que deseas tener una respuesta';
let textoVerde = 'La respuesta no está en un color\nLa respuesta en un\nNo está color';
let textoVerde1 = 'La\nrespu\nestaNo\nenun\ncolor';
let textoRojo = 'Aquí\ntampo\npoco';

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(0);
}

function draw() {
  background(255);

  // rectangulos 

  if (mouseX < width / 2) { // rectangulo verde
    fill(101, 167, 35);
    rect(0, 45, width / 2, height);
  }
  else { //rectangulo rojo
    fill(196, 12, 9);
    rect(width / 2, 45, width / 2 + width, height);
  }

  // texto principal

  push();
  fill(0);
  textSize(30);
  strokeWeight(1);
  textStyle(BOLDITALIC);
  textAlign(CENTER, TOP);
  text(textoInicial, 0, 12, width);
  pop();

  // texto recuadro verde

  textoRecuadroVerde();

  // texto con incremento de tamaño

  let base = height * 0.75;
  let scalar = 0.8;

  textSize(20);
  let asc = textAscent() * scalar;
  line(10, base - asc, width, base - asc);
  text('La respuesta no está', 10, base);

  textSize(40);
  asc = textAscent() * scalar;
  line(50, base - asc, width, base - asc);
  text('en un color', 200, base);

  // rotacion texto incremento

  push();
  translate(20, 200);
  rotate(18);
  textSize(20);
  line(10, base - asc, width, base - asc);
  text('La respuesta no está', 10, base);

  textSize(40);
  line(50, base - asc, width, base - asc);
  text('en un color', 200, base);
  pop();

  // texto con la respuesta

  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // se invierte X
  let iy = height - mouseY; // se invierte Y
  textSize(28);
  textStyle(ITALIC);
  fill(255);
  text('La respuesta está...', x, height / 2, y);
  fill(255);
  text('en tí.', ix, height / 2);

  // texto recuadro rojo

  textSize(16);
  fill(255);
  strokeWeight(1.5);

  textLeading(10);
  text(textoRojo, (windowWidth - 300), 80);
  textLeading(40);
  text(textoRojo, (windowWidth - 305), 145);
  textSize(14);
  textLeading(90);
  text(textoRojo, (windowWidth - 310), 190);
  textLeading(140);
  text(textoRojo, (windowWidth - 300), 240);
  textSize(16);
  textLeading(170);
  text(textoRojo, (windowWidth - 308), 290);
  textLeading(210);
  text(textoRojo, (windowWidth - 300), 320);
  textLeading(260);
  textSize(18);
  text(textoRojo, (windowWidth - 300), 340);
  textLeading(280);
  text(textoRojo, (windowWidth - 315), 360);
  textLeading(300);
  textSize(14);
  text(textoRojo, (windowWidth - 300), 380);
  textLeading(320);
  text(textoRojo, (windowWidth - 320), 400);
  textLeading(10);
  text(textoRojo, (windowWidth - 280), 80);
  textLeading(40);
  text(textoRojo, (windowWidth - 285), 115);
  textSize(14);
  textLeading(90);
  text(textoRojo, (windowWidth - 290), 145);
  textLeading(140);
  text(textoRojo, (windowWidth - 280), 200);
  textSize(16);
  textLeading(170);
  text(textoRojo, (windowWidth - 288), 270);
  textLeading(210);
  text(textoRojo, (windowWidth - 280), 300);
  textLeading(260);
  textSize(18);
  text(textoRojo, (windowWidth - 280), 340);
  textLeading(280);
  text(textoRojo, (windowWidth - 295), 360);
  textLeading(300);
  textSize(14);
  text(textoRojo, (windowWidth - 280), 380);
  textLeading(320);
  text(textoRojo, (windowWidth - 290), 400);

  // texto rojo centrado

  fill(255);
  strokeWeight(1.5);
  textSize(40);
  textStyle(BOLDITALIC);
  text(textoRojo, windowWidth / 2, 400);
  text(textoRojo, windowWidth / 2, 500);
  text(textoRojo, windowWidth / 1.5, 200);
  text(textoRojo, windowWidth / 1.5, 300);
}


function textoRecuadroVerde(){
  textSize(16);
  fill(255);
  strokeWeight(1.5);

  textLeading(10);
  text(textoVerde, 80, 80);
  textLeading(40);
  text(textoVerde, 120, 145);
  textSize(14);
  textLeading(90);
  text(textoVerde, 170, 190);
  textLeading(140);
  text(textoVerde, 200, 240);
  textSize(16);
  textLeading(170);
  text(textoVerde, 260, 290);
  textLeading(210);
  text(textoVerde, 300, 320);
  textLeading(260);
  textSize(18);
  text(textoVerde, 320, 340);
  textLeading(280);
  text(textoVerde, 340, 360);
  textLeading(300);
  textSize(14);
  text(textoVerde, 360, 380);
  textLeading(320);
  text(textoVerde, 380, 400);
}