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

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
}

function draw() {
  background(100);
  textSize(20);

  image(pg, 0, 0);
  // textos
  fill(20);
  textAlign(RIGHT);
  text('creativity', 220, 40);
  text('playfulAttitude', 220, 70);
  text('flowState', 220, 100);
  text('attention', 220, 130);
  text('curiosity', 220, 160);
  text('coding', 220, 190);
  text('practiceTime', 220, 220);
  text('serendipity', 220, 250);
  text('creativeCodingOutput', 220, 310);

  // valores
  fill(255);
  textAlign(LEFT);
  text(creativity, 250, 40);
  text(playfulAttitude, 250, 70);
  text(flowState, 250, 100);
  text(attention, 250, 130);
  text(curiosity, 250, 160);
  text(coding, 250, 190);
  text(practiceTime, 250, 220);
  text(serendipity, 250, 250);
  text(creativeCodingOutput, 250, 310);

  // creativeCoding
  if (frameCount % 20 == 0) {
    creativeCoding();
  }

  //creativeCodingOutput = creativeCoding();

  //ellipse(random(200), random(200), 100, 100);
  //pg.fill(255, 255, 0);
  //pg.ellipse(random(200), random(200), 100, 100);
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
  if (flowState == true) {
    attention++;
    curiosity += int(random(0, 2));
    serendipity = int(random(10));
    creativity = playfulAttitude * (attention + curiosity) * serendipity;
  }

  //return creativity * practiceTime;
  creativeCodingOutput = creativity * practiceTime * int(coding);
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
  //pg.fill(255, 255, 0);
  //pg.ellipse(random(200), random(200), 100, 100);
  //flowState = true;
}
