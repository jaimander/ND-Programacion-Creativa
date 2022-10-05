let x1=1;
let y1=1;

let x2=1;
let y2=1;

let x3=1;
let y3=1;

let colorFondo;

let puntaje=0;
let sumo = false;

//Ellipse1

//mov en x1
let velocidad1=1;
let direccion1=1;

//mov en y1
let velocidad2=1;
let direccion2=1;


//ellipse2

//mov en x2
let velocidad3=1;
let direccion3=1;

//mov en y2
let velocidad4=1;
let direccion4=1;

//Rectangulo

//mov en x3
let velocidad5=1;
let direccion5=1;

//mov en y3
let velocidad6=1;
let direccion6=1;


let colorEllipse1=1;

let colorEllipse2=1;

/* LEER ESTO
El principal aspecto de mejora en tu proyecto es mostrar el puntaje en la pantalla para que el jugador tenga retroalimentacción
*/

// falta agregar la idea narrativa en que se basa el juego

function setup() {
createCanvas(500, 400);

colorFondo=color(40);

x1=random(255);
x2=random(255);

y1=random(255);
y2=random(255);

//vel ellipse1
velocidad1=21;
velocidad2=22;

//vel ellipse2
velocidad3=21;
velocidad4=18;

//vel rect
velocidad5=12;
velocidad6=10;



colorEllipse1= color(255,100,255);

colorEllipse2= color(255,255,0);


  }
  
  function draw() {
    background(colorFondo);
    
    push();

    fill(255);
    textSize(20);
   textAlign(CENTER);
   text("Encierra los dos circulos para sumar un punto",250,60);


   textSize(10);
   textAlign(CENTER);
   text("Persistencia   Compromiso   Autoexigencia",250,300);

   textSize(8);
   textAlign(CENTER);
   text("Encierra uno de los circulos y el rectángulo y pierdes todos tus puntos",250,390);


      // mostrar puntaje en en canvas
      textSize(30);
      textAlign(CENTER);
      text(puntaje,250, 200);

   pop();




//circulo mouse
    noFill();
    stroke(225);
    ellipse(mouseX,mouseY,100,100);

    //Ellipse 1
    noStroke();
    fill(colorEllipse1);
    ellipse(x1,y1,50,50);

    
   
    //mov ellipse1_color azul
    x1=x1+(velocidad1*direccion1);
    y1=y1+(velocidad2*direccion2);

    if(x1>width){
      direccion1=-1;
    }

    if(x1<0){
      direccion1=1;
    }

    if(y1>height){
      direccion2=-1;
    }

    if(y1<0){
      direccion2=1;
    }
    
    
    //Ellipse 2
    noStroke();
    fill(colorEllipse2);
    ellipse(x2,y2,50,50);

    //mov ellipse 2
    x2=x2+(velocidad3*direccion3);
    y2=y2+(velocidad4*direccion4);


    if(x2>width){
      direccion3=-1;
    }

    if(x2<0){
      direccion3=1;
    }
   
    if(y2>height){
      direccion4=-1;
    }

    if(y2<0){
      direccion4=1;
    }

    //Rectangulo
    noStroke();
    fill(255,0,0);
    rect(x3,y3,50,50);

    //mov Rect
    x3=x3+(velocidad5*direccion5);
    y3=y3+(velocidad6*direccion6);


    if(x3>width){
      direccion5=-1;
    }

    if(x3<0){
      direccion5=1;
    }
   
    if(y3>height){
      direccion6=-1;
    }

    if(y3<0){
      direccion6=1;
    }

/// cambio color ellipse1
    if(dist(mouseX,mouseY,x1,y1)<100) {
      colorEllipse1 = color(255,0,255);
      
    }

    else{
    colorEllipse1 = color(0,0,255);
  } 

   // cambio color ellipse2

   if(dist(mouseX,mouseY,x2,y2)<100) {
    colorEllipse2 = color(255,0,255);//color morado
    
  }

  else{
  colorEllipse2 = color(255,255,0);
  } 

  //ganas 1 punto   dos circulos
  if (dist(mouseX, mouseY, x1, y1) < 80 && dist(mouseX, mouseY, x2, y2) < 80){
  colorFondo = color(0, 255, 200); // 
  velocidad1=0;
  velocidad2=0;

  velocidad3=0;
  velocidad4=0;

  velocidad5=0;
  velocidad6=0;
if(sumo == false){
  puntaje+=1;
  sumo=true;
}
  }
 

//pierdes 1 punto elipse azul rectangulo
else if (dist(mouseX, mouseY, x1, y1) < 80 && dist(mouseX, mouseY, x3, y3) < 80 ){
  colorFondo = color(255, 0, 100); // 

  //puntaje=-1;
  //sumo=true;
   /* borrar las dos líneas anterioes que hacen que se reste mas de una vez. Esto ya lo estamos resolviendo abajo en el if(sumo == false){
    puntaje-=1;
    sumo=true;
  }*/


  velocidad1=0;
  velocidad2=0;

  velocidad3=0;
  velocidad4=0;

  velocidad5=0;
  velocidad6=0;

  if(sumo == false){
    puntaje-=1;
    sumo=true;
  }

  }



//pierdes 1 punto
else if (dist(mouseX, mouseY, x2, y2) < 80 && dist(mouseX, mouseY, x3, y3) < 80){
  colorFondo = color(255, 0, 100); // 
  
  
  //puntaje=-1;
  //sumo=true;   
  /* borrar las dos líneas anterioes que hacen que se reste mas de una vez. Esto ya lo estamos resolviendo abajo en el if(sumo == false){
    puntaje-=1;
    sumo=true;
  }*/

  velocidad1=0;
  velocidad2=0;

  velocidad3=0;
  velocidad4=0;

  velocidad5=0;
  velocidad6=0;

  if(sumo == false){
    puntaje-=1;
    sumo=true;
  }


  }
  else {
  colorFondo = color(40); // 

  sumo=false;


  velocidad1=11;
  velocidad2=9;

  velocidad3=13;
  velocidad4=8;

  velocidad5=10;
  velocidad6=10;

}





 console.log(puntaje);

    
  }

  //persistencia, compromiso, autoexigencia, 

  //tres objetos, Dos ellipses, un rectangulo
   //un circulo pequeño que se mueve con el mouse
  //rebotan de forma aleatoria 
 
  //si el circulo pequeño logra encerrar las dos ellipses la pantalla se torna verde y el movimiento se detiene-ganaste
  //si el circulo logra encerrar una ellipse y un rectangulo, la pantalla se torna roja, se detiene el movimiento, perdiste.
  //
