let game;

function nova() {
	let zvuk = document.getElementById("zvuk");
	let click = document.getElementById("click");
	zvuk.src = "./music/level1.mp3";
	game = new Game("canvas");
	document.getElementById("menu").style.zIndex = -10;

	document.getElementById("gameBar").style.display = "block";
	click.play();
	window.addEventListener("keydown", function (event){game.onkeydown(event);});
	window.addEventListener("keyup", function (event){game.onkeydown(event);});

	game.loop();
};

function credits(){
	let x = document.getElementById("credits");
	let menu = document.getElementById("menu");
	let click = document.getElementById("click");
	let bar = document.getElementById("gameBar");
	bar.style.display = "none";
	x.style.display = "block";
	menu.style.display = "none";
	click.play();
}

function hlavne(){
	let x = document.getElementById("credits");
	let menu = document.getElementById("menu");
	let controls = document.getElementById("controlsScreen");
	let gameOver = document.getElementById("gameOver");
	let click = document.getElementById("click");
	x.style.display = "none";
	menu.style.display = "block";
	controls.style.display = "none";
	gameOver.style.display = "none";
	click.play();
}


function gotomenu(){
	let gameOver = document.getElementById("gameOver");
	let win = document.getElementById("winScreen");
	let menu = document.getElementById("menu");
	let click = document.getElementById("click");
	let bar = document.getElementById("gameBar");
	bar.style.display = "none";

	let nadpis = document.getElementById("nadpis");
	nadpis.innerHTML = "Level 1";
	document.getElementById("menu").style.zIndex = +10;
	menu.style.display = "block";
	gameOver.style.display = "none";
	win.style.display = "none";
	zvuk.src = "./music/menu.mp3";
	click.play();

}

function controls(){
	let x = document.getElementById("credits");
	let menu = document.getElementById("menu");
	let click = document.getElementById("click");
	let controls = document.getElementById("controlsScreen");
	let bar = document.getElementById("gameBar");
	bar.style.display = "none";
	x.style.display = "none";
	menu.style.display = "none";
	controls.style.display = "block";
	click.play();

}

function sound(){
	let zvuk = document.getElementById("zvuk");
	let skok = document.getElementById("skok");
	let click = document.getElementById("click");
	let key = document.getElementById("key");
	let pass = document.getElementById("pass");
	let kill = document.getElementById("kill");
	let imgSound = document.getElementById("imgSound");

	if(zvuk.muted == true)
	{
		zvuk.muted = false;
		skok.muted = false;
		click.muted = false;
		key.muted = false;
		pass.muted = false;
		kill.muted = false;
		imgSound.src = "./textures/soundon.png";
	}
	else
	{
		imgSound.src = "./textures/soundoff.png";
		zvuk.muted = true;
		skok.muted = true;
		click.muted = true;
		key.muted = true;
		pass.muted = true;
		kill.muted = true;
	}
	
}
