function Arrow()
{
	//console.log("happening");
	this.direction;
	this.x;
	this.y;
	this.img;
	var random = Math.floor(Math.random() * 4) + 1;
	//console.log(String(random));
	switch (random)
	{
		// will make arrow objects in constants and then push them
		case 1:
			this.direction = "up";
			this.x = ARROW_UP_X;
			this.y = SLIDE_HEIGHT;
			this.img = arrowUpImg;
			//console.log("up");
			break;
		case 2:
			this.direction = "down";
			//console.log(ARROW_DISTANCE);
			this.x = ARROW_DOWN_X;
			this.y = SLIDE_HEIGHT;
			this.img = arrowDownImg;
			//console.log("down");
			break;
		case 3:
			this.direction = "right";
			this.x = ARROW_RIGHT_X;
			this.y = SLIDE_HEIGHT;
			this.img = arrowRightImg;
			//console.log("right");
			break;
		case 4:
			this.direction = "left";
			this.x = ARROW_LEFT_X;
			this.y = SLIDE_HEIGHT;
			this.img = arrowLeftImg;
			//console.log("left");
			break;
	}
}