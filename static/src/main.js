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
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (TREE_WIDTH/2), SQUARE_ARRAY[square].y - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
				specialSquares.push(special);
				break;
			case -2:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (TREE_WIDTH/2), SQUARE_ARRAY[square].y - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
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
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (TREE_WIDTH/2), SQUARE_ARRAY[square].y - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
				specialSquares.push(special);
				break;
			case -2:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (TREE_WIDTH/2), SQUARE_ARRAY[square].y - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
				specialSquares.push(special);
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
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (TREE_WIDTH/2), SQUARE_ARRAY[square].y - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
				specialSquares.push(special);
				break;
			case -2:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (TREE_WIDTH/2), SQUARE_ARRAY[square].y - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
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
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (TREE_WIDTH/2), SQUARE_ARRAY[square].y - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
				specialSquares.push(special);
				break;
			case -2:
				ctx.drawImage(SQUARE_ARRAY[square].img, SQUARE_ARRAY[square].x, SQUARE_ARRAY[square].y, SQUARE_ARRAY[square].w, SQUARE_ARRAY[square].h);
				special = new SPECIAL_SQUARE(tree, SQUARE_ARRAY[square].x + (SQUARE_ARRAY[square].w/2) - (TREE_WIDTH/2), SQUARE_ARRAY[square].y - TREE_HEIGHT, TREE_WIDTH, TREE_HEIGHT);
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