/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/
// main.js
// Mini Game 1 "Pizza Game" Logic

var img = new Image();   // Create new img element
img.src = 'img1/like.png'; // Set source path
var imgOffset = 15; // this will be 300

var initScreen1 = new Image();
initScreen1.src = 'img1/profile.jpg'

function gameOverState()
{
	console.log(gamestats);
	if (gamestats %5 == 0){
		ctx.drawImage(initScreen1, 0, 0, canvas.width, canvas.height);
		postGameScores(getParam('user'), TOPPING_NUM);
	}
	if (gamestats %5 ==1){
		ctx.drawImage(initScreen2, 0, 0, canvas.width, canvas.height);
		postGameScores(getParam('user'), SHAPE_NUM);
	}
	if (gamestats %5 == 2){
		ctx.drawImage(initScreen3, 0, 0, canvas.width, canvas.height);
		postGameScores(getParam('user'), SCORE);
	}
	if (gamestats %5 == 3){
		ctx.drawImage(initScreen4, 0, 0, canvas.width, canvas.height);
		postGameScores(getParam('user'), SCORE);
	}
	if (gamestats %5== 4){
		ctx.drawImage(bankImg, 0, 0, GAME_WIDTH, GAME_HEIGHT);
		postGameScores(getParam('user'), 0);
	}
	setTimeout(function(){for (var i = 0; i< users.length; i++){
		updateUser(users[i].user, i, users[i].turn, users[i].position, true, users[i].score);

	}}, 4000);
}

function mainLoop1()
{
	if (TOTAL_TIME >= -PERIOD)
	{
		ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		ctx.drawImage(initScreen1, 0, 0, canvas.width, canvas.height);
		/** score **/
		ctx.fillStyle = '#dfdfdf';	
	
		ctx.fillStyle = '#3B5998';
		ctx.font = 'italic 105px Georgia';
		var stringToWrite = String(TOPPING_NUM);
		var metrics = ctx.measureText(stringToWrite);
		var stringToWriteWidth = metrics.width;	
		ctx.fillText(stringToWrite, GAME_WIDTH - stringToWriteWidth - 10, 120, 125);
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
		TOTAL_TIME -= PERIOD;
	}
	
	else
	{

		clearInterval(userIntervalID);
		clearInterval(intervalID);
		gameOverState();
	}
}

function startMiniGame1()
{
	TOTAL_TIME = 14000; // 15 secs
	TOPPING_NUM = 0;
	TOPPING_ARRAY = [];
	intervalID = setInterval(mainLoop1, PERIOD);
	userIntervalID = setInterval(checkForKeys1, 2);
}

function initState1()
{
	ctx.drawImage(initScreen1, 0, 0, canvas.width, canvas.height);
	ctx.font = 'italic 60px Georgia';
	var gameTitle = "FACEBOOK CHALLENGE";
	var gameTitleMetrics = ctx.measureText(gameTitle);
	var gameTitleWidth = gameTitleMetrics.width;
	ctx.fillStyle = 'white';
	ctx.fillRect(GAME_WIDTH/2 - (gameTitleWidth/2) - TEXT_PADDING, 2*GAME_HEIGHT/5 - 60, gameTitleWidth + 2*TEXT_PADDING, 70);
	ctx.fillStyle = '#3B5998';
	ctx.fillText(gameTitle, GAME_WIDTH/2 - (gameTitleWidth/2), 2*GAME_HEIGHT/5);

	
	ctx.font = 'italic 20px Georgia';
	var welcomeMessage = "Click as fast as you can to get the most likes on your picture!";
	var welcomeMessageMetrics = ctx.measureText(welcomeMessage);
	var welcomeMessageWidth = welcomeMessageMetrics.width;
	ctx.fillStyle = 'white';
	ctx.fillRect(GAME_WIDTH/2 - (welcomeMessageWidth/2) - TEXT_PADDING, GAME_HEIGHT/2 - 20, welcomeMessageWidth + 2*TEXT_PADDING, 30);
	
	ctx.fillStyle = '#3B5998';
	ctx.fillText(welcomeMessage, GAME_WIDTH/2 - (welcomeMessageWidth/2), GAME_HEIGHT/2);
	window.setTimeout(startMiniGame1, TIMEOUT);
}

