
let cloudx1 = -170;
let cloudx2 = -45;

function setup() {
  frameRate(25);
  createCanvas( 400, 300);
  background( 44, 146, 237);
  createLand();
  
}

function draw() {

  noStroke();
  fill( 44, 146, 237);
  rect( 0, 0, 400, 115);

  createCloud( cloudx1, 25);
  createCloud( cloudx2, 100);

  cloudx1 = cloudx1 + 1;
  cloudx2 = cloudx2 + 1;

  if (cloudx1 > 400) {
    cloudx1 = -35
  }
  
  if (cloudx2 > 400) {
    cloudx2 = -35
  }

}

function mousePressed() {
  createFlower(random( 5, 395), 250, 4, random( 25, 45), random( 9, 15), color(random( 0, 256), random( 0, 256), random( 0, 256)));

}

function createFlower( x, y, g, h, s, c) {
  
  //x y = x and y coords of based off stem
  //g h = stem dimensions
  //s = size of petals 
  //c = colour
  
  
  //stem
  stroke( 30, 114, 30);
  fill( 35, 130, 25);
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
  stroke( 193, 129, 38);
  fill( 245, 163, 48);
  ellipse(x + g, y - h, s);

}  

  
function strokeColour(c) { 
  // takes input colour c and returns the decreased value b
  // v is the value to decrease by
  let v = 30;
  let b = color(red(c) - v, green(c) - v, blue(c) - v);
  return b;

}

function createCloud( x, y) {
  //cloud
  noStroke();
  fill(255);
  ellipse( x, y, 30, 15);
  ellipse( x + 20, y, 30, 15);
  ellipse( x + 10, y - 7, 30, 15);

}

function createLand() {
  createHouse();
  createCastle();
    
  //hill house
  createHill( 320, 250, 150, 150);
  //hill castle
  createHill( 40, 250, 130, 130);
  
  //grass
  rectMode(CORNER);
  noStroke();
  fill( 0, 168, 85);
  rect( 0, 250, 400, 50);

}

function createHouse() {
  //house atop the hill
  rectMode(CENTER);
  noStroke();
  fill( 243, 245, 181);
  rect( 320, 165, 25, 35);
  //roof
  noStroke();
  fill( 235, 80, 32);
  triangle( 307, 148, 320, 131, 333, 148); 
  //door
  noStroke();
  fill(213,215,151);
  rect( 313, 175, 6, 18);

  noStroke();
  fill( 153, 231, 255);
  rect(313, 155, 6, 6);
  rect(327, 155, 6, 6);
  rect(327, 169, 6, 6);

}

function createCastle() {
  rectMode(CENTER);
  noStroke();
  fill(119);
  rect( 40, 167, 26, 40);
  
  rectMode(CORNER);
  noStroke();
  fill(119);
  rect( 27, 142, 5, 5);
  rect( 38, 142, 5, 5);
  rect( 48, 142, 5, 5);

  noStroke();
  fill(0);
  ellipse( 40, 185, 8, 20);
  
}

function createHill( x, y, d1, d2) {
  // x y = coords of centre of circle
  // d1 = diameter up down
  // d2 = diameter left right
  fill( 0, 138, 55);
  stroke( 0, 100, 48);
  ellipse( x, y , d1, d2);

}