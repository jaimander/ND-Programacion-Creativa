# Ejercicio 6 - Descubrir sonidos en una imagen

## Instrucciones

### Descripción
Realizar un programa que visualice una imagen de fondo que tenga varias zonas de interacción que al hacer clic, activen y desactiven sonidos determinados. Las funciones nuevas para realizar esta animación básica son: `loadSound()`, `play()`, `stop()`, `function mousePressed()`, `function mouseReleased()`, y la librería `p5.sound.js`, para que las funciones relacionadas al uso y manipulación de archivos de audio puedan servir. Puedes integrar más funciones si deseas. 

### Entregable
Debes enviar un archivo .zip que solo contenga los siguientes archivos:
- `sketch.js`. Tu sketch p5js, que debe llamarse "sketch.js" 
- `[nombre de la clase].js`, que debe contener la clase que define el comportamiento de las zonas de interacción.
- `referencia.jpg` o `referencia.png`. Una imagen (pantallazo) de referencia de cómo se ve el sketch corriendo en el navegador web, que debe llamarse "referencia.jpg" o "referencia.png"
- `index.html`. Un archivo html llamado "index.html" que llame al archivo 'sketch.js'. 
- Una carpeta con el nombre `assets`, que contenga la imagen de fondo `.jpg`, los archivos de audio `.mp3`, y los archivos `.png` utilizados.
- No incluyas nada más.

### Criterios de evaluación
- Subir archivo `sketch.js`
- Subir archivo `index.html`
- Subir archivo `referencia.jpg` / `referencia.png`
- Usar `createCanvas()`
- Usar la función `preload()` para cargar las imagenes y los sonidos al programa.
- Usar `image()`
- Usar `play()`
- Usar `stop()`
- Usar `isPlaying()`
- Usar `mousePressed()` y `mouseReleased()`
- Usar `cursor(HAND)` y `cursor(ARROW)`
- Asignar al canvas el tamaño de la ventana del navegador web usando `windowWidth` y `windowHeight`
- Usar variables booleanas (`true` / `false`)
- Usar objetos y clases para definir las zonas de interacción y reproducción de sonido (OOP) 
- Usar condicionales `if(){}`
- Que el programa corra sin errores
- Archivo .zip organizado conforme a las indicaciones (`index.html`, `sketch.js, referencia.png`y carpeta `assets` con las imágenes y sonidos usados).
- 
## Ejemplo
[https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/descubrir-sonidos-en-una-imagen/](https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/descubrir-sonidos-en-una-imagen/)

### Código del ejemplo
Archivo **`index.html`** </br>
Recuerda que en **html** todo lo que está ecrito entre `<!--` y `-->` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Descubrir sonidos en una imagen</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
    <script src="libs/p5.sound.js"></script>
    <!-- importamos la librería de sonido -->
    <script src="sketch.js"></script>
    <script src="area.js"></script>
    <!-- importamos el script donde está la clase -->
  </head>
  <body></body>
</html>
```

Archivo **`sketch.js`** </br>
Recuerda que en **JavaScript** todo lo que está ecrito despues de `//` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 

``` js
// variables de imágenes
let imgFondo;
let imgTransmi;
let imgFurgon;

// variables de archivos mp3
let audio1;
let audio2;

// areas
let area1;
let area2;

function preload() {
  // imagen fondo jpg
  imgFondo = loadImage('assets/trancon.jpg');

  // imágenes png
  imgTransmi = loadImage('assets/transmi.png');
  imgFurgon = loadImage('assets/furgon.png');

  // sonidos
  audio1 = loadSound('assets/transmi.mp3');
  audio2 = loadSound('assets/furgon.mp3');
}

function setup() {
  createCanvas(imgFondo.width, imgFondo.height);

  background(50);

  area1 = new AreaInteractiva(874, 70, 100, 80, audio1, imgTransmi);
  area2 = new AreaInteractiva(470, 410, 120, 200, audio2, imgFurgon);
}

function draw() {
  image(imgFondo, 0, 0);

  area1.actualizar();
  area1.mostrar();

  area2.actualizar();
  area2.mostrar();

  /*
  fill(255, 0, 0);
  textSize(20);
  text(mouseX + ' ' + mouseY, mouseX, mouseY);
  */

  if (
    (mouseX > area1.x &&
      mouseX < area1.x + area1.ancho &&
      mouseY > area1.y &&
      mouseY < area1.y + area1.alto) ||
    (mouseX > area2.x &&
      mouseX < area2.x + area2.ancho &&
      mouseY > area2.y &&
      mouseY < area2.y + area2.alto)
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mousePressed() {
  area1.pressed();
  area2.pressed();
}

function mouseReleased() {
  area1.released();
  area2.released();
}

function touchStarted() {
  area1.pressed();
  area2.pressed();
}

function touchEnded() {
  area1.released();
  area2.released();
}

```

Archivo **`area.js`** </br>
``` js
class AreaInteractiva {
  constructor(x, y, ancho, alto, audio, imgContorno) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.audio = audio;
    this.encima = false;
    this.presionado = false;
    this.imgContorno = imgContorno;
  }

  actualizar() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y + this.alto
    ) {
      this.encima = true;
    } else {
      this.encima = false;
    }
  }

  mostrar() {
    if (this.presionado == true) {
      this.col = color(255);
    } else {
      this.col = color(200, 0, 100);
    }

    /*
    // rectangulo de referencia
    noFill();
    stroke(255, 0, 0);
    rect(this.x, this.y, this.ancho, this.alto);
    */

    if (this.audio.isPlaying() == true) {
      image(this.imgContorno, 0, 0);

      // barra de progreso del audio
      stroke(this.col);
      noFill();
      rect(this.x, this.y - 30, this.ancho, 10);

      noStroke();
      fill(255);
      rect(
        this.x,
        this.y - 30,
        map(this.audio.currentTime(), 0, this.audio.duration(), 0, this.ancho),
        10
      );
    }
  }

  pressed() {
    if (this.encima == true) {
      this.presionado = true;
      if (this.audio.isPlaying() == false) {
        this.audio.play();
      } else {
        this.audio.stop();
      }
    }
  }

  released() {
    this.presionado = false;
  }
}
```

### Imagen de referencia
![](https://github.com/jaimander/ND-Programacion-Creativa/blob/main/ejercicios/descubrir-sonidos-en-una-imagen/referencia.png) 


