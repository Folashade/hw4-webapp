/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/

function onMouseDown5(event) {
    var xClicked = event.pageX - canvas.offsetLeft;  // do not use event.x, it's not cross-browser!!!
    var yClicked = event.pageY - canvas.offsetTop;
	

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

function keyPressed5(keyCode) {
    return keys[keyCode] === true;
}

function rightKeyPressed5()
{
	BIT_ARRAY[CURRENTLY_CLICKED].clicked = false;
	if (CURRENTLY_CLICKED+1 < 8)
	{
		CURRENTLY_CLICKED = CURRENTLY_CLICKED+1;
	}
	
	BIT_ARRAY[CURRENTLY_CLICKED].clicked = true;
}

function leftKeyPressed5()
{
	BIT_ARRAY[CURRENTLY_CLICKED].clicked = false;
	if (CURRENTLY_CLICKED-1 > 3)
	{
		CURRENTLY_CLICKED = CURRENTLY_CLICKED-1;
	}
	
	BIT_ARRAY[CURRENTLY_CLICKED].clicked = true;
}

function onKeyDown5(event) {
    keys[event.keyCode] = true;
	
	if ((event.keyCode === RIGHT_KEY) || (event.keyCode === TAB_KEY))
	{
		rightKeyPressed5();
	}
	
	else if (event.keyCode === LEFT_KEY)
	{
		leftKeyPressed5();
	}
}

function onKeyUp5(event) {
    delete keys[event.keyCode];
}