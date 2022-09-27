let zivoty = 3;

class Player extends GameObject {
  constructor(x, y) {
    var size = 40;
    super(x * size, y * size, size);
    this.gravity = 5;
    this.jump = false;
    this.x_velkost = 0;
    this.y_velkost = 0;
    this.trenie = 0.75;

  }


  move(game) {
    var last_x = this.x;
    var last_y = this.y;


    this.y += this.gravity;

    this.x += this.x_velkost;
    this.x_velkost *= this.trenie;
    
    this.y += this.y_velkost;
    this.y_velkost *= this.trenie;

    if (game.left){  //left
      this.x_velkost = -5;
    }

    if (game.up && this.jump == false) {  //up
      this.y_velkost = -35
      var skok = document.getElementById("skok"); 
      skok.play();
      this.jump = true;
    }

    if(this.jump && !game.up && this.checkCollision(game.scene))
    {

      this.jump = false;

    }

    if (game.right){  //right
      this.x_velkost = 5;
    }
    
    if(game.down){
      this.y_velkost = 5;
    }
      

    if(this.x + 40 > game.canvas.width || this.x < 0){
      this.x = last_x;
    }
      
    if(this.y < 0 ){
      this.y = last_y;
    }


    if (this.checkCollision(game.scene) && this.checkCollisionX(game.scene)) {
      
      this.y = last_y;
    }

    if (this.checkCollision(game.scene) && this.checkCollisionY(game.scene)) {
      
      this.x = last_x;
    }

    if(this.y > game.canvas.height)
    {
      this.y = 550;
      this.x = 0;
      opened = false;
      let key = document.getElementById("key");
      kill.play();
      game.gameOver();
    }
    
  }
  

  draw(game) {
    let ctx = game.context;
    let postava = new Image();
    let timer = setInterval(postava.src, 1000);
    

    if(game.right){
      if(timer % 6 == 0)
        postava.src = "./textures/mrkey/run6.png";
      else if(timer % 5 == 0)
        postava.src = "./textures/mrkey/run5.png";
      else if(timer % 4 == 0)
        postava.src = "./textures/mrkey/run4.png";
      else if(timer % 3 == 0)
        postava.src = "./textures/mrkey/run3.png";
      else if(timer % 2 == 0)
        postava.src = "./textures/mrkey/run2.png";
      else if(timer % 1 == 0)
        postava.src = "./textures/mrkey/run1.png";
    }

    else if(game.left){
      if(timer % 6 == 0)
        postava.src = "./textures/mrkey/run6l.png";
      else if(timer % 5 == 0)
        postava.src = "./textures/mrkey/run5l.png";
      else if(timer % 4 == 0)
        postava.src = "./textures/mrkey/run4l.png";
      else if(timer % 3 == 0)
        postava.src = "./textures/mrkey/run3l.png";
      else if(timer % 2 == 0)
        postava.src = "./textures/mrkey/run2l.png";
      else if(timer % 1 == 0)
        postava.src = "./textures/mrkey/run1l.png";
    }

    else{
      postava.src = "./textures/mrkey/stand.png";
    }
    

    ctx.drawImage(postava,this.x,this.y, this.size, this.size);
    
  }
}