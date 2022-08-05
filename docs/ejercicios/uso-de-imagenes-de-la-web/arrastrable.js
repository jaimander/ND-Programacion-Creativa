class Cosa {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  mover() {
    this.x++;
  }

  dibujar() {
    noStroke();
    fill(200, 0, 100, 50);
    ellipse(this.x, this.y, 20, 20);
  }
}
