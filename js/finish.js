class Finish extends GameObject {
  constructor(x, y) {
    var size = 50;
    super(x * size, y * size, size);
    this.physical = false;
    let pass = document.getElementById("pass");

  }

  move(game) {
    
    var obj = this.checkCollision(game.scene);
    if(obj instanceof Player && opened == true) {
      
      pass.play();
      opened = false;
      game.level++;

      let nadpis = document.getElementById("nadpis");
      if(game.level == 2)
      {
        game.scene = level2();
        nadpis.innerHTML = "Level 2";
      }
      if(game.level == 3)
      {
        game.scene = level3();
        nadpis.innerHTML = "Level 3";
      }

      if(game.level == 4)
      {
        nadpis.innerHTML = "Level 1";
        game.level = 1;
        game.win();
      }
      else{
        zvuk.src = eval("\"./music/level"+game.level+".mp3\";");
      }

    }
  }

  draw(game) {
    var ctx = game.context;
    let doors = new Image();
    if(opened == false)
      doors.src = "./textures/door.png"
    else if(opened == true)
      doors.src = "./textures/dooro.png"
    ctx.drawImage(doors,this.x,this.y, this.size, this.size);
  }
}
