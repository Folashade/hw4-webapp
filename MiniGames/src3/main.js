// main.js
// Mini Game 2 "Shape Clicker" Logic

var canvas = document.getElementById("MiniGame3Canvas");
var ctx = canvas.getContext("2d");

function drawSquareBackground()
{
	ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function mainLoop()
{
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctx.font="30px Arial";
	var stringToWrite = String(SCORE);
	var metrics = ctx.measureText(stringToWrite);
	var stringToWriteWidth = metrics.width;
	ctx.fillText(stringToWrite, GAME_WIDTH/2 - stringToWriteWidth/2, 30);
	drawSquareBackground();
	ctx.fillStyle = 'red';
	for (var i = 0; i < CARD_ARRAY.length; i++)
	{
		if (CARD_ARRAY[i].show === true && CARD_ARRAY[i].clickable === true)
		{
			NUM_CHOSEN++;
			ctx.drawImage(CARD_ARRAY[i].img, CARD_ARRAY[i].x, CARD_ARRAY[i].y, CARD_WIDTH, CARD_HEIGHT);
			if (NUM_CHOSEN === 2)
			{
				PAIR_CHECK;
			}
		}
		
		else
		{
			ctx.fillRect(CARD_ARRAY[i].x, CARD_ARRAY[i].y, CARD_WIDTH, CARD_HEIGHT);
		}
	}
}

function startGame()
{
	// call init screen?
	canvas.addEventListener('mousedown', onMouseDown, false);
	loadImages();
	MAKE_PAIRS();
	RANDOMIZE_PAIRS();
	SET_CARD_PARAMS();
	intervalID = setInterval(mainLoop, PERIOD);
}

startGame();