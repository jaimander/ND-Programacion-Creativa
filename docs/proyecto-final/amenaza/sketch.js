let colorFondo;
let pg;

let musicadefondo;

//Puntaje
let puntaje=0;
let sumo = false;

/*Galaga
let imgGalaga;
let Galaga1X;
let Galaga1Y;
let GalagaAncho=100;
let GalagaAlto=100;

/*Galaga2
let imgGalaga2;
let Galaga2X;
let Galaga2Y;
let Galaga2Ancho=100;
let Galaga2Alto=100;
*/

//Iron
let imgIron;
let IronX;
let IronY;
let IronAncho=70;
let IronAlto=100;

//superman
let imgSuperman;
let SupermanX;
let SupermanY;
let SupermanAncho=120;
let SupermanAlto=120;


//Ovni
let imgOvni;
let OvniAncho=100;
let OvniAlto=100;
let Ovnix;
let OvniY;

//Pulpo
let imgPulpo
let PuploAncho=60;
let PulpoAlto=60;

//Variables pulpo
let pulpoObj;
let pulpos = [];

//Misil A = Mario
let imgMisilA;
let MisilAAncho=80;
let MisilAAlto=80;


// Variables misil
let misilObj;
let misiles = [];

//Variables ovni
let ovniObj;
let Objetosnoidentificados = [];

//Variables de resultados al perder
let perdio = false;



function setup() {
  createCanvas(windowWidth-10, windowHeight-15);
  
  pg=createGraphics(width,height);
  colorFondo=color(42, 104, 165);

  //Generación de misiles
  misilObj = new misil();

  for(let i = 0; i < 10; i++){
    misiles.push(new misil());
  }

  //Generación de pulpos
  pulpoObj = new pulpo();

  for(let i = 0; i < 3; i++){
    pulpos.push(new pulpo());
  }

  /*posición inicial de Pulpo
 PulpoX=100;
 PulpoY=300;
 */
  
  //posición inicial de Iron
  IronX=random(100,width-100);
  IronY=600;

  //estrellas
  pg.push();
 for(let i=0; i<width; i++){ 
  pg.fill(255);
  pg.noStroke();
  pg.ellipse(random(width),random(height),3,3);
    }
    pg.pop();

    // Edificios
  for (let i = 0; i < width; i += random(30, 100)) { 
    for (let j = random(500, 700); j < height; j +=10) {
      let x = i;
      let y = j;
      pg.fill(44,62,80); // color negro
      pg.rect(x, y, 100, 10); // rectangulo negro
      pg.fill(202,183,47); // color amarillo
      pg.rect(x + random(5, 50), y, 50, 5); // rectangulo blanco
   }
 }
  
 
    // Montaña 
  let colMont = color(0);
  let y1 = random(700, 720);
  let y2 = height;

  for (i = 0; i < width; i++) {
    let x = i;
    y1 += random(-2, 2);
    pg.stroke(colMont);
    pg.line(x, y1, x, y2);
  }
  
  //backgroundMusic();

}
/*
function backgroundMusic{
musicadefondo.play();
musicadefondo.loop();
musicadefondo.setVolume(0.5);
userStartAudio();
}
*/
function draw() {
  background(colorFondo);
  image(pg,0,0,width,height);

  let currentTime = int(millis()/1000);
  
  push();
  textSize(20);
  fill(0);
  text("Time:"+currentTime,30,108);
  pop();

  //Iron
  image(imgIron,IronX,IronY,IronAncho,IronAlto);

  //Atrapar Ovni con Ironman
if(dist(IronX,IronY,Ovnix,OvniY)<100){
  OvniY=0
  Ovnix=random(0,width);

  
  
  }

  //Movimiento Ironman

  if (keyIsDown(LEFT_ARROW)) {
    IronX -= 23;
    }
    if (keyIsDown(RIGHT_ARROW)) {
    IronX += 23;
    }
    if (keyIsDown(UP_ARROW)) {
    IronY -= 15;
    }
    if (keyIsDown(DOWN_ARROW)) {
    IronY += 15;
    }

  
  //superman
  image(imgSuperman,SupermanX,SupermanY,SupermanAncho,SupermanAlto);

  //Movimiento Superman
  SupermanX=mouseX;
  SupermanY=mouseY;


  
  //Atrapar ovnis con Superman
  if(dist(mouseX,mouseY,Ovnix,OvniY)<80){
    OvniY=0
    Ovnix=random(0,width);

    }



// Esto afecta el resultado cuando pierdes
   //Misil impacta suelo color morado
   if(perdio == true){
    background(165, 42, 55 );
  textSize(80);
  
  textAlign(CENTER);
  text('The city was destroyed!', width/2, height/2-150);

  textAlign(CENTER);
  text('Every human was annihilated :(', width/2, height/2);
  
  textSize(160);
  textAlign(CENTER);
  text('Great job! "Team"', width/2, height/2+250);

  push();
  textSize(50);
  fill(0);
  //text("Time:"+currentTime,100,108);
  pop();
  
  }

if(perdio == false){
for(let i = 0; i < 10; i++){
  misiles[i].mover();
  misiles[i].mostrar();


  if(misiles[i].y > height-15){
    console.log(misiles[i].y);
    perdio = true;
  }
}

//Instrucciones
push();
fill(0);
stroke(40);
textSize(30);
textAlign(CENTER);
text('Save the city from nuclear disaster', width/2, 50);
  
textAlign(CENTER);
text('Work together to improve your chances of success', width/2, 80);
pop();

//Titulo de juego
push();
fill(250);
stroke(40);
textSize(10);
textAlign(CENTER);
text('Marvel & DC - Crossover', width/2, height-10);
pop();
  
}

 
}


function preload() {
  imgSuperman = loadImage('imagenes/Superman.png');
  imgMisilA = loadImage('imagenes/M.png');
  imgOvni = loadImage('imagenes/Ufo.webp');
  imgIron = loadImage('imagenes/Iron.png');
  //imgGalaga = loadImage('Galaga.png');
  //imgGalaga2 = loadImage('galaga2.png');
  imgPulpo = loadImage('imagenes/pulpo.png');

  //musica

  musicadefondo = loadSound('musica/HOFAH.mp3');

}

class misil {
  constructor(){
    this.x = random(width-80);
    this.y = 0;
    this.vel=random(1,8);
    this.dir;
  }

  mover(){
    this.y += this.vel;

    //Atrapar misiles con Superman
  if(dist(mouseX,mouseY,this.x,this.y)<80){
    this.y=0
    this.x=random(0,width-10);

    }

    //Atrapar misiles con Ironman
   if(dist(IronX,IronY,this.x,this.y)<100){
    this.y=0
    this.x=random(0,width-10);

  }
  }
  mostrar(){ 
    image(imgMisilA,this.x,this.y,MisilAAncho,MisilAAlto);
  }

}

class ovni {
  constructor(){
    this.x2 = random(width-10);
    this.y2 = 0;
    this.vel2=random(6);
    this.dir2;

    //console.log("creado");
  }
 ///ovni
  mover(){
    this.y2 += this.vel2;

  }

  mostrar(){
    
  image(imgOvni,this.x2,this.y2,OvniAncho,OvniAlto);
    //image(imgMisilA,this.x,this.y,MisilAAncho,MisilAAlto);
    //console.log("mostrando");

  }
  }
  
  class pulpo {
    constructor(){
      this.PulpoX = random(width-10);
      this.PulpoY = 0;
      this.Pulpovel=random(2,6);
      this.Pulpodir;
    }
  
    mover(){
      this.PulpoY += this.Pulpovel;
  
      
    }
    mostrar(){ 
      // Pulpo
     image(imgPulpo,this.PulpoX,this.PulpoY,PuploAncho,PulpoAlto);
     
    }



  }

  function mouseMoved(){ 
 
    if (musicadefondo.isPlaying()==false){ 
      musicadefondo.play();

    }


}
