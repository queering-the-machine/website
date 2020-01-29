var walkerX;
var walkerY;
var speed = 30;

function setup() { 
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0)
  canvas.style('z-index','-1')

  colorMode(HSB,100);
  walkerX=width/2;
  walkerY=height/2;
} 

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() { 
  // background(220);
  fill(walkerY/3,100,50,1);
  noStroke();
  ellipse(walkerX,walkerY,250,250);
  
  walkerX = walkerX + random(speed*-1, speed);
  walkerY = walkerY + random(speed*-1, speed);
}