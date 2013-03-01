// main.js
// Bank

var canvas = document.getElementById("BankCanvas");
var ctx = canvas.getContext("2d");

// bank = new Image();
// bank.src = BANK_IMAGE;

function drawBankBackground()
{
    ctx.drawImage(bankImg, 0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function drawBits()
{
	for (var i = 0; i < BIT_ARRAY.length; i++)
	{
		if (i === CURRENTLY_CLICKED)
		{
			ctx.fillStyle = '#feecde';
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
			ctx.fillStyle = 'black';
			ctx.fillText(BIT_ARRAY[i].bit, BIT_ARRAY[i].x + ((BIT_ARRAY[i].x1-BIT_ARRAY[i].x)/2)-(bitwidth/2), BIT_ARRAY[i].y +(BIT_ARRAY[i].y1-BIT_ARRAY[i].y)/2);
		}
	}
	
	ctx.fillStyle = 'feecde';
	ctx.font = "30px Arial";
	ctx.fillText(displayBits, GAME_WIDTH/2 - displayBitsWidth/2, (BIT_ARRAY[0].y1) + (GAME_HEIGHT - BIT_ARRAY[0].y1)/3);
	ctx.font = "bold 50px Arial";
	ctx.fillText(bank, GAME_WIDTH/2 - bankwidth/2, 55);
	ctx.fillText(byteval, GAME_WIDTH/2 - bytevalwidth/2, (BIT_ARRAY[0].y1) + 4*(GAME_HEIGHT - BIT_ARRAY[0].y1)/5);
	ctx.font = "20px Arial";
	ctx.fillText(bankinstructions, GAME_WIDTH/2 - bankinstructionswidth/2, 2*(BIT_ARRAY[0].y/3));
	
	// BUTTON_X = GAME_WIDTH - gobackwidth - BUTTON_PADDING - BUTTON_PADDING;
	// BUTTON_Y = BUTTON_PADDING;
	// BUTTON_WIDTH = gobackwidth + BUTTON_PADDING + BUTTON_PADDING + BUTTON_PADDING
	// BUTTON_HEIGHT = 25
	// ctx.fillRect(BUTTON_X, BUTTON_Y, BUTTON_WIDTH, BUTTON_HEIGHT);
	// ctx.fillStyle = 'white';
	// ctx.fillText(goback, GAME_WIDTH - gobackwidth - BUTTON_PADDING, BUTTON_PADDING + 20);
}

function mainLoop()
{
	if (TOTAL_TIME >= -PERIOD)
	{
		console.log(TOTAL_TIME);
		ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
		drawBankBackground();
		ctx.font="50px Arial";
		
		bank = "BANK";
		bankmetrics = ctx.measureText(bank);
		bankwidth = bankmetrics.width;
			
		byteval = "Byte Value: " + getByteValue();
		bytevalmetrics = ctx.measureText(byteval);
		bytevalwidth = bytevalmetrics.width;
		
		ctx.font="30px Arial";
		bit = "0";
		bitmetrics = ctx.measureText(bit);
		bitwidth = bitmetrics.width;
		
		displayBits = "Your bits: 1 x " + NUM_1_BITS + ",   0 x " + NUM_0_BITS;
		displayBitsMetrics = ctx.measureText(displayBits);
		displayBitsWidth = displayBitsMetrics.width;
		
		ctx.font = "20px Arial";
		bankinstructions = "Trade your bits up to bytes by clicking on the last four open bits and typing a 0 or 1.";
		bankinstructionsmetrics = ctx.measureText(bankinstructions);
		bankinstructionswidth = bankinstructionsmetrics.width;
		
		var time = "Time left: " + String(Math.floor((TOTAL_TIME + 1000)/1000)); //for milliseconds
		var timemetrics = ctx.measureText(time);
		var timeWidth = timemetrics.width;
		ctx.fillText(time, GAME_WIDTH - timeWidth - 5, 30);

		// goback = "Go Back";
		// gobackmetrics = ctx.measureText(goback);
		// gobackwidth = gobackmetrics.width;
		
		if (keyPressed(ZERO_KEY))
		{
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
		
		//ctx.fillText(stringToWrite, GAME_WIDTH/2 - stringToWriteWidth/2, 30);
		ctx.fillStyle = 'white';
		drawBits();
		
		TOTAL_TIME -= PERIOD;
	}
	
	else
	{
		clearInterval(intervalID);
		gameOverState();
	}
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

function initState()
{
	loadImages();
	ctx.fillStyle = 'black';
	ctx.font = 'bold 60px Calibri';
	var welcomeMessage = "Entering the bank!";
	var welcomeMessageMetrics = ctx.measureText(welcomeMessage);
	var welcomeMessageWidth = welcomeMessageMetrics.width;
	
	ctx.fillText(welcomeMessage, GAME_WIDTH/2 - (welcomeMessageWidth/2), GAME_HEIGHT/2);
	window.setTimeout(startGame, TIMEOUT);
}

window.onload = initState;