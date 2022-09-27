class Platforma extends GameObject {
  constructor(x, y) {
    var size = 25;
    super(x * size, y * size, size);
    this.img = document.getElementById("platforma");
  }
  move(game) {}
  draw(game) {
    game.context.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
}
