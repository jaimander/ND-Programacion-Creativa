let es = 60; // tamaño de la bola azul

let ex, ey;

let over = false; // variable booleana que establece si el muse esta encima de la figura
let locked = false; // variable booleana que establece si el movimiento esta bloqueado o no

let xoff, yoff; // dos variables en una misma linea

let y1 = 245;
let y2 = 236;
let y3 = 220;
let y4 = 212;
let y5 = 230;

let ytallo = 240;
let altura = 60;

function setup() {

   createCanvas(400, 300);
   ex = 330; //crea la bola en la mitad del width
   ey = 70; //crea la bola en la mitad del height
   xSol = 350; //variable de la posicion del sol en x
   ySol = 50; //varibale de la posicion del sol en y

}

function draw() {

   background(166, 228, 233);


   /*let yA = random(60, 90); //valor random de lo alto entre 60 y 90

   // Montañas de atras

   for (m = 0; m < width; m++) {
      let x = m;
      yA += random(-2, 2);
      stroke(48, 158, 71);
      line(x, yA, x, height);
   }*/

   //dibuja sol
   fill(255, 195, 0);
   noStroke();
   ellipse(xSol, ySol, 70, 70);

   //

   fill (85, 213, 31);
   noStroke ();
   rect (0, 280, 400, 20);

   //dibuja la flor

   fill(85, 213, 31);
   rect(190, ytallo, 20, altura);
   fill(255);
   ellipse(200, y1, 20, 20);
   ellipse(183, y2, 20, 20);
   ellipse(185, y3, 20, 20);
   ellipse(200, y4, 20, 20);
   ellipse(213, y3, 20, 20);
   ellipse(215, y2, 20, 20);
   fill(85, 213, 31);
   ellipse(200, y5, 20, 20);


   if (dist(mouseX, mouseY, ex, ey) < es / 2) //si la distancia entre la posicion del mouse y la posicion de la bola es menor al radio de la bola (25)
   {
      fill(0, 0, 255);
      over = true; //entonces el mouse esta encima de la bola
   }
   else //si no es asi
   {
      fill(0, 0, 255);
      over = false; // entonces el mouse no esta encima de la bola
   }

   ellipse(ex, ey, es, es); //crea una bola del tamaño de la variable es, en las coordenadas ex y ey

   distancia = dist(ex, ey, xSol, ySol);

   console.log(distancia);

   //crece

   if ((distancia > 100) && (ytallo > 80)) {

      for (let i= 0;i < 30; i++) {
         stroke (255, 195, 0, 100);
        line (xSol, ySol, 160 + i*5, 300);
      }

      y1 = y1 - 1;
      y2 = y2 - 1;
      y3 = y3 - 1;
      y4 = y4 - 1;
      y5 = y5 - 1;
      ytallo = ytallo - 1;
      altura = altura + 1;

   }

   // se marchita

   else {
      if (ytallo < height) {
         y1 = y1 + 1;
         y2 = y2 + 1;
         y3 = y3 + 1;
         y4 = y4 + 1;
         y5 = y5 + 1;
         ytallo = ytallo + 1;
         altura = altura - 1;
      }

   }

   let s = "Cuando hay luz, hay vida.";
   textSize (15);
   text (s, 10, 10, 70, 80);
}

function mousePressed() //al hacer click
{
   if (over) //si el mouse esta sobre la bola
   {
      locked = true; //entonces bloquea el movimiento
      xoff = mouseX - ex; //establece una variable x en la que se reste el movimiento del mouse con la posicion ex(inicial)
      yoff = mouseY - ey; //establece una variable y en la que se reste el movimiento del mouse con la posicion ey(inicial)
   }
}
function mouseDragged() //al arrastrar el mouse
{
   if (locked) // si el movimiento esta bloqueado
   {
      ex = mouseX - xoff; // entonces establece el nuevo punto inicial de la bola restando el movimiento del mouse con la posicion xoff
      ey = mouseY - yoff; // entonces establece el nuevo punto inicial de la bola restando el movimiento del mouse con la posicion yoff
   }
}
function mouseReleased() //si suelta el mouse
{
   locked = false; //desbloquea el movimiento
}
