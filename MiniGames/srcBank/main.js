// main.js
// Bank

var canvas = document.getElementById("BankCanvas");
var ctx = canvas.getContext("2d");

function drawBankBackground()
{
	ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function drawBits()
{
	for (var i = 0; i < BIT_ARRAY.length; i++)
	{
		if (i === CURRENTLY_CLICKED)
		{
			ctx.fillStyle = 'red';
			ctx.fillRect(BIT_ARRAY[i].x - PADDING/2, BIT_ARRAY[i].y - PADDING/2, BIT_WIDTH + PADDING, BIT_HEIGHT + PADDING);
		}
		
		ctx.fillStyle = BIT_ARRAY[i].color;
		ctx.font = "30px Arial";
		ctx.fillRect(BIT_ARRAY[i].x, BIT_ARRAY[i].y, BIT_WIDTH, BIT_HEIGHT);
		

		if (ZERO && BIT_ARRAY[i].clicked && (BIT_ARRAY[i].bit !== 0))
		{
			if (NUM_0_BITS > 0)
			{
				if (BIT_ARRAY[i].bit === 1)
				{
					NUM_1_BITS++;
				}
				
				BIT_ARRAY[i].bit = 0;
				NUM_0_BITS--;
			}
			
			// ZERO = false;
			// ONE = false;
			// rightKeyPressed();
			// ZERO = false;
			// BIT_ARRAY[i].clicked = false;
			// if (i+1 < 8)
			// {
				// BIT_ARRAY[i+1].clicked = true;
			// }
		}
		
		else if (ONE && BIT_ARRAY[i].clicked && (BIT_ARRAY[i].bit !== 1))
		{
			if (NUM_1_BITS > 0)
			{
				if (BIT_ARRAY[i].bit === 0)
				{
					NUM_0_BITS++;
				}
				
				BIT_ARRAY[i].bit = 1;
				NUM_1_BITS--;
			}
			
			// ZERO = false;
			// ONE = false;
			// rightKeyPressed();
			// ONE = false;
			// BIT_ARRAY[i].clicked = false;
			// if (i+1 < 8)
			// {
				// BIT_ARRAY[i+1].clicked = true;
			// }
		}
		
		if ((BIT_ARRAY[i].bit === 0) || (BIT_ARRAY[i].bit === 1))
		{
			ctx.fillStyle = 'red';
			ctx.fillText(BIT_ARRAY[i].bit, BIT_ARRAY[i].x + ((BIT_ARRAY[i].x1-BIT_ARRAY[i].x)/2)-(bitwidth/2), BIT_ARRAY[i].y +(BIT_ARRAY[i].y1-BIT_ARRAY[i].y)/2);
		}
	}
	
	ctx.fillStyle = 'red';
	ctx.font = "30px Arial";
	ctx.fillText(bank, GAME_WIDTH/2 - bankwidth/2, 35);
	ctx.fillText(displayBits, GAME_WIDTH/2 - displayBitsWidth/2, (BIT_ARRAY[0].y1) + (GAME_HEIGHT - BIT_ARRAY[0].y1)/3);
	ctx.fillText(BYTE_VALUE, GAME_WIDTH/2 - byteValueWidth/2, (BIT_ARRAY[0].y1) + (GAME_HEIGHT - BIT_ARRAY[0].y1)/3);
	ctx.font = "20px Arial";
	ctx.fillText(bankinstructions, GAME_WIDTH/2 - bankinstructionswidth/2, (BIT_ARRAY[0].y/2));
}

function mainLoop()
{
	ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
	
	ctx.font="30px Arial";
	var stringToWrite = String(BYTE_VALUE);
	var metrics = ctx.measureText(stringToWrite);
	var stringToWriteWidth = metrics.width;
	
	bank = "BANK";
	bankmetrics = ctx.measureText(bank);
	bankwidth = bankmetrics.width;
	
	bit = "0";
	bitmetrics = ctx.measureText(bit);
	bitwidth = bitmetrics.width;
	
	displayBits = "1 x " + NUM_1_BITS + "            0 x " + NUM_0_BITS;
	displayBitsMetrics = ctx.measureText(displayBits);
	displayBitsWidth = displayBitsMetrics.width;
	
	ctx.font = "20px Arial";
	bankinstructions = "Trade your bits up to bytes by clicking on the last four open bits and typing a 0 or 1.";
	bankinstructionsmetrics = ctx.measureText(bankinstructions);
	bankinstructionswidth = bankinstructionsmetrics.width;

	if (keyPressed(ZERO_KEY))
	{
		console.log(ZERO_KEY);
		ONE = false;
		ZERO = true;
	}
	
	else if (keyPressed(ONE_KEY))
	{
		ZERO = false;
		ONE = true;
	}
	
	else
	{
		ZERO = false;
		ONE = false;
	}
	
	ctx.fillText(stringToWrite, GAME_WIDTH/2 - stringToWriteWidth/2, 30);
	drawBankBackground();
	ctx.fillStyle = 'white';
	drawBits();
}


function startGame()
{
	// call init screen?
	canvas.addEventListener('keydown', onKeyDown, false);
	canvas.addEventListener('keyup', onKeyUp, false);
    canvas.setAttribute('tabindex','0');
    canvas.focus();
	canvas.addEventListener('mousedown', onMouseDown, false);
	MAKE_BITS();
	SET_BIT_PARAMS();
	intervalID = setInterval(mainLoop, PERIOD);
}

startGame();