let wallpaper;
let aplicacion = [];
let popup = false;
let iconos = [];
let imagenes = [];
let cancion;
let inputu;
let valide = false;
let repro = false;
let audiohija;
let audioesposo;
let comparison = [];
let sizeicon = 100;
let reproducir;

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 20);

  inputu = createInput('Ingresa PIN', 'text');
  inputu.position(50, height / 2);
  inputu.input(myInputEvent);

  console.log('625');
}

function myInputEvent() {
  let comp = inputu.value();
  if (comp == 625) {
    valide = true;
    inputu.hide();
  }
}

function preload() {
  wallpaper = loadImage('imagenes/wallpaper.png');
  for (i = 0; i < 13; i++) {
    iconos[i] = loadImage('iconos/icono' + i + '.png');
    imagenes[i] = loadImage('imagenes/imagen' + i + '.png');
  }

  audiohija = loadSound('sonidos/audiohija.ogg');
  audioesposo = loadSound('sonidos/audioesposo.ogg');
}

function draw() {
  //Fondo
  background(0, 204, 102);
  image(wallpaper, 0, 0, width, height);

  if (valide == true) {
    for (let i = 0; i < 13; i++) {
      //crear en el array aplicacion el numero determinado de aplicaciones para interactuar
      let x = i * 100;
      let y = random(height - 100);
      let tamano = sizeicon;
      let icono = iconos[i];
      let imagen = imagenes[i];
      let b = new aplicaciones(imagen, x, y, tamano, icono);
      aplicacion.push(b); //posicionar cada nuevo elemento creado en el ciclo dentro de el array aplicaciones
    }
    valide = false;
  }

  //Llamar objeto. Se usa for of para que llame de cada elementos existente en el array creado en el setup
  for (let aplicacionmostrar of aplicacion) {
    aplicacionmostrar.mostrar();
  }
  for (let aplicacionmostrar of aplicacion) {
    if (popup == true) {
      aplicacionmostrar.ventanas();
    }
  }
}

function mousePressed() {
  for (let aplicacionPresionar of aplicacion) {
    aplicacionPresionar.interactuar(mouseX, mouseY);
    popup = true;
  }
}

class aplicaciones {
  constructor(img, x, y, tamano, icono) {
    //darle los datos necesarios al objeto para su existencia
    this.x = x;
    this.y = y;
    this.img = img;
    this.tamano = tamano;
    this.icono = icono;
    this.pop = false;
  }

  mostrar() {
    image(this.icono, this.x, this.y, this.tamano, this.tamano);
  }

  interactuar(tempX, tempY) {
    if (
      tempX > this.x &&
      tempX < this.x + this.tamano &&
      tempY > this.y &&
      tempY < this.y + this.tamano
    ) {
      this.pop = true;
    } else {
      this.pop = false;
    }
  }

  ventanas() {
    let hola = this.img;
    if (this.pop == true) {
      image(this.img, 300, 10, this.tamano * 8, this.tamano * 6);
      if (audiohija.isPlaying() == false) {
        audiohija.play();
      }

      if (audioesposo.isPlaying() == false) {
        audioesposo.play();
      }
    }
  }
}
