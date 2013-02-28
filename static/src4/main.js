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

function gameOverState()
{
	ctx.drawImage(initScreen, 0, 0, canvas.width, canvas.height);
}

function mainLoop()
{
	if (TOTAL_TIME >= -PERIOD)
	{
		if ((SCORE >= NEW_LEVEL_SCORE) && (ARROW_PERIOD - 50 >= 100))
		{
			NEW_LEVEL_SCORE += 200;
			ARROW_PERIOD -= 50;
		}
		
		ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		// ctx.fillText(stringToWrite, GAME_WIDTH-stringToWriteWidth-10, 30);
		drawSlideBackground();
		
		/** score **/
		
		ctx.font = 'italic 26px Calibri';
		ctx.fillStyle = '#fd0afc';
		var time = "Time left: " + String(Math.floor((TOTAL_TIME + 1000)/1000)); //for milliseconds
		var timemetrics = ctx.measureText(time);
		var timeWidth = timemetrics.width;
		ctx.fillText(time, GAME_WIDTH - timeWidth - 5, 30);
		
		ctx.font = '105px Calibri';
		var stringToWrite = String(SCORE);
		var metrics = ctx.measureText(stringToWrite);
		var stringToWriteWidth = metrics.width;
		ctx.fillStyle = '#9B30FF';
		ctx.fillText(stringToWrite, GAME_WIDTH - stringToWriteWidth - 5, 120);
		
		ctx.fillStyle = '#FF00FF';
		ctx.font = '30px Calibri';
		
		var feedback = FEEDBACK;
		var feedbackmetrics = ctx.measureText(feedback);
		var feedbackWidth = feedbackmetrics.width;
		ctx.fillText(FEEDBACK, GAME_WIDTH - feedbackWidth - 5, 170);
		
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
	loadImages();
	canvas.addEventListener('keydown', onKeyDown, false);
	canvas.setAttribute('tabindex','0');
    canvas.focus();
	intervalID = setInterval(mainLoop, PERIOD);
	arrowIntervalID = setInterval(addArrows, ARROW_PERIOD);
}

function initState()
{
	ctx.font = 'bold 60px Calibri';
	var gameTitle = "MICROSOFT CHALLENGE";
	var gameTitleMetrics = ctx.measureText(gameTitle);
	var gameTitleWidth = gameTitleMetrics.width;
	ctx.fillStyle = '#fd0afc';
	ctx.fillText(gameTitle, GAME_WIDTH/2 - (gameTitleWidth/2), 2*GAME_HEIGHT/5);
	
	ctx.font = 'bold 20px Calibri';
	var welcomeMessage = "Press the correct arrow keys when they match up to the arrows on top!";
	var welcomeMessageMetrics = ctx.measureText(welcomeMessage);
	var welcomeMessageWidth = welcomeMessageMetrics.width;
	
	ctx.fillText(welcomeMessage, GAME_WIDTH/2 - (welcomeMessageWidth/2), GAME_HEIGHT/2);
	window.setTimeout(startGame, TIMEOUT);
}

window.onload = initState;