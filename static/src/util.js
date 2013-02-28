function SQUARE(location, img, imgL, x, y, w, h)
{
	this.location = location;
	this.img = img;
	this.imgL = imgL;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
}

function LOAD_PLAYERS()
{
	sergeyleft1 = new Image();
	sergeyleft1.src = SERGEYLEFT1;
	sergeyleft2 = new Image();
	sergeyleft2.src = SERGEYLEFT2;
	sergeyright1 = new Image();
	sergeyright1.src = SERGEYRIGHT1;
	sergeyright2 = new Image();
	sergeyright2.src = SERGEYRIGHT2;
	sergeyup1 = new Image();
	sergeyup1.src = SERGEYUP1;
	sergeyup2 = new Image();
	sergeyup2.src = SERGEYUP2;
	sergeydown1 = new Image();
	sergeydown1.src = SERGEYDOWN1;
	sergeydown2 = new Image();
	sergeydown2.src = SERGEYDOWN2;
	SERGEY = sergeydown1;
}

function LOAD_GAME_ELEMS()
{
	bank = new Image();
	bank.src = BANK;
	tree = new Image();
	tree.src = TREE;
}

function PLAYER_POSITION(row, col)
{
	this.row = row;
	this.col = col;
}

function MAKE_SQUARES()
{
	square00 = new Image();
	square00.src = SQUARE_00;
	square00L = new Image();
	square00L.src = SQUARE_00L;
	var SQUARE_00_OBJ = new SQUARE(00, square00, square00L, 0, 0, 68, 62);
	
	square01 = new Image();
	square01.src = SQUARE_01;
	square01L = new Image();
	square01L.src = SQUARE_01L;
	var SQUARE_01_OBJ = new SQUARE(01, square01, square01L, 2, 0, 195, 86);
	
	square02 = new Image();
	square02.src = SQUARE_02;
	square02L = new Image();
	square02L.src = SQUARE_02L;
	var SQUARE_02_OBJ = new SQUARE(02, square02, square02L, 114, 0, 207, 86);
	
	square03 = new Image();
	square03.src = SQUARE_03;
	square03L = new Image();
	square03L.src = SQUARE_03L;
	var SQUARE_03_OBJ = new SQUARE(03, square03, square03L, 268, 0, 176, 86);
	
	square04 = new Image();
	square04.src = SQUARE_04;
	square04L = new Image();
	square04L.src = SQUARE_04L;
	var SQUARE_04_OBJ = new SQUARE(04, square04, square04L, 423, 0, 161, 86);

	square05 = new Image();
	square05.src = SQUARE_05;
	square05L = new Image();
	square05L.src = SQUARE_05L;
	var SQUARE_05_OBJ = new SQUARE(05, square05, square05L, 563, 0, 172, 86);
	
	square06 = new Image();
	square06.src = SQUARE_06;
	square06L = new Image();
	square06L.src = SQUARE_06L;
	var SQUARE_06_OBJ = new SQUARE(06, square06, square06L, 682, 0, 207, 86);

	square07 = new Image();
	square07.src = SQUARE_07;
	square07L = new Image();
	square07L.src = SQUARE_07L;
	var SQUARE_07_OBJ = new SQUARE(07, square07, square07L, 804, 0, 195, 86);
	
	square08 = new Image();
	square08.src = SQUARE_08;
	square08L = new Image();
	square08L.src = SQUARE_08L;
	var SQUARE_08_OBJ = new SQUARE(08, square08, square08L, 930, 0, 67, 55);
	
	square10 = new Image();
	square10.src = SQUARE_10;
	square10L = new Image();
	square10L.src = SQUARE_10L;
	var SQUARE_10_OBJ = new SQUARE(10, square10, square10L, 0, 85, 116, 126);
	
	square11 = new Image();
	square11.src = SQUARE_11;
	square11L = new Image();
	square11L.src = SQUARE_11L;
	var SQUARE_11_OBJ = new SQUARE(11, square11, square11L, 0, 85, 277, 126);
	
	square12 = new Image();
	square12.src = SQUARE_12;
	square12L = new Image();
	square12L.src = SQUARE_12L;
	var SQUARE_12_OBJ = new SQUARE(12, square12, square12L, 198, 85, 227, 126);
	
	square13 = new Image();
	square13.src = SQUARE_13;
	square13L = new Image();
	square13L.src = SQUARE_13L;
	var SQUARE_13_OBJ = new SQUARE(13, square13, square13L, 400, 85, 204, 126);
	
	square14 = new Image();
	square14.src = SQUARE_14;
	square14L = new Image();
	square14L.src = SQUARE_14L;
	var SQUARE_14_OBJ = new SQUARE(14, square14, square14L, 580, 85, 224, 126);

	square15 = new Image();
	square15.src = SQUARE_15;
	square15L = new Image();
	square15L.src = SQUARE_15L;
	var SQUARE_15_OBJ = new SQUARE(15, square15, square15L, 730, 85, 268, 126);
	
	square16 = new Image();
	square16.src = SQUARE_16;	
	square16L = new Image();
	square16L.src = SQUARE_16L;
	var SQUARE_16_OBJ = new SQUARE(16, square16, square16L, 884, 85, 116, 126);
	
	square20 = new Image();
	square20.src = SQUARE_20;
	square20L = new Image();
	square20L.src = SQUARE_20L;
	var SQUARE_20_OBJ = new SQUARE(20, square20, square20L, 0, 211, 200, 170);
	
	square21 = new Image();
	square21.src = SQUARE_21;
	square21L = new Image();
	square21L.src = SQUARE_21L;
	var SQUARE_21_OBJ = new SQUARE(21, square21, square21L, 108, 211, 293, 170);
	
	square22 = new Image();
	square22.src = SQUARE_22;
	square22L = new Image();
	square22L.src = SQUARE_22L;
	var SQUARE_22_OBJ = new SQUARE(22, square22, square22L, 370, 211, 265, 170);
	
	square23 = new Image();
	square23.src = SQUARE_23;
	square23L = new Image();
	square23L.src = SQUARE_23L;
	var SQUARE_23_OBJ = new SQUARE(23, square23, square23L, 604, 211, 293, 170);
	
	square24 = new Image();
	square24.src = SQUARE_24;
	square24L = new Image();
	square24L.src = SQUARE_24L;
	var SQUARE_24_OBJ = new SQUARE(24, square24, square24L, 800, 211, 200, 170);

	square30 = new Image();
	square30.src = SQUARE_30;
	square30L = new Image();
	square30L.src = SQUARE_30L;
	var SQUARE_30_OBJ = new SQUARE(30, square30, square30L, 0, 381, 106, 219);
	
	square31 = new Image();
	square31.src = SQUARE_31;
	square31L = new Image();
	square31L.src = SQUARE_31L;
	var SQUARE_31_OBJ = new SQUARE(31, square31, square31L, 0, 381, 370, 219);
	
	square32 = new Image();
	square32.src = SQUARE_32;
	square32L = new Image();
	square32L.src = SQUARE_32L;
	var SQUARE_32_OBJ = new SQUARE(32, square32, square32L, 332, 381, 342, 219);
	
	square33 = new Image();
	square33.src = SQUARE_33;
	square33L = new Image();
	square33L.src = SQUARE_33L;
	var SQUARE_33_OBJ = new SQUARE(33, square33, square33L, 635, 381, 370, 219);
	
	square34 = new Image();
	square34.src = SQUARE_34;
	square34L = new Image();
	square34L.src = SQUARE_34L;
	var SQUARE_34_OBJ = new SQUARE(34, square34, square34L, 894, 381, 106, 219);

	SQUARE_ARRAY.push(SQUARE_00_OBJ, SQUARE_01_OBJ, SQUARE_02_OBJ, SQUARE_03_OBJ, SQUARE_04_OBJ, SQUARE_05_OBJ, SQUARE_06_OBJ, SQUARE_07_OBJ, SQUARE_08_OBJ, SQUARE_10_OBJ, SQUARE_11_OBJ, SQUARE_12_OBJ, SQUARE_13_OBJ, SQUARE_14_OBJ, SQUARE_15_OBJ, SQUARE_16_OBJ, SQUARE_20_OBJ, SQUARE_21_OBJ, SQUARE_22_OBJ, SQUARE_23_OBJ, SQUARE_24_OBJ, SQUARE_30_OBJ, SQUARE_31_OBJ, SQUARE_32_OBJ, SQUARE_33_OBJ, SQUARE_34_OBJ);
}