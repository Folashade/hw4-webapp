// main.js
// Mini Game 4 "DDR" Logic

// var b1 = document.getElementById("MiniGame1Canvas")
// var b2 = document.getElementById("MiniGame2Canvas")
// 
// if (b1 != null){
// 	b1.style.display = "none";
// }
// if (b2 != null){
// 	b2.style.display = "none";
// }

var canvas = document.getElementById("MiniGame4Canvas");
var ctx = canvas.getContext("2d");

function drawSlideBackground()
{
	ctx.fillStyle = 'black';
    // ctx.fillRect(SLIDE_X, 0, SLIDE_WIDTH, SLIDE_HEIGHT);
	ctx.fillStyle = 'red';
	ctx.moveTo(SLIDE_X, ARROW_SIZE + 2);
	ctx.lineTo(SLIDE_WIDTH, ARROW_SIZE + 2);
	ctx.stroke();
	ctx.drawImage(arrowLeftImgOutline, ARROW_LEFT_X, 0, ARROW_SIZE, ARROW_SIZE);
	ctx.drawImage(arrowDownImgOutline, ARROW_DOWN_X, 0, ARROW_SIZE, ARROW_SIZE);
	ctx.drawImage(arrowUpImgOutline, ARROW_UP_X, 0, ARROW_SIZE, ARROW_SIZE);
	ctx.drawImage(arrowRightImgOutline, ARROW_RIGHT_X, 0, ARROW_SIZE, ARROW_SIZE);
}

function mainLoop()
{
	if ((SCORE >= NEW_LEVEL_SCORE) && (ARROW_PERIOD - 50 >= 100))
	{
		NEW_LEVEL_SCORE += 200;
		ARROW_PERIOD -= 50;
	}
	
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctx.font="30px Arial";
	var stringToWrite = String(SCORE);
	var metrics = ctx.measureText(stringToWrite);
	var stringToWriteWidth = metrics.width;
	// ctx.fillText(stringToWrite, GAME_WIDTH-stringToWriteWidth-10, 30);
	drawSlideBackground();
	
	/** score **/
	ctx.font = 'italic 105px Georgia';
	ctx.fillStyle = '#9B30FF';
	ctx.fillText(stringToWrite, GAME_WIDTH - 160, 120, 120);
	
	ctx.fillStyle = '#FF00FF';
	ctx.font = 'italic 30px Georgia';
	ctx.fillText(FEEDBACK, GAME_WIDTH - 180, 170);
	
	ctx.drawImage(logo, 50, 50, ARROW_SIZE, ARROW_SIZE);
	
	
	
	while ((ARROW_ARRAY.length > 0) && (ARROW_ARRAY[0].y + ARROW_SIZE < 0))
	{
		ARROW_ARRAY.splice(0, 1);
	}
	
	for (var i = 0; i < ARROW_ARRAY.length; i++)
	{
		ARROW_ARRAY[i].y--;
		ctx.drawImage(ARROW_ARRAY[i].img, ARROW_ARRAY[i].x, ARROW_ARRAY[i].y, ARROW_SIZE, ARROW_SIZE);
	}
}

function startGame()
{
	// call init screen?
	loadImages();
	canvas.addEventListener('keydown', onKeyDown, false);
	canvas.setAttribute('tabindex','0');
    canvas.focus();
	intervalID = setInterval(mainLoop, PERIOD);
	arrowIntervalID = setInterval(addArrows, ARROW_PERIOD);
}

startGame();