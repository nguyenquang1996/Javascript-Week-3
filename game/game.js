/**
 * @author Nguyễn Thanh Nhật Quang <six3up@gmail.com>
 * version 1.0
 */

var _canvas; //Call document.getElementById('canvas');
var _context; //Call canvas.getContext('2d');
var _ball; //main.
var _ball1; //extra.
var _ball2; //extra.
var _ball3; //extra.
var _ball4; //extra.
var _ball5; //extra.
var _ball7; //extra.
var _ball6; //extra.
var _ball8; //extra.
var point; //Call document.getElementById('point');
var pointmax; //Call document.getElementById('pointmax');
var pausegame; // pause game.
var pausetextgame; // show text pause game.
var temp = 0; //pause = false;
var i = 0; //score.
var boom; //boom.

/** 
 * [identify size Ball main.]
 * @param {[type]} mapWidth  [width canvas]
 * @param {[type]} mapHeight [height canvas]
 */
function Ball(mapWidth, mapHeight) {
	this.mapWidth = mapWidth;
	this.mapHeight = mapHeight;
	this.radius = 20;
	this.speedX = 3;//increase 3 (ox).
	this.SpeedY = 3;//increase 3 (oy).
	this.cx = Math.floor(Math.random() * (this.mapWidth - 2 * this.radius)) + this.radius;//mind.O(cx,cy).
	this.cy = Math.floor(Math.random() * (this.mapHeight - 2 * this.radius)) + this.radius;//mind.O(cx,cy).
}

/** 
 * [identify size Ball1 extra.]
 */
function Ball1() {
	this.radius = 20;
	this.speedX = 3;//increase 3 (ox).
	this.SpeedY = 3;//increase 3 (oy).
	this.show = true;//show ball1.
	this.cx = 20;//mind.O(cx,cy).
	this.cy = 20;//mind.O(cx,cy).
}

/** 
 * [identify size Ball2 extra.]
 */
function Ball2() {
	this.radius = 20;
	this.SpeedY = 3;//increase 3 (oy).
	this.show = true;//show ball2.
	this.cx = 300;//mind.O(cx,cy).
	this.cy = 20;//mind.O(cx,cy).
}

/** 
 * [identify size Ball3 extra.]
 */
function Ball3() {
	this.radius = 20;
	this.speedX = -3;//reduce 3 (ox).
	this.SpeedY = 3;//increase 3 (oy).
	this.show = true;//show ball3.
	this.cx = 580;//mind.O(cx,cy).
	this.cy = 20;//mind.O(cx,cy).
}

/** 
 * [identify size Ball3 extra.]
 */
function Ball4() {
	this.radius = 20;
	this.speedX = -3;//reduce 3 (ox).
	this.show = true;//show ball4.
	this.cx = 580;//mind.O(cx,cy).
	this.cy = 300;//mind.O(cx,cy).
}

function Ball5() {
	this.radius = 20;
	this.speedX = -3;//reduce 3 (ox).
	this.SpeedY = -3;//reduce 3 (oy).
	this.show = true;//show ball5.
	this.cx = 580;//mind.O(cx,cy).
	this.cy = 580;//mind.O(cx,cy).
}

function Ball6() {
	this.radius = 20;
	this.SpeedY = -3;//reduce 3 (oy).
	this.show = true;//show ball6.
	this.cx = 300;//mind.O(cx,cy).
	this.cy = 580;//mind.O(cx,cy).
}

function Ball7() {
	this.radius = 20;
	this.speedX = 3;//increase 3 (ox).
	this.SpeedY = -3;//reduce 3 (oy).
	this.show = true;//show ball7.
	this.cx = 20;//mind.O(cx,cy).
	this.cy = 580;//mind.O(cx,cy).
}


function Ball8() {
	this.radius = 20;
	this.speedX = 3;//increase 3 (oy).
	this.show = true;//show ball8.
	this.cx = 20;//mind.O(cx,cy).
	this.cy = 300;//mind.O(cx,cy).
}

/** 
 * [draw ball main]
 * @param  {[type]} context [description]
 */
Ball.prototype.draw = function(context) {
	context.beginPath();
	context.fillStyle = "black";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
}

/** 
 * [draw ball1 main]
 * @param  {[type]} context [description]
 */
Ball1.prototype.draw = function(context) {
	if(this.show === true) {
	context.beginPath();
	context.fillStyle = "red";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
	}
}

/** 
 * [draw ball2 main]
 * @param  {[type]} context [description]
 */
Ball2.prototype.draw = function(context) {
	if(this.show === true) {
	context.beginPath();
	context.fillStyle = "green";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
	}
}

/** 
 * [draw ball3 main]
 * @param  {[type]} context [description]
 */
Ball3.prototype.draw = function(context) {
	if(this.show === true) {
	context.beginPath();
	context.fillStyle = "blue";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
	}
}

/** 
 * [draw ball4 main]
 * @param  {[type]} context [description]
 */
Ball4.prototype.draw = function(context) {
	if(this.show === true) {
	context.beginPath();
	context.fillStyle = "yellow";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
	}
}

/** 
 * [draw ball5 main]
 * @param  {[type]} context [description]
 */
Ball5.prototype.draw = function(context) {
	if(this.show === true) {
	context.beginPath();
	context.fillStyle = "purple";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
	}
}

/** 
 * [draw ball6 main]
 * @param  {[type]} context [description]
 */
Ball6.prototype.draw = function(context) {
	if(this.show === true) {
	context.beginPath();
	context.fillStyle = "pink";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
	}
}

/** 
 * [draw ball7 main]
 * @param  {[type]} context [description]
 */
Ball7.prototype.draw = function(context) {
	if(this.show === true) {
	context.beginPath();
	context.fillStyle = "gray";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
	}
}

/** 
 * [draw ball8 main]
 * @param  {[type]} context [description]
 */
Ball8.prototype.draw = function(context) {
	if(this.show === true) {
	context.beginPath();
	context.fillStyle = "orange";
	context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2);//O(x,y) | R | 360.(0->Pi*2).
	context.closePath();
	context.fill();
	}
}

/** 
 * [move ball]
 */
Ball.prototype.move = function() {
	this.cx += this.speedX;//change coordinates ox
	this.cy += this.SpeedY;//change coordinates oy
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
}

/** 
 * [move ball1]
 */
Ball1.prototype.move = function() {
	this.cx += this.speedX;//change coordinates ox
	this.cy += this.SpeedY;//change coordinates oy
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
}

/** 
 * [move ball2]
 */
Ball2.prototype.move = function() {
	this.cy += this.SpeedY;//change coordinates oy
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
}

/** 
 * [move ball3]
 */
Ball3.prototype.move = function() {
	this.cx += this.speedX;//change coordinates ox
	this.cy += this.SpeedY;//change coordinates oy
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
}

/** 
 * [move ball4]
 */
Ball4.prototype.move = function() {
	this.cx += this.speedX;
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
}

/** 
 * [move ball5]
 */
Ball5.prototype.move = function() {
	this.cx += this.speedX;//change coordinates ox
	this.cy += this.SpeedY;//change coordinates oy
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
}

/** 
 * [move ball6]
 */
Ball6.prototype.move = function() {
	this.cy += this.SpeedY;//change coordinates oy
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
	
}

/** 
 * [move ball7]
 */
Ball7.prototype.move = function() {
	this.cx += this.speedX;//change coordinates ox
	this.cy += this.SpeedY;//change coordinates oy
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
}

/** 
 * [move ball8]
 */
Ball8.prototype.move = function() {
	this.cx += this.speedX;//change coordinates ox
	this.left = this.cx - this.radius;//record left.
	this.top = this.cy - this.radius;//record top
	this.right = this.cx + this.radius;//record right.
	this.bottom = this.cy + this.radius;//record bottom.
}

/** 
 * [checkCollision ball] change coordinates when ball border crossing canvas. 
 */
Ball.prototype.checkCollision = function() {
	if(this.left <= 0 || this.right >= this.mapWidth) {
		this.speedX = -this.speedX;
	}
	if(this.top <= 0 || this.bottom >= this.mapHeight) {
		this.SpeedY = -this.SpeedY;
	}
}

/** 
 * [checkCollision ball1] change coordinates when ball border crossing canvas. 
 */
Ball1.prototype.checkCollision = function() {
	if(this.left <= 0) {
		this.speedX = -this.speedX;
		this.SpeedY = -this.SpeedY;
	}

	if(this.right > 300) {
		this.speedX = -this.speedX;
		this.SpeedY = -this.SpeedY;
	}
}

/** 
 * [checkCollision ball2] change coordinates when ball border crossing canvas. 
 */
Ball2.prototype.checkCollision = function() {
	if(this.top <= 0) {
		this.SpeedY = -this.SpeedY;
	}
	if(this.bottom > 300) {
		this.SpeedY = -this.SpeedY;
	}
}

/** 
 * [checkCollision ball3] change coordinates when ball border crossing canvas. 
 */
Ball3.prototype.checkCollision = function() {
	if(this.right < 600) {
		this.speedX = -this.speedX;
		this.SpeedY = -this.SpeedY;
	}

	if(this.left > 300) {
		this.speedX = -this.speedX;
		this.SpeedY = -this.SpeedY;
	}
}

/** 
 * [checkCollision ball4] change coordinates when ball border crossing canvas. 
 */
Ball4.prototype.checkCollision = function() {
	if(this.left < 300) {
		this.speedX = -this.speedX;
	}

	if(this.right > 600) {
		this.speedX = -this.speedX;
	}
}

/** 
 * [checkCollision ball5] change coordinates when ball border crossing canvas. 
 */
Ball5.prototype.checkCollision = function() {
	if(this.left < 300) {
		this.speedX = -this.speedX;
		this.SpeedY = -this.SpeedY;
	}

	if(this.right > 600) {
		this.speedX = -this.speedX;
		this.SpeedY = -this.SpeedY;
	}
}

/** 
 * [checkCollision ball6] change coordinates when ball border crossing canvas. 
 */
Ball6.prototype.checkCollision = function() {
	if(this.top > 300) {
		this.SpeedY = -this.SpeedY;
	}
	if(this.bottom < 600) {
		this.SpeedY = -this.SpeedY;
	}
}

/** 
 * [checkCollision ball7] change coordinates when ball border crossing canvas. 
 */
Ball7.prototype.checkCollision = function() {
	if(this.left < 0) {
		this.speedX = -this.speedX;
		this.SpeedY = -this.SpeedY;
	}

	if(this.right > 300) {
		this.speedX = -this.speedX;
		this.SpeedY = -this.SpeedY;
	}
}

/** 
 * [checkCollision ball8] change coordinates when ball border crossing canvas. 
 */
Ball8.prototype.checkCollision = function() {
	if(this.right > 300) {
		this.speedX = -this.speedX;
	}

	if(this.left < 0) {
		this.speedX = -this.speedX;
	}
}

/** 
 * [click ball main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		i = i + 1;
		_ball = new Ball(_canvas.width, _canvas.height); // create ball new.
		_ball.draw(_context); // call function draw
		_ball.move(); // call function move
		_ball.checkCollision(); // call function checkCollision
	} else {
		i--; // reduce score
	}
}

/** 
 * [click ball1 main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball1.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		time = 99;
		i = i + 2;
	} else {

	}
}

/** 
 * [click ball2 main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball2.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		time = 99;
		i = i + 2;
	} else {

	}
}

/** 
 * [click ball3 main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball3.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		time = 99;
		i = i + 2;
	} else {

	}
}

/** 
 * [click ball4 main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball4.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		time = 99;
		i = i + 2;
	} else {

	}
}

/** 
 * [click ball5 main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball5.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		time = 99;
		i = i + 2;
	} else {

	}
}

/** 
 * [click ball6 main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball6.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		time = 99;
		i = i + 2;
	} else {

	}
}

/** 
 * [click ball7 main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball7.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		time = 99;
		i = i + 2;
	} else {

	}
}

/** 
 * [click ball8 main] increase score when 0(x,y) - R < mouseX < O(x,y) + R and  0(x,y) - R < mouseY < O(x,y) + R
 * @param  {[type]} mousX [mouseX]
 * @param  {[type]} mousY [mouseY]
 */
Ball8.prototype.click = function(mousX, mousY) {
	if((this.cx - this.radius < mousX && mousX < this.cx + this.radius) && (this.cy - this.radius < mousY && mousY < this.cy + this.radius)) {
		time = 99;
		i = i + 2;
	} else {

	}
}

var time = 0; // time show new ball extra.
var rand = Math.floor((Math.random() * 8) + 1); // random ball extra (1->8).

/** 
 * [drawrandom] //draw ball extra.
 * when time = 100 => random ball extra new.
 * ball extra exist 100.
 */
function drawrandom() {
	time++;
	if(time === 100){
		rand = Math.floor((Math.random() * 8) + 1);
		time = 0;
	}
	switch(rand) {
		case 1:
			_ball1.draw(_context);
			break;
		case 2:
			_ball2.draw(_context);
			break;
		case 3:
			_ball3.draw(_context);
			break;
		case 4:
			_ball4.draw(_context);
			break;
		case 5:
			_ball5.draw(_context);
			break;
		case 6:
			_ball6.draw(_context);
			break;
		case 7:
			_ball7.draw(_context);
			break;
		case 8:
			_ball8.draw(_context);
			break;
	}
}

/** 
 * [runrandom] move and checkcollision ball extra.
 */
function runrandom() {
	switch(rand) {
		case 1:
			_ball1.move();
			_ball1.checkCollision();
			break;
		case 2:
			_ball2.move();
			_ball2.checkCollision();
			break;
		case 3:
			_ball3.move();
			_ball3.checkCollision();
			break;
		case 4:
			_ball4.move();
			_ball4.checkCollision();
			break;
		case 5:
			_ball5.move();
			_ball5.checkCollision();
			break;
		case 6:
			_ball6.move();
			_ball6.checkCollision();
			break;
		case 7:
			_ball7.move();
			_ball7.checkCollision();
			break;
		case 8:		
			_ball8.move();
			_ball8.checkCollision();
			break;
	}
}

/** 
 * [draw]
 */
function draw() {
	_context.clearRect(0, 0, _canvas.width, _canvas.height);// clear canvas.
	_ball.draw(_context);
	drawrandom();
}

/** 
 * [update]
 * if temp = 0 game runing.
 */
function update() {
	if(temp === 0) {
		_ball.move();
		_ball.checkCollision();
		draw();
		runrandom();
	} else {

	}

}

/** 
 * [js_click] event click button pause
 * temp = 1 => game pause.
 * temp = 0 => game run.
 */
function js_click() {
	if(temp === 0) {
		temp = 1;
		pausetextgame.style.margin = '0 0 0 20px';	
		pausetextgame.style.display = 'inline';
	} else {
		temp = 0;
		pausetextgame.style.display = 'none';
	}
}

/** 
 * [js_boom] event click button boom
 * create new 2 ball (ball main, ball extra).
 */
function js_boom() {
	time = 99;
	_ball = new Ball(_canvas.width, _canvas.height);//create ball
	_ball1 = new Ball1(_canvas.width, _canvas.height);//create ball1
	_ball2 = new Ball2(_canvas.width, _canvas.height);//create ball2
	_ball3 = new Ball3(_canvas.width, _canvas.height);//create ball3
	_ball4 = new Ball4(_canvas.width, _canvas.height);//create ball4
	_ball5 = new Ball5(_canvas.width, _canvas.height);//create ball5
	_ball6 = new Ball6(_canvas.width, _canvas.height);//create ball6
	_ball7 = new Ball7(_canvas.width, _canvas.height);//create ball7
	_ball8 = new Ball8(_canvas.width, _canvas.height);//create ball8
	update();
}

/** 
 * [main]
 */
window.onload = function () {
	var interval = 30; // time loop game
	point = document.getElementById('point');
	pointmax = document.getElementById('pointmax');
	_canvas = document.getElementById('canvas');
	_context = canvas.getContext('2d');
	pausegame = document.getElementById('pause');
	pausetextgame = document.getElementById('pausetext');
	boom = document.getElementById('boom');

	pointmaxs = 0; // get socre localstorage.

	//create localstorage when game runing first.
	if(localStorage.myVariable == null) {
		localStorage.myVariable = 0;
		pointmax.innerText = "Point max: " + localStorage.myVariable +"";
	}

	point.innerText = "Point: " + i +"";
	pointmax.innerText = "Point max: " + pointmaxs +"";

	_ball = new Ball(_canvas.width, _canvas.height);//create ball
	_ball1 = new Ball1(_canvas.width, _canvas.height);//create ball1
	_ball2 = new Ball2(_canvas.width, _canvas.height);//create ball2
	_ball3 = new Ball3(_canvas.width, _canvas.height);//create ball3
	_ball4 = new Ball4(_canvas.width, _canvas.height);//create ball4
	_ball5 = new Ball5(_canvas.width, _canvas.height);//create ball5	
	_ball6 = new Ball6(_canvas.width, _canvas.height);//create ball6
	_ball7 = new Ball7(_canvas.width, _canvas.height);//create ball7
	_ball8 = new Ball8(_canvas.width, _canvas.height);//create ball8

	pausegame.addEventListener('click',function() {
		js_click();
	});

	boom.addEventListener('click',function() {
		js_boom();
	});

	setInterval('update()',interval); // loop game

	_canvas.addEventListener('mousedown',function(e) {
		if(temp === 0) {
			preX = e.pageX - this.offsetLeft; //mouseX
			preY = e.pageY - this.offsetTop; //mouseY
			_ball.click(preX,preY);
			_ball1.click(preX,preY);
			_ball2.click(preX,preY);
			_ball3.click(preX,preY);
			_ball4.click(preX,preY);
			_ball5.click(preX,preY);
			_ball6.click(preX,preY);
			_ball7.click(preX,preY);
			_ball8.click(preX,preY);
			point.innerHTML = "Point: " + i +"";
			pointmaxs = localStorage.myVariable;
			if(pointmaxs < i) {
				pointmaxs = i;
				localStorage.myVariable = pointmaxs;
				pointmax.innerText = "Point max: " + pointmaxs +"";
			}
		}
		else {

		}	
	})
	pointmax.innerText = "Point max: " + localStorage.myVariable +"";
}