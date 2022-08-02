
let v1 = []; 

function setup() {
  cv = createCanvas(windowWidth, windowHeight);

  v1[0] = "verso 1";

}

function draw() {
  background(80);
  fill(255);
  textSize(20);
  text(v1[0], 100, 100)
}