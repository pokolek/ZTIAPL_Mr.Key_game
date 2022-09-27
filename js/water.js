class Water extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.img = document.getElementById("water");
    this.physical = false;
    let kill = document.getElementById("kill");
  }

  move(game) {}

  draw(game) {
    game.context.drawImage(this.img, this.x, this.y, this.size, this.size);
  }
}