// player.js

function checkForKeys1()
{
	var topping;
	document.onkeyup = function() {
		topping = new Topping();
		TOPPING_ARRAY.push(topping);
		TOPPING_NUM++;
	};
}