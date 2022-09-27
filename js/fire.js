class Fire extends GameObject {
  constructor(x, y) {
    var size = 25;
    super(x * size, y * size, size);
    this.physical = false;
    let kill = document.getElementById("kill");
    
  }

  move(game) {
    let life1 = document.getElementById("zivot1");
    let life2 = document.getElementById("zivot2");
    let life3 = document.getElementById("zivot3");
    var obj = this.checkCollision(game.scene);
    if(obj instanceof Player && zivoty > 0) {
      
      kill.play();
      game.scene = eval("level"+game.level+"();");
      zivoty --;
    }
    if(zivoty == 3);
    if(zivoty == 2){
      life3.style.display = "none";
    }
    if(zivoty == 1){
      life2.style.display = "none";
    }
    if(zivoty == 0){
      life3.style.display = "inline-block";
      life2.style.display = "inline-block";
      game.gameOver();
    }
  }

  draw(game) {
    var ctx = game.context;
    let ohen = new Image();
    ohen.src = "./textures/fire.png";
    game.context.drawImage(ohen, this.x, this.y, this.size, this.size);
  }
}