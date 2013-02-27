// backgroundDrawer.js

var canvas = document.getElementById("GameBoard");
var ctx = canvas.getContext("2d");

function drawBoard()
{
	var square = 0;
	for (var i = -4; i <= 4; i++)
	{
		switch(GAME_ARRAY[PLAYER_POS.row - 2][PLAYER_POS.col + i])
		{
			case 0:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case 1:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case -1:
				ctx.drawImage(bank, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (BANK_WIDTH/2), SQUARE_ARRAY[square].y, BANK_WIDTH, BANK_HEIGHT);
				break;
		}
		
		square++;
	}
	
	for (var i = -3; i <= 3; i++)
	{
		switch(GAME_ARRAY[PLAYER_POS.row - 1][PLAYER_POS.col + i])
		{
			case 0:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case 1:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case -1:
				ctx.drawImage(bank, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, BANK_WIDTH, BANK_HEIGHT);
				break;
		}
		
		square++;
	}
	
	for (var i = -2; i <= 2; i++)
	{
		switch(GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col + i])
		{
			case 0:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case 1:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case -1:
				ctx.drawImage(bank, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, BANK_WIDTH, BANK_HEIGHT);
				break;
		}
		
		square++;
	}
	
	for (var i = -2; i <= 2; i++)
	{
		switch(GAME_ARRAY[PLAYER_POS.row + 1][PLAYER_POS.col + i])
		{
			case 0:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case 1:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case -1:
				ctx.drawImage(bank, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, BANK_WIDTH, BANK_HEIGHT);
				break;
		}
		
		square++;
	}

	// for (var i = 0; i < SQUARE_ARRAY.length; i++)
	// {
		// ctx.drawImage(SQUARE_ARRAY[i].img, SQUARE_ARRAY[i].x, SQUARE_ARRAY[i].y, SQUARE_ARRAY[i].w, SQUARE_ARRAY[i].h);
	// }
}

function drawPlayer()
{
	ctx.drawImage(player, 502.5 - PLAYER_WIDTH/2, 296 - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT); // TODO: hardcoded to actual square coordinates
}

function drawGame()
{
	drawBoard();
	drawPlayer();
}

function startGame()
{
	MAKE_SQUARES();
	console.log(SQUARE_ARRAY);
	LOAD_PLAYER();
	LOAD_GAME_ELEMS();
	PLAYER_POS = new PLAYER_POSITION(9, 7);
	canvas.addEventListener('keydown', onKeyDown, false);
	canvas.setAttribute('tabindex','0');
    canvas.focus();
	intervalID = setInterval(drawGame, 40);
}

startGame();