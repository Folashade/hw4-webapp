function Topping()
{
	// var randomX = Math.floor(Math.random() * (PIZZA_WIDTH - TOPPING_SIZE)) + PIZZA_X/2 + TOPPING_SIZE;
	// var randomY = Math.floor(Math.random() * (PIZZA_HEIGHT - TOPPING_SIZE)) + PIZZA_Y/2 + TOPPING_SIZE;
	var randomX = Math.floor(Math.random() * (PIZZA_WIDTH - TOPPING_SIZE)) + PIZZA_X - PIZZA_WIDTH/2;
	var randomY = Math.floor(Math.random() * (PIZZA_HEIGHT - TOPPING_SIZE)) + PIZZA_Y - PIZZA_HEIGHT/2;
	// add random topping types and sizes
	this.x = randomX;
	this.y = randomY;
}