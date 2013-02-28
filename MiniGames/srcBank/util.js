function BIT(color, clickable, clicked)
{
	this.color = color;
	this.clickable = clickable;
	this.clicked = clicked;
	this.bit;
	this.x;
	this.y;
	this.x1;
	this.y1;
}

// make bits
function MAKE_BITS()
{
	var bit0 = new BIT('grey', false, false);
	bit0.bit = 0;
	var bit1 = new BIT('grey', false, false);
	bit1.bit = 0;
	var bit2 = new BIT('grey', false, false);
	bit2.bit = 0;
	var bit3 = new BIT('grey', false, false);
	bit3.bit = 0;
	var bit4 = new BIT('white', true, false);
	var bit5 = new BIT('white', true, false);
	var bit6 = new BIT('white', true, false);
	var bit7 = new BIT('white', true, false);
	BIT_ARRAY.push(bit0, bit1, bit2, bit3, bit4, bit5, bit6, bit7);
}
	
function SET_BIT_PARAMS()
{
	for (var i = 0; i < BIT_ARRAY.length; i++)
	{
		var colNum = i%COL_NUM;
		var rowNum = (i-colNum)/COL_NUM;
		var bitX = BIT_WIDTH * colNum;
		var bitY = BIT_HEIGHT * rowNum;
		BIT_ARRAY[i].x = PADDING + bitX + (PADDING*colNum);
		BIT_ARRAY[i].y = (GAME_HEIGHT/2) - (BIT_HEIGHT/2);
		BIT_ARRAY[i].x1 = BIT_ARRAY[i].x + BIT_WIDTH;
		BIT_ARRAY[i].y1 = BIT_ARRAY[i].y + BIT_HEIGHT;
	}
}

function getByteValue()
{
	for (int i = 4; i < BYTE_ARRAY.length; i++)
	{
		
	}
}