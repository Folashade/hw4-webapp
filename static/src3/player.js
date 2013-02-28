function onMouseDown(event) {
    var xClicked = event.pageX - canvas.offsetLeft;  // do not use event.x, it's not cross-browser!!!
    var yClicked = event.pageY - canvas.offsetTop;
	for (var i = 0; i < CARD_ARRAY.length; i++)
	{
		if (xClicked >= CARD_ARRAY[i].x && xClicked <= CARD_ARRAY[i].x1 && yClicked >= CARD_ARRAY[i].y && yClicked <= CARD_ARRAY[i].y1)
		{
			if (CARD_ARRAY[i].clickable === true)
			{
				NUM_CHOSEN++;
				CARD_ARRAY[i].isClicked = true;
				CARD_ARRAY[i].clickable = false;
				if (NUM_CHOSEN < 2)
				{
					CHOSEN1INDEX = i;
				}
				
				else if (NUM_CHOSEN === 2)
				{
					canvas.removeEventListener('mousedown', onMouseDown, false);
					CHOSEN2INDEX = i;
					setTimeout(PAIR_CHECK, CARD_DELAY);
				}
			}
		}
	}
}