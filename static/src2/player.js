// player.js

function onClick(event)
{
	var x = event.pageX - canvas.offsetLeft - 70;
	var y = event.pageY - canvas.offsetTop - 40;
	
	for (var i = 0; i < SHAPE_ARRAY.length; i++)
	{
		if ((x >= SHAPE_ARRAY[i].x) && (x <= (SHAPE_ARRAY[i].x + SHAPE_WIDTH)) && (y >= SHAPE_ARRAY[i].y) && (y <= (SHAPE_ARRAY[i].y + SHAPE_HEIGHT)))
		{
			SHAPE_ARRAY.splice(i, 1);
			var newShape;
			newShape = new Shape();
			SHAPE_ARRAY.push(newShape);
			SHAPE_NUM++;
		}
	}
}