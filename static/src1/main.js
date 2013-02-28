// main.js
// Mini Game 1 "Pizza Game" Logic

var canvas = document.getElementById("MiniGame1Canvas");
var ctx = canvas.getContext("2d");
var img = new Image();   // Create new img element
img.src = 'img1/like.png'; // Set source path
var imgOffset = 15; // this will be 300

/** clear main interval **/
// clearInterval(intervalID);

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
    // ctx.fillRect((GAME_WIDTH/2) - (PIZZA_WIDTH/2), (GAME_HEIGHT/2) - (PIZZA_HEIGHT/2), PIZZA_WIDTH, PIZZA_HEIGHT);

}

function mainLoop()
{
	// drawCircleBackground();
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	var stringToWrite = String(TOPPING_NUM);
	var metrics = ctx.measureText(stringToWrite);
	var stringToWriteWidth = metrics.width;
	
	/** score **/
	ctx.fillStyle = '#dfdfdf';
	
	
	drawSquareBackground();

	for (var i = 0; i < TOPPING_ARRAY.length; i++)
	{
		// ctx.fillRect(TOPPING_ARRAY[i].x, TOPPING_ARRAY[i].y, TOPPING_SIZE, TOPPING_SIZE);
		ctx.fillStyle = '#3B5998';
		ctx.drawImage(img,TOPPING_ARRAY[i].x - (imgOffset) , TOPPING_ARRAY[i].y - (imgOffset*2/3) );
		ctx.font = 'italic 105px Georgia';
		ctx.fillText(stringToWrite, GAME_WIDTH - 140, 120, 125);
		ctx.font = 'italic 30px Georgia';
		ctx.fillText("likes", GAME_WIDTH - 140, 170);	
	}
}

function startGame()
{
	// call init screen?
	intervalID = setInterval(mainLoop, PERIOD);
	userIntervalID = setInterval(checkForKeys, 2);
}

// startGame();