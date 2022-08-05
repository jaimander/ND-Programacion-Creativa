class AreaInteractiva {
  constructor(x, y, ancho, alto, audio) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.audio = audio;
    this.playable = false;
    this.presionado = false;
  }

  actualizar() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.ancho &&
      mouseY > this.y &&
      mouseY < this.y + this.alto
    ) {
      this.playable = true;
      console.log('playable = true');
    } else {
      this.playable = false;
      console.log('playable = false');
    }
  }

  mostrar() {
    if (this.presionado == true) {
      this.col = color(255);
    } else {
      this.col = color(255, 0, 0);
    }

    stroke(this.col);
    noFill();
    rect(this.x, this.y, this.ancho, this.alto);
  }

  pressed() {
    if (this.playable == true) {
      /*
      fill(random(255));
      ellipse(
        this.x + this.ancho / 2,
        this.y + this.alto / 2,
        this.ancho / 2,
        this.alto / 2
      );
      */
      console.log('hace clic en el area y se reproduce el sonido');
      console.log('presionado es true');
      this.presionado = true;
    } else {
    }
    //this.presionado = false;
  }

  released() {
    this.presionado = false;
  }
}
