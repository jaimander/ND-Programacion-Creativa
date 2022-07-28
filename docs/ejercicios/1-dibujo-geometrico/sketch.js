
function setup() {
  cv = createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(80);
  noStroke();
  fill(random(255));
  ellipse(200, 200, 100, 100);
}