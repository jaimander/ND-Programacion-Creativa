//El poema busca retratar nuestra constante búsqueda de las cosas.
//Nosotros estamos dentro de un marco que es nuestra realidad, es en lo que existimos.
//No obstante, siempre estamos en una búsqueda de un algo (el sentido de la vida, nuestros anhelos)
//Nos movemos dentro de ese marco que es nuestra realidad, tratando de conseguir esos deseos, pero casi
//siempre se nos escapan las cosas. Las vemos cerca, al momento de conseguirlar, pero por azares del 
//del destino termina llendose nuevamente. La bola blanca somos nosotros, dentro de la realidad; la bola
//rosa los deseos, va y viene y cuando está muy cerca se aleja. Asimismo, no podemos salir de nuestra
//realidad para acercanos más a nuestro sueños. Con lo que la bola blanca desparece de su marco de referencia

//Para poder interactuar, se deben utilizar las flechas del teclado. 
// LEER ESTO: Sería bueno poner esas indicaciones en algún lado.
let c2x;
let c2y;
let d;
let dirx = 1;
let diry = 1;
let vel = 5;
let rad = 60;
let valt;
let pg;
let x1 = 100;
let y1 = 100;

function setup() {
  createCanvas(windowWidth-12, windowHeight-22); // cuando asignamos al canvas el tamaño del navegador, parece que lo hace un poco más grande, razón por la cual cuando usamos las flechas movemos un poco todo el canvas. Y este efecto se percibe como un error. Para esto, una solución es hacer que el width y el height sean un poquito más pequeños que el windowWidth y el windowHeight, respectivamente.
  c2x = random(width);
  c2y = random(height); 
  ellipseMode(RADIUS);
  pg = createGraphics(1000, 450);
}

function draw() {

  c2x = c2x + (vel * dirx);
  c2y = c2y + (vel * diry);

  //movimiento del personaje principal
  fill(255, 0, 0);
  if (keyIsDown(LEFT_ARROW)) {
    x1 -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x1 += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y1 -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y1 += 5;
  }
  //clear(); // ¿Cómo está influyendo clear()?
  background(0, 51, 51);

  //personaje principal dentro de su marco de referencia
  pg.background('black');
  pg.fill('white');
  pg.ellipse(x1 - 150, y1 - 75, 100, 100);
  image(pg, 150, 75);

  //calculo para determinar la cercanía entre personaje y sueños
  d = dist(x1, y1, c2x, c2y);
  //valt = map(d, 0, 4000, 100, 5);
  valt = 20; // solo aumentando el valor de valt se puede generar un efecto similar, porque a fin de cuentas lo que se hace es que se incremente la velocidad si está cerca
  
  console.log(d);

  //condiciones de cercanía y lejania
  if (d <= 90){
    vel = valt/0.5;
    dir = -1;
  }
  else{
    vel = 5;
  }

  //condiciones para que la bola de los sueños rebote
  if (c2x > width - rad || c2x < rad){
    dirx *= -1;
  }

  if (c2y > height - rad || c2y < rad){
    diry *= -1;
  }

  //Representaciones de los sueños
  fill(255, 153, 153);
  ellipse(c2x, c2y, rad, rad);

  //Condiciones para que la bola de los sueños no salga de la pantalla
  if (c2y < 0 || c2y > height){
    c2y = 200;
    c2x = 200;
  }

  if (c2x < 0 || c2x > width){
    c2y = 200;
    c2x = 200;
  }
}

