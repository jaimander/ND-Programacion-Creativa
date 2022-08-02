# Ejercicio 4 - Escenas en movimiento

## Instrucciones

### Descripción
Realizar un programa que muestre una secuencia de escenas que narren una situación breve, usando imagenes/íconos en formato `.png` y estableciendo los cambios de movimiento a partir de intervalos de tiempo establecidos (timers). Las funciones nuevas para realizar esta animación básica son: `millis()`, `loadImage()`, `image()`. Puedes integrar más funciones si deseas. Sugiero usar íconos de la página [https://www.flaticon.es/](https://www.flaticon.es/).

### Entregable
Debes enviar un archivo .zip que solo contenga los siguientes archivos:
- `sketch.js`. Tu sketch p5js, que debe llamarse "sketch.js" 
- `referencia.jpg` o `referencia.png`. Una imagen (pantallazo) de referencia de cómo se ve el sketch corriendo en el navegador web, que debe llamarse "referencia.jpg" o "referencia.png"
- `index.html`. Un archivo html llamado "index.html" que llame al archivo 'sketch.js'. 
- Una carpeta con el nombre `assets`, que contenga los archivos `.png` utilizados.
- No incluyas nada más.

### Criterios de evaluación
- Subir archivo `sketch.js`
- Subir archivo `index.html`
- Subir archivo `referencia.jpg` / `referencia.png`
- Usar `createCanvas()`
- Usar la función `preload()` para cargar las imagenes al programa.
- Usar `image()`
- Asignar al canvas el tamaño de la ventana del navegador web usando `windowWidth` y `windowHeight`
- Usar `background()` con valores variables
- Usar `fill()`
- Usar operaciones de suma `+` y resta `-`
- Usar operadores de comparación (ej. `==`, `<=`, `>`)
- Usar alguna figura primitiva (`ellipse()`, `rect()`, etc.)
- Usar variables
- Usar condicionales `if(){}`
- Que el programa corra sin errores
- Archivo .zip organizado conforme a las indicaciones (`index.html`, `sketch.js, referencia.png`y carpeta `assets` con las imágenes usadas).

## Ejemplo
[https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/escenas-en-movimiento/](https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/escenas-en-movimiento/)

### Código del ejemplo
Archivo **`index.html`** </br>
Recuerda que en **html** todo lo que está ecrito entre `<!--` y `-->` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Escenas en movimiento</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body></body>
</html>
```

Archivo **`sketch.js`** </br>
Recuerda que en **JavaScript** todo lo que está ecrito despues de `//` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 

```
// https://www.flaticon.com/premium-icon/tree_4319613?term=tree&page=1&position=64&page=1&position=64&related_id=4319613&origin=search
// https://www.flaticon.com/premium-icon/elephant_3359878?related_id=3359878&origin=search

let tiempoRef = 0;
let tiempoCont = 0;
let tiempoEspera = 1000;

let momento = 0;
let xElef;
let xArbol;
let cfondo;

let imgElef;
let imgArbol;

let ciclo = 0;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  xElef = 200;
  xArbol = width;
  cfondo = color(0, 0, 20);
}

function draw() {
  background(cfondo);

  noStroke();
  fill(140, 170, 60);
  rect(0, 300, width, height);

  if (momento == 0) {
    tiempoCont = millis() - tiempoRef;

    if (tiempoCont >= tiempoEspera) {
      tiempoRef = millis();
      cfondo = color(200, 240, 255);
      momento = 1;
      ciclo++;
    }
  }

  if (momento == 1) {
    tiempoCont = millis() - tiempoRef;
    xElef += 2;
    xArbol -= 2;
    if (tiempoCont >= tiempoEspera) {
      tiempoRef = millis();
      cfondo = color(0, 0, 20);
      momento = 0;
    }
  }

  image(imgArbol, xArbol, 180, 120, 120);
  image(imgElef, xElef, 200, 100, 100);

  if (ciclo < 7) {
    image(imgElef, xElef - 100, 220, 80, 80);
  }
}

function preload() {
  imgElef = loadImage('assets/elefante.png');
  imgArbol = loadImage('assets/arbol.png');
}
```
### Imagen de referencia
![](https://github.com/jaimander/ND-Programacion-Creativa/blob/main/ejercicios/escenas-en-movimiento/referencia.png) 




