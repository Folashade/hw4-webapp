// player.js

// or key up?
function onKeyDown(event)
{
	console.log("keydown");
	var arrow = ARROW_ARRAY[0];
	var dir = arrow.direction;
	var e = event.keyCode;
	
	if (((e === 38) && (dir === "up")) || ((e === 40) && (dir === "down")) || ((e === 37) && (dir === "left")) ||((e === 39) && (dir === "right")))
	{
		console.log("correct key");
		// "Perfect"
		if (Math.abs(arrow.y) <= 5)
		{
			console.log("perf");
			// draw perfect?
			SCORE += 20;
			ARROW_ARRAY.splice(0, 1);
		}
		
		// "Great"
		else if (Math.abs(arrow.y) <= 10)
		{
			console.log("great");
			// draw great?
			SCORE += 15;
			ARROW_ARRAY.splice(0, 1);
		}
		
		// "Good"
		else if (Math.abs(arrow.y) <= 15)
		{
			console.log("good");
			// draw good?
			SCORE += 10;
			ARROW_ARRAY.splice(0, 1);
		}
		
		// "Poor"
		else if (Math.abs(arrow.y) <= 20)
		{
			console.log("poor");
			// draw poor?
			SCORE += 5;
			ARROW_ARRAY.splice(0, 1);
		}
	}
}