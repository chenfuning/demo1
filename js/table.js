var tableObj=function(){
	this.x=[];
	this.len=[];
	this.y=[];
	
}
tableObj.prototype.num=10;
tableObj.prototype.init=function(){
	
		this.x=[150,150,150,150,150,600,600,600,600,600];
		this.len=[75,75,75,75,75,75,75,75,75,75];
		this.y=[50,150,250,350,450,50,150,250,350,450];
	}
//	console.log("a");
tableObj.prototype.draw=function(){
	ctx2.save();
	ctx2.globalAlpha=1;
	ctx2.lineWidth=60;
	ctx2.lineCap="round";
	ctx2.strokeStyle="#8B2500";
	
		for(var i=0;i<this.num;i++){
			ctx2.beginPath();
			ctx2.moveTo(this.x[i],this.y[i]);
			ctx2.lineTo(this.x[i]+this.len[i],this.y[i]);
			
			ctx2.stroke();
			

		}
			ctx2.restore();
	}

