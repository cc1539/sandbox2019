
var mouseX_lag;
var mouseY_lag;

class Star {

  constructor(time) {
		this.reset(time);
	}
	
	reset(time) {
		this.time = time | 0;
		var angle = random(0,TWO_PI);
		var range = sqrt(random(1/8,1))*300;
		this.x = range*cos(angle);
		this.y = range*sin(angle);
		this.size = random(5,50);
	}

	move() {
		this.time += 3;
		var scale = 100;
		if(abs(this.x*this.time)>window.innerWidth*scale ||
		   abs(this.y*this.time)>window.innerHeight*scale) {
			this.reset();
		}
	}
	
	draw() {
		push();
		var offset_x = mouseX_lag-window.innerWidth/2;
		var offset_y = mouseY_lag-window.innerHeight/2;
		translate(
				this.x+offset_x*.1,
				this.y+offset_y*.1,
				this.time);
		stroke(255-min(this.time,16));
		box(min(this.time/10,this.size));
		pop();
	}
	
}

var stars = [];

function setup() {
	
  createCanvas(window.innerWidth,window.innerHeight,WEBGL);
	
	var star_count = 50;
	for(var i=0;i<star_count;i++) {
		stars.push(new Star(i/star_count*500));
	}
	
	mouseX_lag = mouseX;
	mouseY_lag = mouseY;
}

function draw() {
	mouseX_lag += (mouseX-mouseX_lag)*.05;
	mouseY_lag += (mouseY-mouseY_lag)*.05;
  clear();
	noFill();
	for(var i=0;i<stars.length;i++) {
		stars[i].move();
		stars[i].draw();
	}
}

function windowResized() {
	resizeCanvas(window.innerWidth,window.innerHeight);
}
