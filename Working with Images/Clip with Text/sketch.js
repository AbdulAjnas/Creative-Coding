let img;

function preload() {
  img = loadImage('patrol.jpeg'); // Adding an image
}

function setup() {
  createCanvas(800, 400);  // canva size 
  img.resize(800, 400); // Image alignment
  
  let textCanvas = createGraphics(width, height);
  textCanvas.fill(255);
  textCanvas.textSize(300);
  textCanvas.textAlign(CENTER, CENTER);
  textCanvas.text('VTC', width / 2, height / 2);
  
  // Applying mask to image
  img.mask(textCanvas);
}

function draw() {
  background(220);  // background
  image(img, 0, 0);
}
