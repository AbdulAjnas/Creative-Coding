let img;

function preload() {
  img = loadImage('bike.jpg'); // Adding bike image 
}

function setup() {
  createCanvas(800, 600);
  img.resize(400, 350); // image alignment
}

function draw() {
  background(220);
  
  // Create a hexagon
  beginShape();
  let centerX = width / 2;
  let centerY = height / 2;
  let radius = 200; // Radius of the hexagon
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);

  // Clip the image to the hexagon
  drawingContext.clip();

  // Draw the image inside the hexagon
  image(img, centerX - img.width / 2, centerY - img.height / 2);
  noLoop(); // stops the loop
}

function mousePressed() {
  loop(); // Loop
}
