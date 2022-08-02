# Ejercicio 6 - Uso de imágenes de la web

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
[https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/uso-de-imagenes-de-la-web/](https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/dibujo-geometrico/)

### Código del ejemplo
Archivo **`index.html`** </br>
Recuerda que en **html** todo lo que está ecrito entre `<!--` y `-->` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" /> 
    <title>Dibujo geométrico</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script> <!-- aquí se llama la librería de p5.js-->
    <script src="sketch.js"></script> <!-- aquí se llama el archivo sketch.js -->
  </head>
  <body></body>
</html>
```

Archivo **`sketch.js`** </br>
Recuerda que en **JavaScript** todo lo que está ecrito despues de `//` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 
```
function setup() {
  cv = createCanvas(400, 400);
}

function draw() {
  background(40);

  // rueda
  fill(180);
  noStroke();
  ellipse(205, 270, 40, 40);

  // procesador y antena
  stroke(250, 250, 0);
  strokeWeight(2);
  line(233, 75, 233, 95);
  noStroke();
  fill(25, 200, 100);
  rect(190, 110, 55, 30);
  rect(228, 95, 10, 30);
  triangle(245, 140, 220, 160, 200, 140);

  // cabeza
  noStroke();
  fill(255);
  beginShape();
  vertex(180, 100);
  vertex(200, 100);
  vertex(230, 135);
  vertex(230, 270);
  vertex(180, 270);
  endShape();

  // ojo
  fill(0);
  ellipse(200, 150, 25, 25);
  fill(255, 0, 0);
  ellipse(212, 130, 5, 5);
  ellipse(200, 150, 8, 8);

  // altavoz
  stroke(0);
  strokeWeight(2);
  line(220, 180, 220, 200);
  line(225, 180, 225, 200);
  line(215, 180, 215, 200);

  // sensor
  fill(0);
  ellipse(210, 250, 10, 10);

  // tornillos
  noStroke();
  fill(110);
  ellipse(184, 104, 3, 3);
  ellipse(199, 104, 3, 3);
  ellipse(226, 136, 3, 3);
  ellipse(184, 266, 3, 3);
  ellipse(226, 266, 3, 3);

  // pantalla
  fill(190);
  rect(150, 200, 30, 20);
  fill(255);
  rect(150, 220, 30, 10);
  fill(0, 50, 50);
  rect(155, 205, 20, 10);
  strokeWeight(1);
  stroke(255);
  point(160, 208);
  line(164, 208, 170, 208);
  line(158, 212, 167, 212);
}
```
### Imagen de referencia
![](https://github.com/jaimander/ND-Programacion-Creativa/blob/main/ejercicios/dibujo-geometrico/dibujo-geometrico-ej.png) 




