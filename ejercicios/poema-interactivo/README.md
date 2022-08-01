# Ejercicio 3 - Poema interactivo

## Instrucciones

### Descripción
Realizar un programa que ilustre de manera interactiva un poema o una idea. El programa debe incluir al menos **una figura geométrica en movimiento** (usar [objetos y clases](https://es.wikipedia.org/wiki/Programaci%C3%B3n_orientada_a_objetos) puede ampliar las posibilidades) y **una reacción respecto a la posición del mouse dada por alguna condición**. Las funciones para realizar programa son `rect()`, `ellipse()`, `dist()`, las variables `mouseX`, `mouseY`, y la declaración `if{}`/`else{}`.
Puedes integrar más funciones si deseas.

### Entregable
Debes enviar un archivo .zip que solo contenga los siguientes archivos:
- `sketch.js`. Tu sketch p5js, que debe llamarse "sketch.js" 
- `referencia.jpg` o `referencia.png`. Una imagen (pantallazo) de referencia de cómo se ve el sketch corriendo en el navegador web, que debe llamarse "referencia.jpg" o "referencia.png"
- `index.html`. Un archivo html llamado "index.html" que llame al archivo 'sketch.js'. 
- No incluyas nada más.

### Criterios de evaluación
- Subir archivo `sketch.js`
- Subir archivo `index.html`
- Subir archivo `referencia.jpg` / `referencia.png`
- Usar `createCanvas()`
- Asignar al canvas el tamaño de la ventana del navegador web usando windowWidth y windowHeight
- Usar `stroke()`
- Usar `noStroke()`
- Usar `fill()`
- Usar `noFill()`
- Usar alguna función de figura primitiva 2D (`rect()`, `ellipse()` y/o `triangle()`)
- Integrar al menos una figura construida como un objeto a partir de una clase
- Que el programa corra sin errores
- Usar variables

## Ejemplo
[https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/poema-interactivo/](https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/poema-interactivo/) <br/>
Este ejemplo está basado en la premisa: "Solo a veces, y con algo de suerte, lo que debo hacer y lo que quiero hacer, coincide".

### Código del ejemplo
Archivo **`index.html`** </br>
Recuerda que en **html** todo lo que está ecrito entre `<!--` y `-->` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Poema interactivo</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body>
  </body>
</html>
```

Archivo **`sketch.js`** </br>
Recuerda que en **JavaScript** todo lo que está ecrito despues de `//` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 

```
let xcir, ycir;
let pregunta1;
let pregunta2;
let cfondo;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  xcir = width / 2;
  ycir = height / 2;
  pregunta1 = new Pregunta(color(255, 255, 0));
  pregunta2 = new Pregunta(color(0, 200, 255));
  cfondo = 80;
}

function draw() {
  background(cfondo);
  noStroke();

  // circulo
  stroke(255);
  noFill();
  strokeWeight(3);
  ellipse(mouseX, mouseY, 400, 400);

  pregunta1.update();
  pregunta2.update();

  let distP1 = dist(pregunta1.x, pregunta1.y, mouseX, mouseY);
  let distP2 = dist(pregunta2.x, pregunta2.y, mouseX, mouseY);

  if(distP1 < 220 && distP2 < 220){
    cfondo = color(0, 255, 100);
  }
  else{
    cfondo = color(80);
  }
}

class Pregunta {
  constructor(col) {
    this.x = random(width);
    this.y = random(height);
    this.dir = 1;
    this.vel = 4;
    this.col = col;
  }

  update() {
    noStroke();
    fill(this.col);
    rectMode(CENTER);
    rect(this.x, this.y, 80, 80);

    this.x = this.x + this.vel * this.dir;

    if (this.x > width) {
      this.dir = -1;
    }
    if (this.x < 0) {
      this.dir = 1;
    }
  }
}
```
### Imagen de referencia
![](https://github.com/jaimander/ND-Programacion-Creativa/blob/main/ejercicios/dibujo-geometrico/dibujo-geometrico-ej.png) 




