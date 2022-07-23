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

let font;
let textStartY = 130;
let barStartY = 117;
let barHeight = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);

  font = loadFont('assets/ChakraPetch-Regular.ttf');
}

function draw() {
  background(80);
  textFont(font);
  image(pg, 0, 0);
  // textos

  fill(190, 255, 0);
  textSize(60);
  text('The Creative Coding Algorithm', 50, 80);

  textSize(20);
  fill(0, 255, 255);
  textAlign(RIGHT);

  text('playfulAttitude', 220, textStartY);
  text('flowState', 220, textStartY + 30);
  text('attention', 220, textStartY + 60);
  text('curiosity', 220, textStartY + 90);
  text('coding', 220, textStartY + 120);
  text('practiceTime', 220, textStartY + 150);
  text('serendipity', 220, textStartY + 180);
  text('creativity', 220, textStartY + 210);
  text('creativeCodingOutput', 220, textStartY + 280);

  // valores
  fill(255);
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
  fill(0, 255, 255);
  rect(360, barStartY, playfulAttitude * 10, barHeight);
  // flowState
  if (flowState == true) {
    fill(0, 255, 255);
  } else {
    fill(50, 50, 50);
  }
  rect(360, barStartY + 30, barHeight, barHeight);
  // attention
  fill(0, 255, 255);
  rect(360, barStartY + 60, attention * 0.1, barHeight);
  // curiosity
  rect(360, barStartY + 90, curiosity * 0.1, barHeight);
  // coding
  if (coding == true) {
    fill(0, 255, 255);
  } else {
    fill(50, 50, 50);
  }
  rect(360, barStartY + 120, barHeight, barHeight);
  // practiceTime
  fill(0, 255, 255);
  rect(360, barStartY + 150, practiceTime * 0.1, barHeight);
  // serendipity
  rect(360, barStartY + 180, serendipity * 10, barHeight);
  // creativity
  rect(360, barStartY + 210, creativity * 0.1, barHeight);
  // creativeCodingOutput
  rect(360, barStartY + 280, creativeCodingOutput * 0.001, barHeight);
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
    creativity = playfulAttitude * (attention + curiosity) * (serendipity + 1);
  } else {
    attention = 0;
  }

  creativeCodingOutput = int(creativity * 0.1) * practiceTime * int(coding);
  return creativeCodingOutput;
}

function keyPressed() {
  if (key == 'f') {
    if (flowState == true) {
      flowState = false;
    } else {
      flowState = true;
    }
  }
  if (key == 'w') {
    playfulAttitude += 1;
  }
  if (key == 'q') {
    if (playfulAttitude > 0) {
      playfulAttitude -= 1;
    }
  }

  if (key == 'p') {
    if (coding == true) {
      coding = false;
    } else {
      coding = true;
    }
  }
}

function preload() {
  loadFont('assets/ChakraPetch-Regular.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
