var fruitObj=function(){
	this.alive=[];//bool
	this.x=[];
	this.y=[];

	this.fruitType=[];//果实类型
	this.candy=new Image();
	this.candyblue=new Image();
}
	fruitObj.prototype.num=15;
	fruitObj.prototype.init=function(){
	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.born(i);
		this.fruitType[i]="candy";
		
	}
	this.candy.src="img/candy.jpg";
	this.candyblue.src="img/candyblue.png";
}
	fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		if(this.alive[i]=true){
			//判断果实类型
			if(this.fruitType[i]=="candy"){
				var pic=this.candy;
			}
			else{var pic=this.candyblue;}
			ctx2.drawImage(pic,this.x[i]+5,this.y[i]-20);
		}
	}
	}
	fruitObj.prototype.born=function(i){
	var tableID=Math.floor(Math.random()*table.num);
	this.x[i]=table.x[tableID];
	this.y[i]=table.y[tableID];

	this.alive[i]=true;
	var ran=Math.random();
if(ran<0.1){
	this.fruitType[i]="candy";
}
	else{this.fruitType[i]="candyblue";}
	
}
	
	fruitObj.prototype.dead=function(i){
	this.alive[i]=false;
}
	function fruitMonitor(){
	//统计存活的果实
	var num=0;
	for(var i=0;i<fruit.num;i++){
		
		if(fruit.alive[i]){num++}
	}
	if(!fruit.alive[i]<10){
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return; 
		}
	}
}