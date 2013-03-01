/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/

// main.js
// Mini Game 3 "FLIP SHAPES" Logic

var initScreen3 = new Image();
initScreen3.src = 'img3/background.png'


function drawSquareBackground()
{
	ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}



function drawCards()
{
	for (var i = 0; i < CARD_ARRAY.length; i++)
	{
		if (CARD_ARRAY[i].isClicked)
		{
			ctx.drawImage(CARD_ARRAY[i].img, CARD_ARRAY[i].x, CARD_ARRAY[i].y, CARD_WIDTH, CARD_HEIGHT);		
		}
		
		else if ((i !== CHOSEN1INDEX) && (i !== CHOSEN2INDEX))
		{
			ctx.drawImage(flip_card, CARD_ARRAY[i].x, CARD_ARRAY[i].y, CARD_WIDTH, CARD_HEIGHT);		
		}
	}
}

function mainLoop3()
{
	if (TOTAL_TIME >= -PERIOD)
	{
		ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		ctx.drawImage(initScreen3, 0, 0, canvas.width, canvas.height);
		drawSquareBackground();
		ctx.fillStyle = 'red';
		drawCards();
		
		ctx.font="30px Arial";
		ctx.fillStyle = '#cd2626';
		var stringToWrite = "Score: " + String(SCORE);
		var metrics = ctx.measureText(stringToWrite);
		var stringToWriteWidth = metrics.width;
		ctx.fillText(stringToWrite, GAME_WIDTH - stringToWriteWidth - 3*TEXT_PADDING, 50);
		var time = "Time left: " + String(Math.floor((TOTAL_TIME + 1000)/1000)); //for milliseconds
		var timemetrics = ctx.measureText(time);
		var timeWidth = timemetrics.width;
		ctx.fillText(time, 3*TEXT_PADDING, 50);
		
		TOTAL_TIME -= PERIOD;
	}
	
	else
	{
		clearInterval(intervalID);
		gameOverState();
	}
}


function startMiniGame3()
{
	TOTAL_TIME = 14000;
	CARD_NUM = 0;
	SCORE  = 0;
	NUM_CHOSEN = 0;
	canvas.addEventListener('mousedown', onMouseDown, false);
	loadImages3();
	MAKE_CARDS();
	RANDOMIZE_CARDS();
	SET_CARD_PARAMS();
	intervalID = setInterval(mainLoop3, PERIOD);
}


function initState3()
{
	ctx.drawImage(initScreen3, 0, 0, canvas.width, canvas.height);
	ctx.font = 'bold 60px Calibri';
	var gameTitle = "GOOGLE CHALLENGE";
	var gameTitleMetrics = ctx.measureText(gameTitle);
	var gameTitleWidth = gameTitleMetrics.width;
	ctx.fillStyle = '#cd2626';
	ctx.fillText(gameTitle, GAME_WIDTH/2 - (gameTitleWidth/2), 2*GAME_HEIGHT/5);
	
	ctx.font = 'bold 20px Calibri';
	var welcomeMessage = "Match as many Google Doodles as you can!";
	var welcomeMessageMetrics = ctx.measureText(welcomeMessage);
	var welcomeMessageWidth = welcomeMessageMetrics.width;
	
	ctx.fillText(welcomeMessage, GAME_WIDTH/2 - (welcomeMessageWidth/2), GAME_HEIGHT/2);
	window.setTimeout(startMiniGame3, TIMEOUT);
}
