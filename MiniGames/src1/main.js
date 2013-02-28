// main.js
// Mini Game 1 "Pizza Game" Logic

var canvas = document.getElementById("MiniGame1Canvas");
var ctx = canvas.getContext("2d");
var img = new Image();   // Create new img element
img.src = 'img1/like.png'; // Set source path
var imgOffset = 15; // this will be 300

function drawCircleBackground()
{
	ctx.beginPath();
	ctx.arc(GAME_WIDTH/2, GAME_HEIGHT/2, GAME_HEIGHT/2, 0, 2*Math.PI, false);
	ctx.fillStyle = 'green';
	ctx.fill();
	ctx.stroke();
}

function drawSquareBackground()
{
	ctx.fillStyle = 'green';
    ctx.fillRect((GAME_WIDTH/2) - (PIZZA_WIDTH/2), (GAME_HEIGHT/2) - (PIZZA_HEIGHT/2), PIZZA_WIDTH, PIZZA_HEIGHT);

}

function gameOverState()
{
	ctx.drawImage(initScreen, 0, 0, canvas.width, canvas.height);
}

function mainLoop()
{
	// drawCircleBackground();
	if (TOTAL_TIME >= -PERIOD)
	{
		console.log(TOTAL_TIME);
		ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		ctx.font="30px Arial";
		var stringToWrite = String(TOPPING_NUM);
		var metrics = ctx.measureText(stringToWrite);
		var stringToWriteWidth = metrics.width;
		ctx.fillText(stringToWrite, GAME_WIDTH/2 - stringToWriteWidth/2, 30);
		
		var time = String(Math.floor((TOTAL_TIME + 1000)/1000)); //for milliseconds
		var timemetrics = ctx.measureText(time);
		var timeWidth = timemetrics.width;
		ctx.fillText(time, GAME_WIDTH - timeWidth - 5, 30);
		drawSquareBackground();
		ctx.fillStyle = 'red';
		for (var i = 0; i < TOPPING_ARRAY.length; i++)
		{
			ctx.fillRect(TOPPING_ARRAY[i].x, TOPPING_ARRAY[i].y, TOPPING_SIZE, TOPPING_SIZE);
		}
		
		TOTAL_TIME -= PERIOD;
	}
	
	else
	{
		clearInterval(intervalID);
		gameOverState();
	}
}

function startGame()
{
	// call init screen?
	intervalID = setInterval(mainLoop, PERIOD);
	userIntervalID = setInterval(checkForKeys, 2);
}

function initState()
{
	initScreen = new Image();
	initScreen.src = INIT_SCREEN_IMAGE;
	ctx.drawImage(initScreen, 0, 0, canvas.width, canvas.height);
	window.setTimeout(startGame, TIMEOUT);
}

window.onload = initState;
