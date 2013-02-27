function SQUARE(location, img, x, y, w, h)
{
	this.location = location;
	this.img = img;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

function LOAD_PLAYERS()
{
	player0Img = new Image();
	player0Img.src = PLAYER0_IMG;
}

function PLAYER(img, width, height, x, y)
{
	this.img = img;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	PLAYER_ARRAY.push(this);
}

function MAKE_SQUARES()
{
	square00 = new Image();
	square00.src = SQUARE_00;
	var SQUARE_00_OBJ = new SQUARE(00, square00, 0, 0, 68, 57);
	
	square01 = new Image();
	square01.src = SQUARE_01;
	var SQUARE_01_OBJ = new SQUARE(01, square01, -6, 0, 193, 90);
	
	square02 = new Image();
	square02.src = SQUARE_02;
	var SQUARE_02_OBJ = new SQUARE(02, square02, 104, 0, 207, 90);
	
	square03 = new Image();
	square03.src = SQUARE_03;
	var SQUARE_03_OBJ = new SQUARE(03, square03, 262, 0, 176, 90);
	
	square04 = new Image();
	square04.src = SQUARE_04;
	var SQUARE_04_OBJ = new SQUARE(04, square04, 420, 0, 161, 90);

	square05 = new Image();
	square05.src = SQUARE_05;
	var SQUARE_05_OBJ = new SQUARE(05, square05, 563, 0, 174, 90);
	
	square06 = new Image();
	square06.src = SQUARE_06;
	var SQUARE_06_OBJ = new SQUARE(06, square06, 687, 0, 208, 90);

	square07 = new Image();
	square07.src = SQUARE_07;
	var SQUARE_07_OBJ = new SQUARE(07, square07, 810, 0, 191, 90);
	
	square08 = new Image();
	square08.src = SQUARE_08;
	var SQUARE_08_OBJ = new SQUARE(08, square08, 933, 0, 67, 55);
	
	square10 = new Image();
	square10.src = SQUARE_10;
	var SQUARE_10_OBJ = new SQUARE(10, square10, 0, 79, 116, 132);
	
	square11 = new Image();
	square11.src = SQUARE_11;
	var SQUARE_11_OBJ = new SQUARE(11, square11, 0, 79, 268, 132);
	
	square12 = new Image();
	square12.src = SQUARE_12;
	var SQUARE_12_OBJ = new SQUARE(12, square12, 197, 79, 227, 132);
	
	square13 = new Image();
	square13.src = SQUARE_13;
	var SQUARE_13_OBJ = new SQUARE(13, square13, 400, 79, 203, 132);
	
	square14 = new Image();
	square14.src = SQUARE_14;
	var SQUARE_14_OBJ = new SQUARE(14, square14, 579, 79, 224, 132);

	square15 = new Image();
	square15.src = SQUARE_15;
	var SQUARE_15_OBJ = new SQUARE(15, square15, 730, 79, 268, 132);
	
	square16 = new Image();
	square16.src = SQUARE_16;
	var SQUARE_16_OBJ = new SQUARE(16, square16, 884, 79, 116, 132);
	
	square20 = new Image();
	square20.src = SQUARE_20;
	var SQUARE_20_OBJ = new SQUARE(20, square20, 0, 211, 200, 170);
	
	square21 = new Image();
	square21.src = SQUARE_21;
	var SQUARE_21_OBJ = new SQUARE(21, square21, 108, 211, 293, 170);
	
	square22 = new Image();
	square22.src = SQUARE_22;
	var SQUARE_22_OBJ = new SQUARE(22, square22, 370, 211, 265, 170);
	
	square23 = new Image();
	square23.src = SQUARE_23;
	var SQUARE_23_OBJ = new SQUARE(23, square23, 604, 211, 293, 170);
	
	square24 = new Image();
	square24.src = SQUARE_24;
	var SQUARE_24_OBJ = new SQUARE(24, square24, 800, 211, 200, 170);

	square30 = new Image();
	square30.src = SQUARE_30;
	var SQUARE_30_OBJ = new SQUARE(30, square30, 0, 381, 106, 219);
	
	square31 = new Image();
	square31.src = SQUARE_31;
	var SQUARE_31_OBJ = new SQUARE(31, square31, 0, 381, 370, 219);
	
	square32 = new Image();
	square32.src = SQUARE_32;
	var SQUARE_32_OBJ = new SQUARE(32, square32, 332, 381, 342, 219);
	
	square33 = new Image();
	square33.src = SQUARE_33;
	var SQUARE_33_OBJ = new SQUARE(33, square33, 635, 381, 370, 219);
	
	square34 = new Image();
	square34.src = SQUARE_34;
	var SQUARE_34_OBJ = new SQUARE(34, square34, 894, 381, 106, 219);

	SQUARE_ARRAY.push(SQUARE_00_OBJ, SQUARE_01_OBJ, SQUARE_02_OBJ, SQUARE_03_OBJ, SQUARE_04_OBJ, SQUARE_05_OBJ, SQUARE_06_OBJ, SQUARE_07_OBJ, SQUARE_08_OBJ, SQUARE_10_OBJ, SQUARE_11_OBJ, SQUARE_12_OBJ, SQUARE_13_OBJ, SQUARE_14_OBJ, SQUARE_15_OBJ, SQUARE_16_OBJ, SQUARE_20_OBJ, SQUARE_21_OBJ, SQUARE_22_OBJ, SQUARE_23_OBJ, SQUARE_24_OBJ, SQUARE_30_OBJ, SQUARE_31_OBJ, SQUARE_32_OBJ, SQUARE_33_OBJ, SQUARE_34_OBJ);
	console.log(SQUARE_ARRAY);
}