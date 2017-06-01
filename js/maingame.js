var can1; //画布1
var can2;
var can3;

var ctx1; //场景1
var ctx2;
var ctx3;

var canWidth;
var canHeight;
var bgPic = new Image();
var table;
var fruit;

var mx; //鼠标
var my;
var mom;
var door;
var data;

var baby = [];
document.body.onload = game; //在加载完body后执行game方法，game作为入口
function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {

	//获取canvas
	can1 = document.getElementById("canvas1"); //js获取html,前画布
	ctx1 = can1.getContext('2d'); //获得画笔
	can2 = document.getElementById("canvas2"); //js获取html，后画布
	ctx2 = can2.getContext('2d'); //获得画笔
	can3 = document.getElementById("canvas3"); //js获取html，后画布
	ctx3 = can3.getContext('2d'); //获得画笔

	can3.addEventListener('click', onMouseMove, false); //检测鼠标的位置
	//	can2.addEventListener('click',onMouseMove, false);//检测鼠标的位置
	bgPic.src = "img/background1.jpg";
	canWidth = can2.width;
	canHeight = can2.height;
	table = new tableObj();
	table.init();
	fruit = new fruitObj();
	fruit.init();
	mx = canWidth * 0.5;
	my = canHeight * 0.5;
	mom = new momObj();
	mom.init();
	door = new doorObj();
	door.init();
	data = new dataObj();

	//小鱼尾巴序列帧放到babytail【】数组里
	for(var i = 0; i <= 3; i++) {
		baby[i] = new Image();
		baby[i].src = "img/man" + i + ".png";
	}
}

function gameloop() {
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime > 40) deltaTime = 40;
	//	console.log(deltaTime);
	drawBackground();
	table.draw();
	fruitMonitor();
	fruit.draw();

	mom.draw();
	momFruitCollision();
	door.draw();
	//	gameclose();
	data.draw();
}

function onMouseMove(e) {

	if(e.offsetX || e.layerX) {
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;
		console.log(mx);
	}

}