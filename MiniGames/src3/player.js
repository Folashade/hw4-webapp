function onMouseDown(event) {
    var xClicked = event.pageX - canvas.offsetLeft;  // do not use event.x, it's not cross-browser!!!
    var yClicked = event.pageY - canvas.offsetTop;
	console.log("MOUSE DOWN");
	for (var i = 0; i < CARD_ARRAY.length; i++)
	{
		if (xClicked >= CARD_ARRAY[i].x && xClicked <= CARD_ARRAY[i].x1 && yClicked >= CARD_ARRAY[i].y && yClicked <= CARD_ARRAY[i].y1)
		{
			CARD_ARRAY[i].show = true;
		}
	}
}