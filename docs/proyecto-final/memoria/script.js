
//Hecho por Ketlly Sulelli Bautista y Juliana Rodríguez Rodriguez

let button, button1, button2, button3, button4, button5, button6;
let name, inp;
let intro, saludo, tercero, cuarto, quinto, sexto;
let col, sound1, sound2, sound3, sound4;
let escenarios = [];
let personas = [];
let objetos = [];
let escritos = [];
let grupos = [];
let audios = [];

function preload() {

  //SUBIR IMAGENES
  for (let i = 0; i < 5; i++) {
    escenarios[i] = loadImage("imagenes/imagen" + i + ".jpeg");
  }

  for (let i = 0; i < 6; i++) {
    personas[i] = loadImage("imagenes/persona" + i + ".jpeg");
  }

  for (let i = 0; i < 5; i++) {
    escritos[i] = loadImage("imagenes/escrito" + i + ".jpeg");
  }

  for (let i = 0; i < 5; i++) {
    objetos[i] = loadImage("imagenes/objeto" + i + ".jpeg");
  }

  for (let i = 0; i < 6; i++) {
    grupos[i] = loadImage("imagenes/grupo" + i + ".jpeg");
  }

  //SUBIR AUDIO
  for (let i = 0; i < 13; i++) {
    audios[i] = loadSound("audios/audio" + i + ".mp4");
  }
}

//BOTONES
function boton1() {
  if (primero == false) {
    button = createButton('Escenarios');
    button.position(-100, height - 100);

  }
}

function boton2() {
  if (saludo == false) {
    button2 = createButton('Seguir');
    button2.position(-100, height - 100);

  }
}

function boton3() {
  if (tercero == false) {
    button3 = createButton('Rostros');
    button3.position(-100, height - 100);
  }
}

function boton4() {
  if (cuarto == false) {
    button4 = createButton('Escritos');
    button4.position(-100, height - 100);
  }
}

function boton5() {
  if (quinto == false) {
    button5 = createButton('Objetos');
    button5.position(-100, height - 100);
  }
}

function boton6() {
  if (sexto == false) {
    button6 = createButton('Grupos');
    button6.position(-100, height - 100);
  }
}

//ESCENAS

function escenaPrimera() {
  background(col);
  saludo = false;
  primero = false;
  tercero = false;
  cuarto = false;
  quinto = false;
  sexto = false;
  fill(255);
  textSize(20);
  text("Ingresa tu nombre...", 50, 220);

  inp = createInput('');
  inp.position(50, 250);
  inp.size(100);
  button1 = createButton('->');
  button1.position(150, 250);
}

function escenaSegunda() {
  background(col);
  const name = inp.value();
  textSize(30);
  text("Hola " + name + "...", 100, 100);
  textSize(20);
  text("El testigo: eres uno de ellos. Eres y estás en los zapatos de los que /n vivieron los horrores de la guerra en este momento, o solo eres quien las observa. Tu decides. Entra, desde una enunciación de espectador y de respeto,  a conocer a través de algunas de las imágenes que Jesus Abad Colorado capturó para documentar, lo que sucedió y sucede en la guerra y en el sentir de sus víctimas. ", width / 8, height / 5, width - 400, height - 200);
  text("Basado en el libro Hechos para contar y la exposición en el Claustro de San Agustín de -El Testigo- de Jesús Abad Colorado, se hizo un recolección de los ángulos, las lupas, los lentes que muestran el conflicto armado desde la posición del testigo. No es una exposición completa sobre las 500 fotos que plasmaron en papel y píxeles los eventos del dolor, pero es con el ánimo de crear una experiencia inmersiva al observar algunas de las imágenes que dejó el conflicto desde 5 dimensiones.", width / 8, height / 2, width - 400, height - 200);
  button1.remove();
  inp.remove();
  button2.position(width - 100, height - 100);
}

function escenaTres() {
  background(col);
  audios[sound1].play();
  let esc = int(random(escenarios.length));
  imageMode(CENTER);
  image(escenarios[esc], width / 2, height / 2, escenarios[esc].width / 2, escenarios[esc].height / 2);
  button2.remove();
  button.position(width - 100, height - 100);
  button3.position(width - 200, height - 100);
  button4.position(width - 300, height - 100);
  button5.position(width - 400, height - 100);
  button6.position(width - 500, height - 100);
  audios[sound2].stop();
  audios[sound3].stop();
  audios[sound4].stop();
}

function escenaRostros() {
  background(col);
  audios[sound2].play();
  let per = int(random(personas.length));
  imageMode(CENTER);
  image(personas[per], width / 2, height / 2, personas[per].width / 2, personas[per].height / 2);
  button.position(width - 100, height - 100);
  button3.position(width - 200, height - 100);
  button4.position(width - 300, height - 100);
  button5.position(width - 400, height - 100);
  button6.position(width - 500, height - 100);
  audios[sound1].stop();
  audios[sound3].stop();
  audios[sound4].stop();
}

function escenaEscritos() {
  background(col);
  let et = int(random(escritos.length));
  imageMode(CENTER);
  image(escritos[et], width / 2, height / 2, escritos[et].width / 2, escritos[et].height / 2);
  button.position(width - 100, height - 100);
  button3.position(width - 200, height - 100);
  button4.position(width - 300, height - 100);
  button5.position(width - 400, height - 100);
  button6.position(width - 500, height - 100);
  audios[sound1].stop();
  audios[sound2].stop();
  audios[sound3].stop();
  audios[sound4].stop();
}

function escenaObjetos() {
  background(col);
  audios[sound3].play();
  let obj = int(random(objetos.length));
  imageMode(CENTER);
  image(objetos[obj], width / 2, height / 2, objetos[obj].width / 2, objetos[obj].height / 2);
  button.position(width - 100, height - 100);
  button3.position(width - 200, height - 100);
  button4.position(width - 300, height - 100);
  button5.position(width - 400, height - 100);
  button6.position(width - 500, height - 100);
  audios[sound1].stop();
  audios[sound2].stop();
  audios[sound4].stop();
}

function escenaGrupos() {
  background(col);
  audios[sound4].play();
  let gr = int(random(grupos.length));
  imageMode(CENTER);
  image(grupos[gr], width / 2, height / 2, grupos[gr].width / 2, grupos[gr].height / 2);
  button.position(width - 100, height - 100);
  button3.position(width - 200, height - 100);
  button4.position(width - 300, height - 100);
  button5.position(width - 400, height - 100);
  button6.position(width - 500, height - 100);
  audios[sound1].stop();
  audios[sound2].stop();
  audios[sound3].stop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  col = color(0);
  escenaPrimera();
  boton1();
  boton2();
  boton3();
  boton4();
  boton5();
  boton6();
  sound1 = int(random(audios.length - 9));
  sound2 = int(random(audios.length - 9, audios.length - 6));
  sound3 = int(random(audios.length - 6, audios.length - 4));
  sound4 = int(random(audios.length - 4, audios.length));
}

function draw() {

  //Primera escena
  if (intro == false) {
  }
  else {
    button1.mousePressed(escenaSegunda);
  }

  //Escena de escenarios
  if (primero == true) {
  }
  else {
    button.mousePressed(escenaTres);
  }

  //Segunda escena
  if (saludo == false) {
    button2.mousePressed(escenaTres);
  }

  //Tercera escena
  if (tercero == true) {
  }
  else {
    button3.mousePressed(escenaRostros);
  }

  //Cuarta escena
  if (cuarto == false) {
    button4.mousePressed(escenaEscritos);
  }

  //Quinta escena
  if (quinto == false) {
    button5.mousePressed(escenaObjetos);
  }

  //Sexta escena
  if (sexto == false) {
    button6.mousePressed(escenaGrupos);
  }

}


