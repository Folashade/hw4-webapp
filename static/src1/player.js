// player.js

function checkForKeys()
{
	var topping;
	document.onkeyup = function() {
		// var toppingTempName = "topping" + String(TOPPING_NUM);
		console.log("something happening");
		topping = new Topping();
		TOPPING_ARRAY.push(topping);
		TOPPING_NUM++;
	};
}