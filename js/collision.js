function momFruitCollision() {
	if(!data.gameover) {
		for(var i = 0; i < fruit.num; i++) {
			if(fruit.alive[i]) {
				var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if(l < 2500) {
					fruit.dead(i);
					data.fruitNum++;
					data.addScore();
				}
			}
		}
	}
}