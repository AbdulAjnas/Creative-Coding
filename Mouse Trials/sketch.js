function setup() {
  createCanvas(800, 600);  // Adjusting canva size 
  background(0);
}

function draw() {
  // Create a star at the mouse position with random colors
  if (mouseIsPressed) {
    let starSize = random(10, 30);
    let r = random(255);
    let g = random(255);
    let b = random(255);
    drawStar(mouseX, mouseY, starSize / 2, starSize, 5, r, g, b);
  }
}

function drawStar(x, y, radius1, radius2, npoints, r, g, b) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill(r, g, b);    // Adding colours in RGB format
  noStroke();     // No strok added
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;  // defining the radius
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);    // setting vertex
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('myStarTrail', 'png');    // save option included 
  }
}
