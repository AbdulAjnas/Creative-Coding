function setup() {
  createCanvas(800, 600);  // canva size
  background(220);
  noStroke();
  generatePattern();
}

function draw() {
  noLoop();  // no loop or repetition
}

function generatePattern() {
  for (let i = 0; i < 200; i++) { // Adjust the number of shapes as needed
    let x = random(width);
    let y = random(height);
    let size = random(20, 50);
    
    let shapeType = int(random(4)); 

    fill(random(255), random(255), random(255));
    
    if (shapeType == 0) {
      // Draw a circle
      ellipse(x, y, size, size);
    } else if (shapeType == 1) {
      // Draw a square
      rect(x, y, size, size);
    } else if (shapeType == 2) {
      // Draw a triangle
      triangle(
        x, y - size / 2,
        x - size / 2, y + size / 2,
        x + size / 2, y + size / 2
      );
    } else {
      // Draw a diamond
      quad(
        x, y - size / 2,
        x + size / 2, y,
        x, y + size / 2,
        x - size / 2, y
      );
    }
  }
}

