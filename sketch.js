

var i = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);

  frameRate(30);
}

function draw() {

  translate(width/2,height/2);
  rotate(frameCount*2);

	strokeWeight(0.2);
  noFill();

  stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/720));
  line(width/10,0,(cos (frameCount*3)*width/5),(sin (frameCount*3)*width/5));

strokeWeight(i);
	stroke(lerpColor(color('#ea0043'), color('#0fefca'), frameCount/360));
	line(width,0,width/7,width/7);

i = i + 0.005


  // Stops the draw function if a certain condition avaluates true
  if (frameCount == 360) {
    noLoop();
  }

}
