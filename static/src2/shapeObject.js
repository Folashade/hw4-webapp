function Shape(img, w, h)
{
	var randomX = Math.floor(Math.random() * (BOARD_WIDTH - w)) + BOARD_X;
	var randomY = Math.floor(Math.random() * (BOARD_HEIGHT - h)) + BOARD_Y;
	// add random topping types and sizes
	this.x = randomX;
	this.y = randomY;
	this.w = w;
	this.h = h;
	this.img = img;
}

function makeRandomShape()
{
	var random = Math.floor(Math.random() * 2) + 1;
	var initShape;
	if (random === 1)
	{
		initShape = new Shape(img, SHAPE_WIDTH, SHAPE_HEIGHT);
	}
	
	else
	{
		initShape = new Shape(img1, SHAPE_WIDTH1, SHAPE_HEIGHT1);
	}
	
	return initShape;
}