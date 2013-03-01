function onMouseDown(event) {
    var xClicked = event.pageX - canvas.offsetLeft;  // do not use event.x, it's not cross-browser!!!
    var yClicked = event.pageY - canvas.offsetTop;
	
	// if (xClicked >= BUTTON_X && xClicked <= (BUTTON_X + BUTTON_WIDTH) && yClicked >= BUTTON_Y && yClicked <= (BUTTON_Y + BUTTON_HEIGHT))
	// {
		// console.log("TO GAME");
	//	RETURN TO MAIN GAME HERE!!!!!!!!!!!!!!
	// }
	
	for (var i = 0; i < BIT_ARRAY.length; i++)
	{
		if (xClicked >= BIT_ARRAY[i].x && xClicked <= BIT_ARRAY[i].x1 && yClicked >= BIT_ARRAY[i].y && yClicked <= BIT_ARRAY[i].y1)
		{
			if (((CURRENTLY_CLICKED !== -1) || (CURRENTLY_CLICKED !== i)) && BIT_ARRAY[i].clickable)
			{
				if (CURRENTLY_CLICKED !== -1)
				{
					BIT_ARRAY[CURRENTLY_CLICKED].clicked = false;
				}
				
				CURRENTLY_CLICKED = i;
				BIT_ARRAY[CURRENTLY_CLICKED].clicked = true;
			}
		}
	}
}

var keys = [];

function keyPressed(keyCode) {
    return keys[keyCode] === true;
}

function rightKeyPressed()
{
	BIT_ARRAY[CURRENTLY_CLICKED].clicked = false;
	if (CURRENTLY_CLICKED+1 < 8)
	{
		CURRENTLY_CLICKED = CURRENTLY_CLICKED+1;
	}
	
	BIT_ARRAY[CURRENTLY_CLICKED].clicked = true;
}

function leftKeyPressed()
{
	BIT_ARRAY[CURRENTLY_CLICKED].clicked = false;
	if (CURRENTLY_CLICKED-1 > 3)
	{
		CURRENTLY_CLICKED = CURRENTLY_CLICKED-1;
	}
	
	BIT_ARRAY[CURRENTLY_CLICKED].clicked = true;
}

function onKeyDown(event) {
    keys[event.keyCode] = true;
	
	if ((event.keyCode === RIGHT_KEY) || (event.keyCode === TAB_KEY))
	{
		rightKeyPressed();
	}
	
	else if (event.keyCode === LEFT_KEY)
	{
		leftKeyPressed();
	}
}

function onKeyUp(event) {
    delete keys[event.keyCode];
}