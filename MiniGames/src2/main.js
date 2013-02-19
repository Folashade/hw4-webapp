// main.js
// Mini Game 2 "Shape Clicker" Logic

var canvas = document.getElementById("MiniGame2Canvas");
var ctx = canvas.getContext("2d");

function drawSquareBackground()
{
	ctx.fillStyle = 'black';
    ctx.fillRect((GAME_WIDTH/2) - (BOARD_WIDTH/2), (GAME_HEIGHT/2) - (BOARD_HEIGHT/2), BOARD_WIDTH, BOARD_HEIGHT);
}

function mainLoop()
{
	// drawCircleBackground();
	
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctx.font="30px Arial";
	var stringToWrite = String(SHAPE_NUM);
	var metrics = ctx.measureText(stringToWrite);
	var stringToWriteWidth = metrics.width;
	ctx.fillText(stringToWrite, GAME_WIDTH/2 - stringToWriteWidth/2, 30);
	drawSquareBackground();
	ctx.fillStyle = 'red';
	for (var i = 0; i < SHAPE_ARRAY.length; i++)
	{
		ctx.fillRect(SHAPE_ARRAY[i].x, SHAPE_ARRAY[i].y, SHAPE_WIDTH, SHAPE_HEIGHT);
	}
}

function startGame()
{
	// call init screen?
	var initShape;
	initShape = new Shape();
	SHAPE_ARRAY.push(initShape);
	canvas.addEventListener('mousedown', onClick, false);
	intervalID = setInterval(mainLoop, PERIOD);
}

startGame();