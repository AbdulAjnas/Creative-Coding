function setup() {
  createCanvas(800, 400);
  background(220);
}

function draw() {
  // Car body
  fill(255, 255, 0); //Yellow color
  rect(150, 200, 300, 100);
  rect(200, 150, 200, 50);
  
  // Wheels
  fill(0); //Black color
  ellipse(200, 300, 80, 80);
  ellipse(400, 300, 80, 80);
}
