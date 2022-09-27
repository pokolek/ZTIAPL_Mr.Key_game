class Game {
  constructor(canvasName) {
    this.canvas = document.getElementById(canvasName);
    this.context = canvas.getContext("2d");
    this.level = 1;
    this.scene = level1();
    this.left;
    this.right;
    this.up;
    this.down;
  }

  onkeydown(event) {
    let keyState = (event.type == "keydown")?true:false;
    
    switch(event.keyCode) {

      case 37:// left key
        this.left = keyState;
      break;
      case 38:// up key
        this.up = keyState;
      break;
      case 39:// right key
        this.right = keyState;
      break;
      case 40:// right key
        this.down = keyState;
      break;

    }

  }

  gameOver(){
    let go = document.getElementById("gameOver");
    let bar = document.getElementById("gameBar");
    zivoty = 3;
    let life2 = document.getElementById("zivot2");
    let life3 = document.getElementById("zivot3");
    life3.style.display = "inline-block";
    life2.style.display = "inline-block";

    let nadpis = document.getElementById("nadpis");
    nadpis.innerHTML = "Level 1";

    go.style.display = "block";
    bar.style.display = "none";
    zvuk.src = "./music/gameover.mp3";
  }

  win(){
    let win = document.getElementById("winScreen");
    let bar = document.getElementById("gameBar");

    let nadpis = document.getElementById("nadpis");
    nadpis.innerHTML = "Level 1";

    win.style.display = "block";
    bar.style.display = "none";
    zvuk.src = "./music/win.mp3";
  }


  loop() {
    for (var i in this.scene) {
      this.scene[i].move(this);
    }

    for (i in this.scene) {
      this.scene[i].draw(this);
    }
    
    requestAnimationFrame( this.loop.bind(this) );
  }
}
