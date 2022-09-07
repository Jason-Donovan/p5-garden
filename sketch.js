
function setup() {
  frameRate(30);
  createCanvas( 400, 300);
  background( 44, 146, 237);
  createLand();
  
}

function draw() {
}

function mousePressed() {
  createFlower(random( 5, 395), 250, 4, random( 25, 45), random( 9, 15), color(random( 0, 256), random( 0, 256), random( 0, 256)));
}

function createFlower( x, y, g, h, s, c) {
  /*
  x y = x and y coords of based off stem
  g h = stem dimensions
  s = size of petals 
  c = colour
  */
  //stem
  stroke(30,114,30);
  fill(35,130,25);
  rect( x + ( g / 2 ), y - h, g, h);
  //petals
  let o = s/2;
  stroke(strokeColour(c));
  fill(c);
  ellipse(x + g - o, y - h + o, s);
	ellipse(x + g + o, y - h - o, s);
	ellipse(x + g - o, y - h - o, s);
	ellipse(x + g + o, y - h + o, s);
  //middle thing
  stroke(193,129,38);
  fill(245,163,48);
  ellipse(x + g, y - h, s);
  }  
function strokeColour(c) { 

  // takes input colour c and returns the decreased value b
  // v is the value to decrease by
  let v = 30;
  let b = color(red(c) - v, green(c) - v, blue(c) - v);
  return b;
}

function createLand() {
  //house atop the hill
  rectMode(CENTER);
  noStroke();
  fill(243,245,181);
  rect(320,165,25,35);
  //roof
  noStroke();
  fill(235,80,32);
  triangle(307,148,320,131,333,148);  
  //hill
  fill(0,138,55);
  stroke(0,100,48);
  ellipse(320,250,150,150);
  //grass
  rectMode(CORNER);
  noStroke();
  fill(0,168,85);
  rect(0,250,400,50);
}