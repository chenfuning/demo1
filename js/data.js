var dataObj=function(){
	this.fruitNum=0;
	
	this.score=0;
	
	this.gameover=false;
}
dataObj.prototype.draw=function(){
	var w=can2.width;
	var h=can1.height;
	  ctx3.save();
	  ctx3.clearRect(0,0,canWidth,canHeight);
	ctx3.font="40px normal";
	  ctx3.fillStyle="red";
//	  ctx1.fillText("num"+this.fruitNum,w*0.5,h-50);
//	  ctx1.fillText("double"+this.double,w*0.5,h-80);
	  ctx3.fillText("分数"+this.score,w*0.45,h-550);
	   document.getElementById("num").value=this.score;
	  if(this.gameover){
	  	ctx3.fillText("GAMEOVER",w*0.4,h*0.5);
	  }
	  	ctx3.restore();
}
dataObj.prototype.addScore=function(){
	this.score+=this.fruitNum*10;
	this.fruitNum=0;
	this.double=1;
}