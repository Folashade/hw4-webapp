// player.js

function checkForKeys()
{
	var topping;
	document.onkeyup = function() {
		topping = new Topping();
		TOPPING_ARRAY.push(topping);
		TOPPING_NUM++;
	};
}