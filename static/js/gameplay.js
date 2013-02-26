


canvas = document.getElementById("game-canvas");
ctx = canvas.getContext("2d");

var gameboard = new Image();

var canvasx =300;
var canvasy = 300;
var playerx;
var playery;

gameboard.src = "gameboard.png";
gameboard.onload = function() {
	//$("game-canvas").attr('width', aWidth);
	//$("game-canvas").attr('height', aHeight);
	ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
	drawPlayer(280,290);
}

var gamearray = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				 [0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0],
				 [0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0],
				 [0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0],
				 [0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0],
				 [0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0],
				 [0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0],
				 [0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
				 [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]

//canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('keydown', onKeyPress, false);


function onKeyPress(event){
	//left
	//alert("RAWRRRR");
	if (event.keyCode === 37){
		console.log("left!!");
		movePlayer('left');
	}
	//right
	else if(event.keyCode === 39){
		movePlayer('right');
	}
	//up
	else if(event.keyCode === 38){
		movePlayer('up');
	}
	//down
	else{
		movePlayer('down');
	}
}

function movePlayer(direction){
	console.log("moveplayer...");
	if (direction === 'left'){
		console.log("redrawing at left...");
		canvasx = canvasx-70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else if(direction === 'right'){
		console.log("redrawing at right...");
		canvasx = canvasx+70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else if (direction === 'up'){
		console.log("redrawing at left...");
		canvasy = canvasy-70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
	else{
		console.log("redrawing at left...");
		canvasy = canvasy+70;
		ctx.drawImage(gameboard, canvasx, canvasy , 600, 500, 0,0, 600,500);
		drawPlayer();
	}
}
function drawPlayer (){
	console.log("drawing player...");
	ctx.fillStyle="#FF0000";
	ctx.fillRect(280, 290,50,50);
	playerx = canvasx+ (280+25);
	playery = canvasy + (290+25);
}


