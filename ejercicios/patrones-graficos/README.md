# Ejercicio 2 - Patrones gráficos
## Instrucciones

### Descripción
Realizar un programa que dibuje un paisaje con un cierto grado de aleatoriedad, mediante el uso de ciclos y variables. Las funciones para realizar el dibujo de ese paisaje son: `stroke()`, `line()`, `rect()`, `ellipse()`, `fill()`, `random()`, `noise()`. El dibujo debe incluir al menos una capa de montaña y una capa de edificios o "construcciones urbanas".
Puedes integrar más funciones si deseas.

### Entregable
Debes enviar un archivo `.zip` que solo contenga los siguientes archivos:
- `sketch.js`. Tu sketch p5js, que debe llamarse "sketch.js" 
- `referencia.jpg` o `referencia.png`. Una imagen (pantallazo) de referencia de cómo se ve el sketch corriendo en el navegador web, que debe llamarse "referencia.jpg" o "referencia.png"
- `index.html`. Un archivo html llamado "index.html" que llame al archivo 'sketch.js'. 
- No incluyas nada más.

### Criterios de evaluación
- Subir archivo `sketch.js`
- Subir archivo `index.html`
- Subir archivo `referencia.jpg` / `referencia.png`
- Usar `createCanvas()`
- Asignar al canvas el tamaño de la ventana del navegador web usando `windowWidth` y `windowHeight` 
- Usar `stroke()`
- Usar `noStroke()`
- Usar `fill()`
- Usar `noFill()`
- Usar `rect()`
- Usar `random()`
- Usar `for()`
- Usar variables 
- Usar `noise()` (opcional)
- Que el programa corra sin errores

## Ejemplo
[https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/patrones-graficos/](https://jaimander.github.io/ND-Programacion-Creativa/ejercicios/patrones-graficos/)

### Código del ejemplo
Archivo **`index.html`** </br>
Recuerda que en **html** todo lo que está ecrito entre `<!--` y `-->` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" /> 
    <title>Patrones gráficos</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script> <!-- aquí se llama la librería de p5.js-->
    <script src="sketch.js"></script> <!-- aquí se llama el archivo sketch.js -->
  </head>
  <body></body>
</html>
```

Archivo **`sketch.js`** </br>
Recuerda que en **JavaScript** todo lo que está ecrito despues de `//` es un comentario, que no afecta el funcionamiento del programa, pero nos sirven de guía para saber lo que estamos haciendo. 

```
unction setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1); // para 
  background(180, 200, 250);

  // las capas se organizan de la más lejana a la mas cercana

  // capa 1 montañas
  let colMont1 = color(90, 150, 220);
  let y1 = 0;
  let n = 0.0;
  let yOffSet = 200;

  for (i = 0; i < width; i++) {
    n += 0.01;
    let noiseVal = noise(n);
    let x = i;
    y1 = noiseVal * 100 + yOffSet + random(-0.4, 0.4);
    stroke(colMont1);
    line(x, y1, x, height);
  }

  // capa 2 montañas
  let colMont2 = color(60, 100, 190);
  let y2 = random(300, 400);

  for (i = 0; i < width; i++) {
    let x = i;
    let yVar = random(-2, 2);
    y2 += yVar;
    stroke(colMont2);
    line(x, y2, x, height);
  }

  // capa 3 edificios
  stroke(255);
  for (let i = 0; i < width; i += random(50, 100)) {
    for (let j = random(400, 800); j < height; j += 10) {
      let x = i;
      let y = j;
      fill(230, 140, 118);
      rect(x, y, 100, 10);
      fill(230);
      rect(x, y, random(100), 10);
      fill(230, 140, 118);
      rect(x, y, random(20), 10);
    }
  }

  // capa 4 montañas primer plano
  let colMont3 = color(30, 100, 80);
  let y3 = random(600, 700);

  for (i = 0; i < width; i++) {
    let x = i;
    let yVar = random(-2, 2);
    y3 += yVar;
    stroke(colMont3);
    strokeWeight(2);
    line(x, y3, x, height);
  }
}

```
### Imagen de referencia
![](https://github.com/jaimander/ND-Programacion-Creativa/blob/main/ejercicios/patrones-graficos/referencia.png) 




