function onKeyDown(event)
{
	var e = event.keyCode;
	
	if (e === 38)
	{
		if (GAME_ARRAY[PLAYER_POS.row-1][PLAYER_POS.col] !== 0)
		{
			PLAYER_POS.row--;
		}
	}
		
	else if (e === 40)
	{
		if (GAME_ARRAY[PLAYER_POS.row+1][PLAYER_POS.col] !== 0)
		{
			PLAYER_POS.row++;
		}
	}
	
	else if (e === 37)
	{
		if (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col-1] !== 0)
		{
			PLAYER_POS.col--;
		}
	}

	else if (e === 39)
	{
		if (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col+1] !== 0)
		{
			PLAYER_POS.col++;
		}
	}
}