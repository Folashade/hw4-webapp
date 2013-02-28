var leftCount = 0;
var rightCount = 0;
var upCount = 0;
var downCount = 0;

function moveUp()
{
	if (GAME_ARRAY[PLAYER_POS.row-1][PLAYER_POS.col] !== 0)
	{
		PLAYER_POS.row--;
		if ((upCount%2) === 0)
		{
			SERGEY = sergeyup1;
		}
		
		else
		{
			SERGEY = sergeyup2;
		}
		
		upCount++;
	}
}
		
function moveDown()
{
	if (GAME_ARRAY[PLAYER_POS.row+1][PLAYER_POS.col] !== 0)
	{
		PLAYER_POS.row++;
		if ((downCount%2) === 0)
		{
			SERGEY = sergeydown1;
		}
		
		else
		{
			SERGEY = sergeydown2;
		}
		
		downCount++;
	}
}
	
function moveLeft()
{
	if (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col-1] !== 0)
	{
		PLAYER_POS.col--;
		if ((leftCount%2) === 0)
		{
			SERGEY = sergeyleft1;
		}
		
		else
		{
			SERGEY = sergeyleft2;
		}
		
		leftCount++;
	}
}

function moveRight()
{
	if (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col+1] !== 0)
	{
		PLAYER_POS.col++;
		if ((rightCount%2) === 0)
		{
			SERGEY = sergeyright1;
		}
		
		else
		{
			SERGEY = sergeyright2;
		}
		
		rightCount++;
	}
}
