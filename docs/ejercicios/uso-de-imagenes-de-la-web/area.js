class AreaInteractiva {
  constructor(x, y, ancho, alto, audio, imgContorno) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.audio = audio;
    this.playable = false;
    this.presionado = false;
    this.imgContorno = imgContorno;
  }

  actualizar() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y + this.alto
    ) {
      this.playable = true;
    } else {
      this.playable = false;
    }
  }

  mostrar() {
    if (this.presionado == true) {
      this.col = color(255);
    } else {
      this.col = color(200, 0, 100);
    }

    noFill();
    stroke(255, 0, 0);
    //rect(this.x, this.y, this.ancho, this.alto);

    if (this.audio.isPlaying() == true) {
      image(this.imgContorno, 0, 0);

      stroke(this.col);
      noFill();
      rect(this.x, this.y - 30, this.ancho, 10);

      noStroke();
      fill(255);
      rect(
        this.x,
        this.y - 30,
        map(this.audio.currentTime(), 0, this.audio.duration(), 0, this.ancho),
        10
      );
    }
  }

  pressed() {
    if (this.playable == true) {
      this.presionado = true;
      if (this.audio.isPlaying() == false) {
        this.audio.play();
      }
    } else {
    }
  }

  released() {
    this.presionado = false;
  }
}
