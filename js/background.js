class Background extends GameObject {
  constructor() {
    super(0, 0, 0);
    this.physical = false;
  }

  move(game) {}

  draw(game) {
  	let pozadie = new Image();
    if(game.level == 1)
      pozadie.src = "./backgrounds/level1.png";
    if(game.level == 2)
      pozadie.src = "./backgrounds/level2.jpg";
    if(game.level == 3)
      pozadie.src = "./backgrounds/level3.jpg";
    game.context.drawImage(pozadie, 0, 0, game.canvas.width, game.canvas.height);
  }
}