function Shape()
{
	var randomX = Math.floor(Math.random() * (BOARD_WIDTH - SHAPE_WIDTH)) + BOARD_X - BOARD_WIDTH/2;
	var randomY = Math.floor(Math.random() * (BOARD_HEIGHT - SHAPE_HEIGHT)) + BOARD_Y - BOARD_HEIGHT/2;
	// add random topping types and sizes
	this.x = randomX;
	this.y = randomY;
}