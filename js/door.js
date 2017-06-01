var doorObj=function(){
	
this.x;
this.y;
this.doortype;
	this.dooropen=new Image();
	this.doorclose=new Image();
}

doorObj.prototype.init=function(){
	this.x=canWidth*0.5;
	this.y=canHeight;
	
		this.doortype="open";
	
	this.dooropen.src="img/dooropen.png";
	this.doorclose.src="img/doorclose.png";
 }
doorObj.prototype.draw=function(){
	ctx1.save();
	if(mom.y<(canHeight-80))

	ctx1.drawImage(this.dooropen,this.x-58,this.y-140);
	else if(mom.y>canHeight*0.9){ data.gameover=true;}
	else{
	ctx1.clearRect(0,0,canWidth,canHeight);
	ctx1.drawImage(this.doorclose,this.x-58,this.y-77);

	ctx1.restore();	
	}
}


