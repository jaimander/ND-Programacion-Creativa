//Idea principal del poema: Ya escondí un amor por miedo a perderlo, de Clarice Lispector.
//Clarice tiene un amor, el de ella misma como personaje único e individual, y el que va llegando a su vida en forma de personas o cosas. Este amor llega inderterminada e inesperadamente.
//El amor vaga por el espacio, por el mundo, por el tiempo, y cuando se encuentra con Clarice se une a ella, pero al mismo tiempo la reta a confiar. Porque permitir que el amor entre a la vida del otro significa permitir que se conozca un grado de vulnerabilidad. Ahí en cuando Clarice permite que esté en su psique
//Por lo tanto, el Ego se hace presente cuando esta vulnerabilidad no se quiere revelar ante algo a alguien que pueda lo amar, porque podría hacerle mucho daño. Esto significa que no es posible confiar, y si no se confía, entonces, el amor se va. 

//Variables: para el amor.

let yAmor = 0;
let xAmor = 0;
let velAmor = 0;
let dirAmorX = 0;
let dirAmorY = 0;

//Variables para el EGO.

let xEgo = 0;
let yEgo = 600;
let dirEgo = -1;
let velEgo = 10;
let anchoEgo = 600;
let altoEgo = 10;
//variable booleana que determina cuando el amor encuentra a Clarice o visceversa.
let amorAnclado = false;

// variables de color 
let colorAmor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Ego de Clarice
  velEgo = 10;
  dirEgo = -1;
  anchoEgo = 600;
  altoEgo = 10;
  xEgo = 0;
  yEgo = 300;

  // Amor de Clarice
  xAmor = random(0, width);
  yAmor = random(0, height);
  velAmor = 4;
  dirAmorX = 1;
  dirAmorY = 1;


  colorAmor = color(250, 51, 162);
}

function draw() {
  background(40);

  //representa a Clarice, ella busca el amor.
  noStroke();
  fill(129, 51, 250);
  ellipse(mouseX, mouseY, 50, 50);

  //Nombre del poema: 
  stroke(255)
  text("Ya escondi un amor por miedo a perderlo", 500, 50);

  //EGO de Clarice 

  // EGO figura

  stroke(255);
  fill(19, 128, 126);
  rect(xEgo, yEgo, anchoEgo, altoEgo);


  xEgo += (velEgo * dirEgo);

  // EGO Condiciones para que vaya de izquierda a derecha

  if (xEgo > width) {
    dirEgo = -1
  }

  if (xEgo < 0) {
    dirEgo = 1
  }

  //Amor representa el amor. Clarice debe atraparlo, arrastrarlo y dejarlo en su zona segura, detrás de su ego.
  fill(colorAmor);
  noStroke();
  rect(xAmor, yAmor, 50, 50);

  // AMOR movimiento
  if (amorAnclado == false) {
    xAmor += (velAmor * dirAmorX);
    yAmor += (velAmor * dirAmorY);
  }
  else {
    xAmor = mouseX;
    yAmor = mouseY;
  }

  // AMOR condiciones para anclar y desanclar el amor
  // si la distancia entre el mouse y el amor es menor a 100, la variable amorAnclado va a ser 'true'
  if (dist(mouseX, mouseY, xAmor, yAmor) < 100) {
    amorAnclado = true;
  }

  if (amorAnclado == true && (mouseX > xEgo && mouseX < xEgo + anchoEgo) && (mouseY > yEgo - 50 && mouseY < yEgo + altoEgo + 50)) {  // le resté 50 en el límite superior y le sumé 50 en el límite inferior para que haya más rango en 'y' de esta manera lograr que Clarice suelte el amor. Puedes probar quitándole '-50' y '+50' para que veas a qué me refiero
    amorAnclado = false;
  }

  //el amor se mueve por el espacio de lado a lado .
  if (xAmor > width) { // siempre que el movimiento sea de izquierda a derecha, comparamos la variable que guarda la posición en x de la figura (llamada xAmor en este caso) con respecto a 'width'
    dirAmorX = -1;
  }

  if (xAmor < 0) {
    dirAmorX = 1;
  }

  //el amor se mueve de arriba a abajo en el espacio- le cambié elespacio para que pueda ir su conciencia pero no desaparece porque no estará interiorizada.
  if (yAmor > windowHeight) {
    dirAmorY = -1;
  }

  if (yAmor < 0) {
    dirAmorY = 1;
  }
  // cuando Clarice ya tiene su amor, debe pasar al lado contario del de su Ego y si lo logra lo puede ocultar pero dentro de sí, como si lo hubiera interiorizado. 
  if (amorAnclado == true && mouseY > yEgo) {
    colorAmor = color(40);
  }
  else if (amorAnclado == true) {
    colorAmor = color(250, 51, 162);
  }
  //representación de la psique de Clarice y lugar en el que desaparece el amor y ella porque ya son uno.
  let xRef = height;
  let inci = 10;
  let altoPiso = 20;
  stroke(255);
  for (let i = 0; i < width; i += inci) {
    let y = xRef + random(-15, 10);
    let x = i + 200;
    let anchoPiso = random(0, 100);
    fill (random(255), random(255), random(255));
    ellipse(x, y, anchoPiso, altoPiso);

  }
}