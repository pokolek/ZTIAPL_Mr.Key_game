class GameObject {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.physical = true;
    
  }
  
  move(game) {}

  checkCollision(scene) {

    for (var i in scene) {
      var obj = scene[i];

      if(obj == "Water") continue;
      if (obj == this || !obj.physical) continue;
      var test =
        this.x > obj.x + obj.size ||
        this.x + this.size - 3 < obj.x ||
        this.y > obj.y + obj.size ||
        this.y + this.size - 3 < obj.y;

      if (!test) {
        return obj;
      }
    }
    return false;
  }

  checkCollisionX(scene) {
    for (var i in scene) {
      var obj = scene[i];
      if (obj == this || !obj.physical) continue;
      var test =
        this.x > obj.x + obj.size ||
        this.x + this.size  < obj.x;

      if (!test) {
        return obj;
      }
    }
    return false;
  }

  checkCollisionY(scene) {
    for (var i in scene) {
      var obj = scene[i];
      if (obj == this || !obj.physical) continue;
      var test =
        
        this.y > obj.y + obj.size ||
        this.y + this.size  < obj.y;
      if (!test) {
        return obj;
      }
    }
    return false;
  }

  draw(game) {
    var ctx = game.context;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, this.size, this.size);
    ctx.restore();
  }
}