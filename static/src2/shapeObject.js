/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/

function Shape(img, w, h)
{
	var randomX = Math.floor(Math.random() * (BOARD_WIDTH2 - w)) + BOARD_X2;
	var randomY = Math.floor(Math.random() * (BOARD_HEIGHT2 - h)) + BOARD_Y2;
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