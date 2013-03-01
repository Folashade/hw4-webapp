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
		MARK = markup1;
		STEVE = steveup1;
		BILL = billup1;
	}
	
	else
	{
		SERGEY = sergeyup2;
		MARK = markup2;
		STEVE = steveup2;
		BILL = billup2;
	}
	
	upCount++;
}
		
function moveDown()
{
	PLAYER_POS.row++;
	if ((downCount%2) === 0)
	{
		SERGEY = sergeydown1;
		MARK = markdown1;
		STEVE = stevedown1;
		BILL = billdown1;
	}
	
	else
	{
		SERGEY = sergeydown2;
		MARK = markdown2;
		STEVE = stevedown2;
		BILL = billdown2;
	}
	
	downCount++;
}
	
function moveLeft()
{
	PLAYER_POS.col--;
	if ((leftCount%2) === 0)
	{
		SERGEY = sergeyleft1;
		MARK = markleft1;
		STEVE = steveleft1;
		BILL = billleft1;
	}
	
	else
	{
		SERGEY = sergeyleft2;
		MARK = markleft2;
		STEVE = steveleft2;
		BILL = billleft2;
	}
	
	leftCount++;
}

function moveRight()
{
	PLAYER_POS.col++;
	if ((rightCount%2) === 0)
	{
		SERGEY = sergeyright1;
		MARK = markright1;
		STEVE = steveright1;
		BILL = billright1;
	}
	
	else
	{
		SERGEY = sergeyright2;
		MARK = markright2;
		STEVE = steveright2;
		BILL = billright2;
	
	}
	
	rightCount++;
}

function move()
{
	console.log("DRAWING THE MOVEMENT!!!!!");
	if (NUM_STEPS> 0){
		console.log(NUM_STEPS + "***************************");
		console.log("in move row: " + PLAYER_POS.row + " in move col: " + PLAYER_POS.col);
		switch (GAME_ARRAY[PLAYER_POS.row][PLAYER_POS.col])
		{
			case 1:
				moveUp();
				break;
			case 2:
				moveRight();
				break;
			case 3:
				moveDown();
				break;
			case 4:
				moveLeft();
				break;
			case 5:
				var random = Math.floor(Math.random()*2)+1;
				if (random === 1)
				{
					moveUp();
				}
				
				else
				{
					moveDown();
				}
				
				break;
			case 6:
				var random = Math.floor(Math.random()*2)+1;
				if (random === 1)
				{
					moveDown();
				}
				
				else
				{
					moveRight();
				}
				
				break;
			
			case 8:
				var random = Math.floor(Math.random()*2)+1;
				if (random === 1)
				{
					moveLeft()
				}
				
				else
				{
					moveDown();
				}

				break;

			case 9:
				var random = Math.floor(Math.random()*2)+1;
				if (random === 1)
				{
					moveLeft();
				}
				
				else
				{
					moveUp();
				}
				
				break;
		}	
		NUM_STEPS--;
		var id;

    	for(var i =0; i < users.length; i++){
    		if(users[i].user == getParam('user')){
    			id = i;
    		}
    	}
		updateUser(getParam('user'), id, users[id].turn, {"row": PLAYER_POS.row, "col": PLAYER_POS.col}, false, users[id].score );
	}
	
	
		//console.log("after move row: " + PLAYER_POS.row + " after move col: " + PLAYER_POS.col);
}