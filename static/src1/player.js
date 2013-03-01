/*15-237 Project 4
 * Samaan Ghani (sghani), Folashade Okunubi (foo),  Lydia Utkin(lju)
 * Due: 26 February 2013 
 
 Based off of Mario Party series.
*/

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