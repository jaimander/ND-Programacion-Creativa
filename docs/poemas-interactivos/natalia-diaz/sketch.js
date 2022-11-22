/*llegar a la meta es complicado pero no imposible, siempre se ve de tres colores
rojo el inicio y lo mas dificil, amarillo ya casi llegas pero no sabes si rendirte, verde
ya casi logras ver resultados y la meta que al final te da frutos*/
let valorAleatorio

// set up
function setup (){
  createCanvas(windowWidth,windowHeight);
}

  background (239,239,236);
  
  stroke(0);
  fill(0);
  function draw() {
    background(230,230,250);
    
    // semaforo
    if (mouseX < 500) {
      fill (255,0,0)
      rect(0, 0, 400, windowHeight);  // verde
    }
    else if (mouseX < 800) {
      fill(255,255,0)
      rect(400, 0, 400, windowHeight); // amarillo

    }
    else if (mouseX<1100){
      fill(34,139,34)
      rect(800, 0, 400, windowHeight); // roja


    }
    fill(0)
    let p =ellipse (1500,300,500,500)

    //bola rosada//
    noStroke()
    fill (255)
    ellipse(mouseX+ random (valorAleatorio), mouseY,200,200);
// hacer click al usuario 
    if (mouseButton == LEFT) {
      fill(138,43,226); // MORADO 
      fill(255,255,0)
      ellipse(mouseX, 16, 33, 33);  
  ellipse(mouseX/2, 50, 33, 33); 
  ellipse(mouseX*2, 84, 33, 33); 
  ellipse(mouseX, 16, 33, 33);  
  ellipse(mouseX+20, 16, 33, 33);  
  ellipse(mouseX/20, 50, 33, 33); 
  ellipse(mouseX*5, 84, 33, 33); 

    }
    else if (mouseButton == RIGHT) {
      fill(255); // White
    }
    else {
      fill(230,230,250); // morado
    }
    ellipse (1500, 300, 300, 300);
  }
    
  
  


  