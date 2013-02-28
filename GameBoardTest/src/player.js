var leftCount = 0;
var rightCount = 0;
var upCount = 0;
var downCount = 0;

function moveUp()
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
		
function moveDown()
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
	
function moveLeft()
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

function moveRight()
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

function move()
{
	while (NUM_STEPS > 0)
	{
		switch (GAME_ARRAY[PLAYER_POS.row][GAME_ARRAY[col])
		{
			case 1:
				setTimeout(moveDown, 1000);
				break;
			case 2:
				setTimeout(moveLeft, 1000);
				break;
			case 3:
				setTimeout(moveRight, 1000);
				break;
			case 4:
				setTimeout(moveUp, 1000);
				break;
			case 5:
				var random = Math.floor(Math.random()*2)+1;
				if (random === 1)
				{
					moveUp();
				}
				
				else
				{
					moveLeft();
				}
				setTimeout(moveDown, 1000);
				break;
			case 6:
				setTimeout(moveDown, 1000);
				break;
		}	
	}
}
	// if (e === 38)
	// {
		// if (GAME_ARRAY[PLAYER_POS.row-1][PLAYER_POS.col] !== 0)
		// {
			// PLAYER_POS.row--;
			// if ((upCount%2) === 0)
			// {
				// SERGEY = sergeyup1;
			// }
			
			// else
			// {
				// SERGEY = sergeyup2;
			// }
			
			// upCount++;
		// }
	// }
		
	// else if (e === 40)
	// {
		// if (GAME_ARRAY[PLAYER_POS.row+1][PLAYER_POS.col] !== 0)
		// {
			// PLAYER_POS.row++;
			// if ((downCount%2) === 0)
			// {
				// SERGEY = sergeydown1;
			// }
			
			// else
			// {
				// SERGEY = sergeydown2;
			// }
			
			// downCount++;
		// }
	// }
	
	// else if (e === 37)
	// {
		// if (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col-1] !== 0)
		// {
			// PLAYER_POS.col--;
			// if ((leftCount%2) === 0)
			// {
				// SERGEY = sergeyleft1;
			// }
			
			// else
			// {
				// SERGEY = sergeyleft2;
			// }
			
			// leftCount++;
		// }
	// }

	// else if (e === 39)
	// {
		// if (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col+1] !== 0)
		// {
			// PLAYER_POS.col++;
			// if ((rightCount%2) === 0)
			// {
				// SERGEY = sergeyright1;
			// }
			
			// else
			// {
				// SERGEY = sergeyright2;
			// }
			
			// rightCount++;
		// }
	// }
// }


// function moveUp()
// {
	// if (GAME_ARRAY[PLAYER_POS.row-1][PLAYER_POS.col] === 1)
	// {
		// PLAYER_POS.row--;
		// if ((upCount%2) === 0)
		// {
			// SERGEY = sergeyup1;
		// }
		
		// else
		// {
			// SERGEY = sergeyup2;
		// }
		
		// upCount++;
		
		// setTimeout(moveUp, 1000);
	// }
// }
		
// function moveDown()
// {
	// if (GAME_ARRAY[PLAYER_POS.row+1][PLAYER_POS.col] === 1)
	// {
		// PLAYER_POS.row++;
		// if ((downCount%2) === 0)
		// {
			// SERGEY = sergeydown1;
		// }
		
		// else
		// {
			// SERGEY = sergeydown2;
		// }
		
		// downCount++;
		
		// setTimeout(moveDown, 1000);
	// }
// }
	
// function moveLeft()
// {
	// if (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col-1] === 1)
	// {
		// PLAYER_POS.col--;
		// if ((leftCount%2) === 0)
		// {
			// SERGEY = sergeyleft1;
		// }
		
		// else
		// {
			// SERGEY = sergeyleft2;
		// }
		
		// leftCount++;
		
		// setTimeout(moveLeft, 1000);
	// }
// }

// function moveRight()
// {
	// if (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col+1] === 1)
	// {
		// PLAYER_POS.col++;
		// if ((rightCount%2) === 0)
		// {
			// SERGEY = sergeyright1;
		// }
		
		// else
		// {
			// SERGEY = sergeyright2;
		// }
		
		// rightCount++;
		
		
		// setTimeout(moveRight, 1000);
	// }
// }