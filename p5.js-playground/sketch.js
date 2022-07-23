let pg;
let creativity = 0;
let playfulAttitude = 0;
let flowState = false;
let difficulty = 0;
let attention = 0;
let curiosity = 0;
let practiceTime = 0;
let creativeCodingOutput = 0;
let coding = false;
let serendipity = 0;

let fontRegular, fontItalic, fontSemiBold, fontMono;
let textStartY = 170;
let barStartY = 157;
let barHeight = 15;
let language = 'ES';
let cv;
let barX = 340;

function setup() {
  cv = createCanvas(windowWidth, windowHeight);
  cv.parent('p5Container');

  fontRegular = loadFont('assets/ChakraPetch-Regular.ttf');
  fontItalic = loadFont('assets/ChakraPetch-Italic.ttf');
  fontSemiBold = loadFont('assets/ChakraPetch-SemiBold.ttf');
  fontMono = loadFont('assets/IBMPlexMono-Light.ttf');
}

function draw() {
  background(80);
  textFont(fontRegular);

  // textos
  fill(190, 255, 0);
  textSize(60);

  if (language == 'EN') {
    text('The Creative Coding Algorithm', 50, 80);
  }
  if (language == 'ES') {
    text('Algoritmo de la Programación Creativa', 50, 80);
  }

  textSize(20);
  fill(190, 255, 0);
  text('/', width - 150 + 30, 120);
  if (language == 'EN') {
    fill(140);
    text('EN', width - 150, 120);
    fill(190, 255, 0);
    text('ES', width - 150 + 45, 120);
  }
  if (language == 'ES') {
    fill(190, 255, 0);
    text('EN', width - 150, 120);
    fill(140);
    text('ES', width - 150 + 45, 120);
  }

  textSize(30);
  textFont(fontItalic);
  //text('Work in progress', 50, 110);

  textFont(fontRegular);
  textSize(20);
  //fill(0, 255, 255);
  fill(255);
  textAlign(RIGHT);

  if (language == 'EN') {
    text('playfulAttitude', 220, textStartY);
    text('flowState', 220, textStartY + 30);
    text('attention', 220, textStartY + 60);
    text('curiosity', 220, textStartY + 90);
    text('coding', 220, textStartY + 120);
    text('practiceTime', 220, textStartY + 150);
    text('serendipity', 220, textStartY + 180);
    text('creativity', 220, textStartY + 210);
    text('creativeCodingOutput', 220, textStartY + 280);

    textAlign(LEFT);
    textSize(15);
    textFont(fontSemiBold);
    text('controls', 50, textStartY + 340);
    textFont(fontRegular);
    text(
      '[K] and [W]: to increase and decrease playfulAttitude.',
      50,
      textStartY + 360
    );
    text('[P]: to active o deactive coding state.', 50, textStartY + 380);

    textFont(fontSemiBold);
    text('how it works?', 500, textStartY + 340);
    textFont(fontRegular);
    text(
      'i. The time you spend programming will be reflected in the results.',
      500,
      textStartY + 360
    );
    text(
      'ii. If you have a playful attitude, it is very likely that you will enter a state of flow.',
      500,
      textStartY + 380
    );
    text(
      'iii. If you are in a state of flow, your attention and curiosity will grow.',
      500,
      textStartY + 400
    );
    text(
      'iv. If you are programming and you enter a state of flow, it is likely that you will have a moment of serendipity..',
      500,
      textStartY + 420
    );
    text(
      'v. Your creativity will be fed by your spirit of play, your level of attention, the curiosity you have, and the experience you have gained with practice.',
      500,
      textStartY + 440
    );
    text(
      'vi. The results you achieve will depend on your creativity, practice time and whether inspiration finds you programming.',
      500,
      textStartY + 460
    );
  }

  if (language == 'ES') {
    text('actitudDeJuego', 220, textStartY);
    text('estadoDeFlujo', 220, textStartY + 30);
    text('atención', 220, textStartY + 60);
    text('curiosidad', 220, textStartY + 90);
    text('programando', 220, textStartY + 120);
    text('tiempoDePráctica', 220, textStartY + 150);
    text('serendípia', 220, textStartY + 180);
    text('creatividad', 220, textStartY + 210);
    //textFont(fontSemiBold);
    text('programaciónCreativa', 220, textStartY + 280);

    textAlign(LEFT);
    textSize(15);
    textFont(fontSemiBold);
    text('controles', 50, textStartY + 340);
    textFont(fontRegular);
    text(
      '[K] and [W]: aumentar o reducir la actitud de juego.',
      50,
      textStartY + 360
    );
    text(
      '[P]: activar o desactivar estado de la acción de programar.',
      50,
      textStartY + 380
    );
    textFont(fontSemiBold);
    text('funcionamiento', 500, textStartY + 340);
    textFont(fontRegular);
    text(
      'i. El tiempo que dediques a programar se verá reflejado en los resultados.',
      500,
      textStartY + 360
    );
    text(
      'ii. Si tienes una actitud de juego es muy probable que entres en estado de flujo.',
      500,
      textStartY + 380
    );
    text(
      'iii. Si estás en estado de flujo, tu atención y tu curiosidad crecerán.',
      500,
      textStartY + 400
    );
    text(
      'iv. Si estás programando y entras en estado de flujo es probable que tengas un momento de serendípia.',
      500,
      textStartY + 420
    );
    text(
      'v. Tu creatividad se alimentará de tu espiritu de juego, tu nivel de atención, la curiosidad que tengas, y la experiencia que hayas ganado con la práctica.',
      500,
      textStartY + 440
    );
    text(
      'vi. Los resultados que logres dependerán de tu creatividad, el tiempo de práctica y de que la inspiración te encuentre programando.',
      500,
      textStartY + 460
    );
  }

  textAlign(LEFT);
  // valores

  textFont(fontRegular);
  fill(200);
  textAlign(LEFT);
  text(playfulAttitude, 250, textStartY);
  text(flowState, 250, textStartY + 30);
  text(attention, 250, textStartY + 60);
  text(curiosity, 250, textStartY + 90);
  text(coding, 250, textStartY + 120);
  text(practiceTime, 250, textStartY + 150);
  text(serendipity, 250, textStartY + 180);
  text(creativity, 250, textStartY + 210);
  text(creativeCodingOutput, 250, textStartY + 280);

  // creativeCoding
  if (frameCount % 20 == 0) {
    creativeCoding();
  }

  // barras
  noStroke();
  // playfulAttitude
  fill(190, 255, 0);
  rect(barX, barStartY, playfulAttitude * 10, barHeight);
  // flowState
  if (flowState == true) {
    fill(190, 255, 0);
  } else {
    fill(50, 50, 50);
  }
  rect(barX, barStartY + 30, barHeight, barHeight);
  // attention
  fill(190, 255, 0);
  rect(barX, barStartY + 60, attention * 0.1, barHeight);
  // curiosity
  rect(barX, barStartY + 90, curiosity * 0.1, barHeight);
  // coding
  if (coding == true) {
    fill(190, 255, 0);
  } else {
    fill(50, 50, 50);
  }
  rect(barX, barStartY + 120, barHeight, barHeight);
  // practiceTime
  fill(190, 255, 0);
  rect(barX, barStartY + 150, practiceTime * 0.1, barHeight);
  // serendipity
  rect(barX, barStartY + 180, serendipity * 10, barHeight);
  // creativity
  rect(barX, barStartY + 210, creativity * 0.1, barHeight);
  // creativeCodingOutput
  //fill(255, 100, 0);
  fill(190, 255, 0);
  rect(barX, barStartY + 280, creativeCodingOutput * 0.01, barHeight);

  //image(pg, 0, 0);

  if (
    (mouseX >= width - 150 &&
      mouseX <= width - 150 + 35 &&
      mouseY >= 100 &&
      mouseY <= 100 + 20) ||
    (mouseX >= width - 150 + 40 &&
      mouseX <= width - 150 + 45 + 35 &&
      mouseY >= 100 &&
      mouseY <= 100 + 20)
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function creativeCoding() {
  creativeCodingOutput = 0;
  if (coding == true) {
    practiceTime++;
  }
  if (playfulAttitude > 0) {
    flowState = true;
  } else {
    flowState = false;
  }
  if (coding == true && flowState == true) {
    serendipity = int(random(10));
  }
  if (flowState == true) {
    attention++;
    curiosity += int(random(0, 2));
    creativity = int(
      playfulAttitude * (attention + curiosity) * (serendipity + 1) * 0.1
    );
  } else {
    attention = 0;
  }

  creativeCodingOutput = int(creativity * 0.1) * practiceTime * int(coding);
  return creativeCodingOutput;
}

function keyPressed() {
  if (key == 'f' || key == 'F') {
    if (flowState == true) {
      flowState = false;
    } else {
      flowState = true;
    }
  }
  if (key == 'w' || key == 'W') {
    playfulAttitude += 1;
  }
  if (key == 'q' || key == 'Q') {
    if (playfulAttitude > 0) {
      playfulAttitude -= 1;
    }
  }

  if (key == 'p' || key == 'P') {
    if (coding == true) {
      coding = false;
    } else {
      coding = true;
    }
  }
}

function preload() {
  loadFont('assets/ChakraPetch-Regular.ttf');
  loadFont('assets/ChakraPetch-Italic.ttf');
  loadFont('assets/ChakraPetch-SemiBold.ttf');
  loadFont('assets/IBMPlexMono-Light.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  pg.fill(255, 60, 30);

  if (mouseX >= width - 150 && mouseX <= width - 150 + 35) {
    if (mouseY >= 100 && mouseY <= 100 + 50) {
      language = 'EN';
    }
  }

  if (mouseX >= width - 150 + 40 && mouseX <= width - 150 + 45 + 35) {
    if (mouseY >= 100 && mouseY <= 100 + 50) {
      language = 'ES';
    }
  }

  //pg.ellipse(mouseX, mouseY, 5, 5);
  //pg.text(mouseX + '  ' + mouseY, mouseX, mouseY);
}
