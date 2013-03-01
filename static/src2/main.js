/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/

// main.js
// Mini Game 2 "Shape Clicker" Logic

//HIDE OTHER CANVASES in Start function.. then start game
// var b1 = document.getElementById("MiniGame1Canvas")
// 
// if (b1 != null){
// 	b1.style.display = "none";
// }

var imgOffset = 15;

var img;
var img1;

function loadImages2()
{
	img = new Image();   // Create new img element
	img.src = 'img2/iphone.png'; // Set source path
	img1 = new Image();
	img1.src = 'img2/macbookpro.png';
}

var initScreen2 = new Image();
initScreen2.src = 'img2/ipad.png'


/** clear main interval **/
// if (intervalID != null){
// 	clearInterval(intervalID);
// }

function mainLoop2()
{
	if (TOTAL_TIME >= -PERIOD)
	{
		ctx.clearRect(0, 0, GAME_WIDTH2, GAME_HEIGHT2);
		ctx.drawImage(initScreen2, 0, 0, canvas.width, canvas.height);
		for (var i = 0; i < SHAPE_ARRAY.length; i++)
		{
			/** iphone products **/

			console.log("SHAPEARRAY" + SHAPE_ARRAY);
			ctx.drawImage(SHAPE_ARRAY[i].img, SHAPE_ARRAY[i].x, SHAPE_ARRAY[i].y, SHAPE_ARRAY[i].w, SHAPE_ARRAY[i].h);

			/** score **/
			ctx.font = 'bold 30px Arial';
			
			var time = "Time left: " + String(Math.floor((TOTAL_TIME + 1000)/1000)); //for milliseconds
			var timemetrics = ctx.measureText(time);
			var timeWidth = timemetrics.width;
			var stringToWrite = "Score: " + String(SHAPE_NUM);
			ctx.fillText(time, 3*TEXT_PADDING, 50);
			var metrics = ctx.measureText(stringToWrite);
			var stringToWriteWidth = metrics.width;
			ctx.fillStyle = 'white';
			ctx.fillText(stringToWrite, GAME_WIDTH2 - stringToWriteWidth - 3*TEXT_PADDING, 50);
		}
		
		TOTAL_TIME -= PERIOD;
	}
	
	else
	{
		canvas.removeEventListener('mousedown', onClick, false);
		clearInterval(intervalID);
		gameOverState();
	}
}

function startMiniGame2()
{
	loadImages2();
	TOTAL_TIME = 14000;
	SHAPE_ARRAY = [];
	SHAPE_NUM = 0;
	var initShape = makeRandomShape();
	SHAPE_ARRAY.push(initShape);
	console.log(SHAPE_ARRAY);
	canvas.addEventListener('mousedown', onClick, false);
	intervalID = setInterval(mainLoop2, PERIOD);
}

function initState2()
{
	ctx.drawImage(initScreen2, 0, 0, canvas.width, canvas.height);
	ctx.font = 'bold 60px Arial';
	var gameTitle = "APPLE CHALLENGE";
	var gameTitleMetrics = ctx.measureText(gameTitle);
	var gameTitleWidth = gameTitleMetrics.width;
	ctx.fillStyle = 'black';
	ctx.fillText(gameTitle, GAME_WIDTH2/2 - (gameTitleWidth/2), 2*GAME_HEIGHT2/5);
	
	ctx.font = 'bold 20px Arial';
	var welcomeMessage = "Collect as many apple products as you can!";
	var welcomeMessageMetrics = ctx.measureText(welcomeMessage);
	var welcomeMessageWidth = welcomeMessageMetrics.width;
	
	ctx.fillText(welcomeMessage, GAME_WIDTH2/2 - (welcomeMessageWidth/2), GAME_HEIGHT2/2);
	window.setTimeout(startMiniGame2, TIMEOUT);
}
