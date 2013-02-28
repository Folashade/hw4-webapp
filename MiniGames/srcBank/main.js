// main.js
// Bank

var canvas = document.getElementById("BankCanvas");
var ctx = canvas.getContext("2d");

function drawSquareBackground()
{
	ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function mainLoop()
{
	ctx.fillRect(
}

function startGame()
{
	// call init screen?
	intervalID = setInterval(mainLoop, PERIOD);
	userIntervalID = setInterval(checkForKeys, 2);
}

startGame();