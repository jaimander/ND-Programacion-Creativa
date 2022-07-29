// https://pxhere.com/es/photo/1176685
// https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2020%2F08%2F13%2FGettyImages-528097758-2000.jpg

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180, 200, 250);

  // capas de la más lejana a la mas cercana

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
    console.log(noiseVal);
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

  //
}
