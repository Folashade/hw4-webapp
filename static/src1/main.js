// main.js
// Mini Game 1 "Pizza Game" Logic

//var canvas = document.getElementById("MiniGame1Canvas");
//var ctx = canvas.getContext("2d");
var img = new Image();   // Create new img element
img.src = 'img1/like.png'; // Set source path
var imgOffset = 15; // this will be 300

var initScreen = new Image();
initScreen.src = 'img1/profile.jpg'

/** clear main interval **/
// clearInterval(intervalID);

function gameOverState()
{
	ctx.drawImage(initScreen, 0, 0, canvas.width, canvas.height);
	postGameScores(getParam('user'), TOPPING_NUM);
	var id;
	for (var i = 0; i< users.length; i++){
		if (users[i].user == getParam('user')){
			id = i;
		}
	}
	updateUser(getParam('user'), id, users[id].turn, users[id].position, true, users[id].score);
}

function mainLoop()
{
	if (TOTAL_TIME >= -PERIOD)
	{
		console.log(TOTAL_TIME);
		ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		ctx.drawImage(initScreen, 0, 0, canvas.width, canvas.height);
		/** score **/
		ctx.fillStyle = '#dfdfdf';
		
		var stringToWrite = String(TOPPING_NUM);
		var metrics = ctx.measureText(stringToWrite);
		var stringToWriteWidth = metrics.width;		
	
		ctx.fillStyle = '#3B5998';
		ctx.font = 'italic 105px Georgia';
		ctx.fillText(stringToWrite, GAME_WIDTH - 140, 120, 125);
		ctx.font = 'italic 30px Georgia';
		ctx.fillText("likes", GAME_WIDTH - 140, 170);	
		for (var i = 0; i < TOPPING_ARRAY.length; i++)
		{
			ctx.drawImage(img, TOPPING_ARRAY[i].x - (imgOffset) , TOPPING_ARRAY[i].y - (imgOffset*2/3) );
		}
		
		ctx.font = 'italic 26px Georgia';
		var time = "Time left: " + String(Math.floor((TOTAL_TIME + 1000)/1000)); //for milliseconds
		var timemetrics = ctx.measureText(time);
		var timeWidth = timemetrics.width;
		ctx.fillText(time, GAME_WIDTH - timeWidth - 5, 30);
		ctx.fillStyle = 'red';
		TOTAL_TIME -= PERIOD;
	}
	
	else
	{
		clearInterval(intervalID);
		gameOverState();
	}
}

function startMiniGame1()
{
	initState();

	intervalID = setInterval(mainLoop, PERIOD);
	userIntervalID = setInterval(checkForKeys, 2);
}

function initState()
{
	ctx.drawImage(initScreen, 0, 0, canvas.width, canvas.height);
	ctx.font = 'italic 60px Georgia';
	var gameTitle = "FACEBOOK CHALLENGE";
	var gameTitleMetrics = ctx.measureText(gameTitle);
	var gameTitleWidth = gameTitleMetrics.width;
	ctx.fillStyle = 'white';
	ctx.fillRect(GAME_WIDTH/2 - (gameTitleWidth/2) - TEXT_PADDING, 2*GAME_HEIGHT/5 - 60, gameTitleWidth + 2*TEXT_PADDING, 70);
	ctx.fillStyle = '#3B5998';
	ctx.fillText(gameTitle, GAME_WIDTH/2 - (gameTitleWidth/2), 2*GAME_HEIGHT/5);
	//window.setTimeout(startGame, TIMEOUT);
	
	
	ctx.font = 'italic 20px Georgia';
	var welcomeMessage = "Click as fast as you can to get the most likes on your picture!";
	var welcomeMessageMetrics = ctx.measureText(welcomeMessage);
	var welcomeMessageWidth = welcomeMessageMetrics.width;
	ctx.fillStyle = 'white';
	ctx.fillRect(GAME_WIDTH/2 - (welcomeMessageWidth/2) - TEXT_PADDING, GAME_HEIGHT/2 - 20, welcomeMessageWidth + 2*TEXT_PADDING, 30);
	
	ctx.fillStyle = '#3B5998';
	ctx.fillText(welcomeMessage, GAME_WIDTH/2 - (welcomeMessageWidth/2), GAME_HEIGHT/2);
	window.setTimeout(startGame, TIMEOUT);
}

