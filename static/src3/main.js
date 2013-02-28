// main.js
// Mini Game 3 "FLIP SHAPES" Logic

var canvas = document.getElementById("MiniGame3Canvas");
var ctx = canvas.getContext("2d");

// var b1 = document.getElementById("MiniGame1Canvas")
// var b2 = document.getElementById("MiniGame2Canvas")
// var b4 = document.getElementById("MiniGame4Canvas")
// 
// if (b1 != null){
// 	b1.style.display = "none";
// }
// if (b2 != null){
// 	b2.style.display = "none";
// }
// if (b4 != null){
// 	b4.style.display = "none";
// }


// clearInterval(intervalID);




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
			ctx.fillRect(CARD_ARRAY[i].x, CARD_ARRAY[i].y, CARD_WIDTH, CARD_HEIGHT);
			ctx.drawImage(flip_card, CARD_ARRAY[i].x, CARD_ARRAY[i].y, CARD_WIDTH, CARD_HEIGHT);		
			
		}
	}
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
	drawCards();
}


function startGame()
{
	// call init screen?
	canvas.addEventListener('mousedown', onMouseDown, false);
	loadImages();
	MAKE_CARDS();
	RANDOMIZE_CARDS();
	SET_CARD_PARAMS();
	intervalID = setInterval(mainLoop, PERIOD);
}

// startGame();