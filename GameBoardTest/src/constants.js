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

var player;
var PLAYER = "img/playerDown.png";
var PLAYER_HEIGHT = 200;
var PLAYER_WIDTH = 150;
var PLAYER_POS;

var bank;
var BANK = "img/bank.png";
var BANK_WIDTH = 230;
var BANK_HEIGHT = 230;

var GAME_ARRAY_WIDTH = 21;
var GAME_ARRAY_HEIGHT = 16;
// 0 = grass square, 1 = game board square, -1 = bank
var GAME_ARRAY = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				  [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
				  [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 1, -1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, -1, 1, 1, 0, 1, 0, 0],
				  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
				  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
				  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
