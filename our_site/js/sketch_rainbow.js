var walkerX;
var walkerY;
var speed = 30;

function setup() { 
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  colorMode(HSB,100);
  walkerX=width/2;
  walkerY=height/2;
} 

/*

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  //myCanvas.class('backgroundsketch');
  background(255, 0, 200);
}*/

function draw() { 
  // background(220);
  fill(walkerY/3,100,50,1);
  noStroke();
  ellipse(walkerX,walkerY,250,250);
  
  walkerX = walkerX + random(speed*-1, speed);
  walkerY = walkerY + random(speed*-1, speed);

  
}