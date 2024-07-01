let mic, fft;
let bgImage;
let enterButton;
let started = false;

function preload() {
  bgImage = loadImage('BG.png'); // Background image
}

function setup() {
  createCanvas(800, 530); // Adjusting the canvas size
  noFill();

  // Creating an enter button
  enterButton = createButton('Enter');
  enterButton.position(width / 2 - 90, height / 2);
  enterButton.size(120, 50);
  enterButton.mousePressed(startVisualization);

  // Creating an audio input
  mic = new p5.AudioIn();
  fft = new p5.FFT();
}

function draw() {
  // Draw the background image
  image(bgImage, 0, 0, width, height);

  if (started) {
    let spectrum = fft.analyze();

    stroke(255);
    beginShape();
    for (let i = 0; i < spectrum.length; i++) {
      let x = map(i, 0, spectrum.length, 0, width);
      let y = map(spectrum[i], 0, 255, height, 0);
      vertex(x, y);
    }
    endShape();
  }
}

function startVisualization() {
  enterButton.hide();
  mic.start();
  fft.setInput(mic);
  started = true;
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('audioVisualization', 'png'); // Save option
  }
}

