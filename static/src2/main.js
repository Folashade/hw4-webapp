// main.js
// Mini Game 2 "Shape Clicker" Logic

//HIDE OTHER CANVASES in Start function.. then start game
// var b1 = document.getElementById("MiniGame1Canvas")
// 
// if (b1 != null){
// 	b1.style.display = "none";
// }


var canvas = document.getElementById("MiniGame2Canvas");
var ctx = canvas.getContext("2d");
var img = new Image();   // Create new img element
img.src = 'img2/iphone.png'; // Set source path
var imgOffset = 15;


/** clear main interval **/
// if (intervalID != null){
// 	clearInterval(intervalID);
// }


function drawSquareBackground()
{
	ctx.fillStyle = 'blue';
    ctx.fillRect((GAME_WIDTH/2) - (BOARD_WIDTH/2), (GAME_HEIGHT/2) - (BOARD_HEIGHT/2), BOARD_WIDTH, BOARD_HEIGHT);
}

function mainLoop()
{
	// drawCircleBackground();
	
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	ctx.font="30px Arial";
	var stringToWrite = String(SHAPE_NUM);
	var metrics = ctx.measureText(stringToWrite);
	var stringToWriteWidth = metrics.width;

	// drawSquareBackground();
	
	
	for (var i = 0; i < SHAPE_ARRAY.length; i++)
	{
		/** iphone products **/
		ctx.fillStyle = 'red';
		// ctx.fillRect(SHAPE_ARRAY[i].x - 70, SHAPE_ARRAY[i].y -40, SHAPE_WIDTH, SHAPE_HEIGHT);
		ctx.drawImage(img,SHAPE_ARRAY[i].x - (imgOffset) , SHAPE_ARRAY[i].y + (imgOffset/5) );
		
		/** score **/
		ctx.font = 'italic 105px Georgia';
		ctx.fillStyle = 'red';
		ctx.fillText(stringToWrite, GAME_WIDTH - 120, 120, 100);
	}
}

function startGame()
{
	// call init screen?
	var initShape;
	initShape = new Shape();
	SHAPE_ARRAY.push(initShape);
	canvas.addEventListener('mousedown', onClick, false);
	intervalID = setInterval(mainLoop, PERIOD);
}

startGame();