// backgroundDrawer.js

var canvas = document.getElementById("GameBoard");
var ctx = canvas.getContext("2d");

function drawBoard()
{
	var square = 0;
	var specialSquares = [];
	function SPECIAL_SQUARE(img, x, y, w, h)
	{
		this.img = img;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}
	
	for (var i = -4; i <= 4; i++)
	{
		//console.log(DRAW_GAME_ARRAY);
		//console.log(PLAYER_POS);
		switch(DRAW_GAME_ARRAY[PLAYER_POS.row - 2][PLAYER_POS.col + i])
		{
			case 0:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case 1:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case -1:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].cx - (TREE_WIDTH/2), SQUARE_ARRAY[square].cy - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
				specialSquares.push(special);
				break;
			case -2:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].cx - (BANK_WIDTH/2), SQUARE_ARRAY[square].cy - BANK_HEIGHT, BANK_WIDTH, BANK_HEIGHT);
				special = new SPECIAL_SQUARE(bank, SQUARE_ARRAY[square].cx - (BANK_WIDTH/2), SQUARE_ARRAY[square].cy - BANK_HEIGHT, BANK_WIDTH, BANK_HEIGHT);
				specialSquares.push(special);
				break;
		}		
		
		square++;
	}
	
	for (var i = -3; i <= 3; i++)
	{
		switch(DRAW_GAME_ARRAY[PLAYER_POS.row - 1][PLAYER_POS.col + i])
		{
			case 0:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case 1:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case -1:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].cx - (TREE_WIDTH1/2), SQUARE_ARRAY[square].cy - TREE_HEIGHT1, TREE_WIDTH1, TREE_HEIGHT1);
				specialSquares.push(special);
				break;
			case -2:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].cx - (BANK_WIDTH1/2), SQUARE_ARRAY[square].cy - BANK_HEIGHT1, BANK_WIDTH1, BANK_HEIGHT1);
				special = new SPECIAL_SQUARE(bank, SQUARE_ARRAY[square].cx - (BANK_WIDTH1/2), SQUARE_ARRAY[square].cy - BANK_HEIGHT1, BANK_WIDTH1, BANK_HEIGHT1);
				specialSquares.push(special);
				break;Squares.push(special);
				break;
		}
		
		square++;
	}
	
	for (var i = -2; i <= 2; i++)
	{
		switch(DRAW_GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col + i])
		{
			case 0:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case 1:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case -1:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].cx - (TREE_WIDTH2/2), SQUARE_ARRAY[square].cy - TREE_HEIGHT2, TREE_WIDTH2, TREE_HEIGHT2);
				specialSquares.push(special);
				break;
			case -2:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].cx - (BANK_WIDTH2/2), SQUARE_ARRAY[square].cy - BANK_HEIGHT2, BANK_WIDTH2, BANK_HEIGHT2);
				special = new SPECIAL_SQUARE(bank, SQUARE_ARRAY[square].cx - (BANK_WIDTH2/2), SQUARE_ARRAY[square].cy - BANK_HEIGHT2, BANK_WIDTH2, BANK_HEIGHT2);
				specialSquares.push(special);
				break;
		}
		
		square++;
	}
	
	for (var i = -2; i <= 2; i++)
	{
		switch(DRAW_GAME_ARRAY[PLAYER_POS.row + 1][PLAYER_POS.col + i])
		{
			case 0:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case 1:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				break;
			case -1:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].cx - (TREE_WIDTH2/2), SQUARE_ARRAY[square].cy - TREE_HEIGHT2, TREE_WIDTH2, TREE_HEIGHT2);
				specialSquares.push(special);
				break;
			case -2:
				ctx.drawImage(SQUARE_ARRAY[square].imgL, SQUARE_ARRAY[square].cx - (BANK_WIDTH2/2), SQUARE_ARRAY[square].cy - BANK_HEIGHT2, BANK_WIDTH2, BANK_HEIGHT2);
				special = new SPECIAL_SQUARE(bank, SQUARE_ARRAY[square].cx - (BANK_WIDTH2/2), SQUARE_ARRAY[square].cy - BANK_HEIGHT2, BANK_WIDTH2, BANK_HEIGHT2);
				specialSquares.push(special);
				break;
		}
		
		square++;
	}
	
	for (var i = 0; i < specialSquares.length; i++)
	{
		ctx.drawImage(specialSquares[i].img, specialSquares[i].x, specialSquares[i].y, specialSquares[i].w, specialSquares[i].h);
	}
}

function drawPlayer(user)
{
	if (user === 'Sergey'){
		ctx.drawImage(SERGEY, 502.5 - PLAYER_WIDTH/2, 296 - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT); // TODO: hardcoded to actual square coordinates
	}
	if (user === 'Bill'){
		ctx.drawImage(BILL, 502.5 - PLAYER_WIDTH/2, 296 - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT); 
	}
	if (user === 'Steve'){
		ctx.drawImage(STEVE, 502.5 - PLAYER_WIDTH/2, 296 - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT); 
	}
	if (user === 'Mark'){
		ctx.drawImage(MARK, 502.5 - PLAYER_WIDTH/2, 296 - PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_HEIGHT); 
	}
}


function drawGame()
{
	console.log("DRAWINGTHE GAMEEEE");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBoard();
	var user = getParam('user');
	drawPlayer(user);
}

function startGame()
{
	MAKE_SQUARES();
	LOAD_PLAYERS();
	LOAD_GAME_ELEMS();
	PLAYER_POS = new PLAYER_POSITION(9, 7); // constants
	//canvas.addEventListener('keydown', onKeyDown, false);
	//canvas.setAttribute('tabindex','0');
    //canvas.focus();
	
	//intervalID = setInterval(move, 1000);
	//intervalIDGame = setInterval(drawGame, 1000);
}

startGame();