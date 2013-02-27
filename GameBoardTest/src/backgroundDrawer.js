// backgroundDrawer.js

var canvas = document.getElementById("GameBoard");
var ctx = canvas.getContext("2d");

function drawBoard()
{
	// for (var i = 0; i < SQUARE_ARRAY.length; i++)
	// {
		// ctx.drawImage(SQUARE_ARRAY[i].img, SQUARE_ARRAY[i].x, SQUARE_ARRAY[i].y, SQUARE_ARRAY[i].w, SQUARE_ARRAY[i].h);
	// }
	
	for (var i = 0; i < PLAYER_ARRAY.length; i++)
	{
		console.log(PLAYER_ARRAY[i]);
		ctx.drawImage(PLAYER_ARRAY[i].img, PLAYER_ARRAY[i].x, PLAYER_ARRAY[i].y, PLAYER_ARRAY[i].w, PLAYER_ARRAY[i].h); // TODO: hardcoded to actual square coordinates
	}
}

// function drawPlayer()
// {
	// console.log(PLAYER_ARRAY);
	// for (var i = 0; i < PLAYER_ARRAY.length; i++)
	// {
		// ctx.drawImage(PLAYER_ARRAY[i].img, PLAYER_ARRAY[i].x, PLAYER_ARRAY[i].y, PLAYER_ARRAY[i].w, PLAYER_ARRAY[i].h); // TODO: hardcoded to actual square coordinates
	// }
// }

function drawGame()
{
	drawBoard();
	//drawPlayer();
}

function startGame()
{
	MAKE_SQUARES();
	LOAD_PLAYERS();
	PLAYER_0 = new PLAYER(player0Img, PLAYER0_WIDTH, PLAYER0_HEIGHT, (502.5 - PLAYER0_WIDTH/2), (296 - PLAYER0_HEIGHT));
	intervalID = setInterval(drawGame, 4000);
}

startGame();