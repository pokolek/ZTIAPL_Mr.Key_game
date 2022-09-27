var opened = false;

class Key extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.physical = false;
    let key = document.getElementById("key");
  }

  move(game) {
    var obj = this.checkCollision(game.scene);
    if(obj instanceof Player) {
      key.play();
      opened = true;
    }
  }

  draw(game) {
    var ctx = game.context;
    
    if(opened == true);
    else
    {
      let kluc = new Image();
      kluc.src = "./textures/key.png";
      ctx.drawImage(kluc,this.x,this.y, 20, 30);
    }
  }
}