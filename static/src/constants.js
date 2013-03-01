// constants.js
var SQUARE_ARRAY = [];

var square00;
var square01;
var square02;
var square03;
var square04;
var square05;
var square06;
var square07;
var square08;
var square10;
var square11;
var square12;
var square13;
var square14;
var square15;
var square16;
var square20;
var square21;
var square22;
var square23;
var square24;
var square30;
var square31;
var square32;
var square33;
var square34;

var square00L;
var square01L;
var square02L;
var square03L;
var square04L;
var square05L;
var square06L;
var square07L;
var square08L;
var square10L;
var square11L;
var square12L;
var square13L;
var square14L;
var square15L;
var square16L;
var square20L;
var square21L;
var square22L;
var square23L;
var square24L;
var square30L;
var square31L;
var square32L;
var square33L;
var square34L;

var SQUARE_00 = "img/00.png";
var SQUARE_01 = "img/01.png";
var SQUARE_02 = "img/02.png";
var SQUARE_03 = "img/03.png";
var SQUARE_04 = "img/04.png";
var SQUARE_05 = "img/05.png";
var SQUARE_06 = "img/06.png";
var SQUARE_07 = "img/07.png";
var SQUARE_08 = "img/08.png";
var SQUARE_10 = "img/10.png";
var SQUARE_11 = "img/11.png";
var SQUARE_12 = "img/12.png";
var SQUARE_13 = "img/13.png";
var SQUARE_14 = "img/14.png";
var SQUARE_15 = "img/15.png";
var SQUARE_16 = "img/16.png";
var SQUARE_20 = "img/20.png";
var SQUARE_21 = "img/21.png";
var SQUARE_22 = "img/22.png";
var SQUARE_23 = "img/23.png";
var SQUARE_24 = "img/24.png";
var SQUARE_30 = "img/30.png";
var SQUARE_31 = "img/31.png";
var SQUARE_32 = "img/32.png";
var SQUARE_33 = "img/33.png";
var SQUARE_34 = "img/34.png";

var SQUARE_00L = "img/00L.png";
var SQUARE_01L = "img/01L.png";
var SQUARE_02L = "img/02L.png";
var SQUARE_03L = "img/03L.png";
var SQUARE_04L = "img/04L.png";
var SQUARE_05L = "img/05L.png";
var SQUARE_06L = "img/06L.png";
var SQUARE_07L = "img/07L.png";
var SQUARE_08L = "img/08L.png";
var SQUARE_10L = "img/10L.png";
var SQUARE_11L = "img/11L.png";
var SQUARE_12L = "img/12L.png";
var SQUARE_13L = "img/13L.png";
var SQUARE_14L = "img/14L.png";
var SQUARE_15L = "img/15L.png";
var SQUARE_16L = "img/16L.png";
var SQUARE_20L = "img/20L.png";
var SQUARE_21L = "img/21L.png";
var SQUARE_22L = "img/22L.png";
var SQUARE_23L = "img/23L.png";
var SQUARE_24L = "img/24L.png";
var SQUARE_30L = "img/30L.png";
var SQUARE_31L = "img/31L.png";
var SQUARE_32L = "img/32L.png";
var SQUARE_33L = "img/33L.png";
var SQUARE_34L = "img/34L.png";

var SERGEY = "";
var SERGEYLEFT1 = "characters/sergeyleft1.png";
var SERGEYLEFT2 = "characters/sergeyleft2.png";
var SERGEYRIGHT1 = "characters/sergeyright1.png";
var SERGEYRIGHT2 = "characters/sergeyright2.png";
var SERGEYUP1 = "characters/sergeyup1.png";
var SERGEYUP2 = "characters/sergeyup2.png";
var SERGEYDOWN1 = "characters/sergeydown1.png";
var SERGEYDOWN2 = "characters/sergeydown2.png";

var BILL = "";
var BILLLEFT1 = "characters/billleft1.png";
var BILLLEFT2 = "characters/billleft2.png";
var BILLRIGHT1 = "characters/billright1.png";
var BILLRIGHT2 = "characters/billright2.png";
var BILLUP1 = "characters/billup1.png";
var BILLUP2 = "characters/billup2.png";
var BILLDOWN1 = "characters/billdown1.png";
var BILLDOWN2 = "characters/billdown2.png";

var STEVE = "";
var STEVELEFT1 = "characters/steveleft1.png";
var STEVELEFT2 = "characters/steveleft2.png";
var STEVERIGHT1 = "characters/steveright1.png";
var STEVERIGHT2 = "characters/steveright2.png";
var STEVEUP1 = "characters/steveup1.png";
var STEVEUP2 = "characters/steveup2.png";
var STEVEDOWN1 = "characters/stevedown1.png";
var STEVEDOWN2 = "characters/stevedown2.png";

var MARK = "";
var MARKLEFT1 = "characters/markleft1.png";
var MARKLEFT2 = "characters/markleft2.png";
var MARKRIGHT1 = "characters/markright1.png";
var MARKRIGHT2 = "characters/markright2.png";
var MARKUP1 = "characters/markup1.png";
var MARKUP2 = "characters/markup2.png";
var MARKDOWN1 = "characters/markdown1.png";
var MARKDOWN2 = "characters/markdown2.png";
var PLAYER_HEIGHT = 150;
var PLAYER_WIDTH = 100;
var PLAYER_POS;

var NUM_STEPS = -1;
var STEP_TIME = 1000;

var bank;
var BANK = "img/bank.png";
var BANK_WIDTH = 230;
var BANK_HEIGHT = 230;

var tree;
var TREE = "img/tree.png";
var TREE_WIDTH = 100;
var TREE_HEIGHT = 200;

var GAME_ARRAY_WIDTH = 21;
var GAME_ARRAY_HEIGHT = 16;

// 0 = grass square, 1 = game board square, -1 = bank
//1 = up, 2 = right 3= down 4 = left, 5= up/down 6 = down/right 8=left/down 9= left/up
 var GAME_ARRAY = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
				   [0, 0, 0, 2, 2, 2, 2, 3, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0],
				   [0, 0, 0, 1, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
				   [0, 0, 2, 1, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 4, 8, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 4, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 6, 2, 2, 2, 2, 5, 0, 0, 0, 3, 4, 0, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 3, 4, 0, 0, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 4, 4, 4, 4, 9, 0, 3, 4, 0, 0, 0, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 5, 4, 4, 0, 0, 0, 0, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 3, 0, 3, 4, 4, 4, 4, 0, 3, 0, 0],
				   [0, 0, 1, 0, 0, 1, 0, 3, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 1, 0, 3, 0, 0],
				   [0, 0, 1, 4, 4, 9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 4, 4, 0, 0],
				   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
 

var DRAW_GAME_ARRAY = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
				  [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 1, 1, 1, 0, 0],
				  [0, 0, 1, 0, -1, 1, 0, 1, 0, -2, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, -1, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, -1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, -1, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
				  [0, -1, 1, 0, 0, 1, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, -1, 1, 0, 0],
				  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
 				  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

