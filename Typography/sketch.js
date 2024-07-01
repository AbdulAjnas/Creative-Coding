var font;
var backgroundImage;

function preload() {
  font = loadFont('BebasNeue-Regular.ttf'); // font
  backgroundImage = loadImage('background.png'); // background image
}

var points;

function setup() {
  createCanvas(2200, 1000);
  stroke(0);
  points = font.textToPoints('BATH SPA UNIVERSITY', 50, 400, 300, { sampleFactor: 0.15 }); // Set text alignments through textToPoints
 
  // Draw background image
  image(backgroundImage, 0, 0, width, height);
 
  // Draw the shapes
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var shapeType = int(random(4));
    var size = random(10, 20); 
    var r = random(255);
    var g = random(255);
    var b = random(255);

    fill(r, g, b);
    noStroke();

    switch (shapeType) {
      case 0:
        ellipse(p.x, p.y, size, size);
        break;
      case 1:
        rect(p.x - size / 2, p.y - size / 2, size, size);
        break;
      case 2:
        triangle(
          p.x, p.y - size / 2,
          p.x - size / 2, p.y + size / 2,
          p.x + size / 2, p.y + size / 2
        );
        break;
      case 3:
        quad(
          p.x, p.y - size / 2,
          p.x + size / 2, p.y,
          p.x, p.y + size / 2,
          p.x - size / 2, p.y
        );
        break;
    }
  }
}
