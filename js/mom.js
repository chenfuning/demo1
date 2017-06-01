var momObj = function() {
	this.x;
	this.y;
	this.angle;
	//	this.body=new Image();
	this.babytimer = 0;
	this.babyCount = 0;

}
momObj.prototype.init = function() {
	this.x = canWidth * 0.45;
	this.y = canHeight * 0.8;
	this.angle = 0;
	//	this.body.src="img/babyFade0.png";

}
momObj.prototype.draw = function() {
	this.x = lerpDistance(mx, this.x, 0.97);
	this.y = lerpDistance(my, this.y, 0.97);

	var deltaY = my - this.y;
	var deltaX = mx - this.x;
	var beta = Math.atan2(deltaY, deltaX) - Math.PI / 2; //返回的角度差+math.pi
	this.angle = lerpAngle(beta, this.angle, 0.6);

	this.babytimer += deltaTime;
	if(this.babytimer > 100) {
		this.babyCount = (this.babytimer + 1) % 3; //有循环的技术数学
		this.babytimer %= 100;
	}

	ctx2.save();

	ctx2.translate(this.x, this.y); //设原点
	ctx2.rotate(this.angle);
	var babyCount = this.babyCount;
	ctx2.drawImage(baby[babyCount], -baby[babyCount].width * 0.5 + 23, -baby[babyCount].height * 0.5);
	ctx2.restore();

}