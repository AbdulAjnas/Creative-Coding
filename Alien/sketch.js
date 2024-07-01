function setup() {
  createCanvas(800, 400); // size of the canva
  background(220);
}

function draw() {
  //Alien body
  fill(0, 255, 0); //Green color
  ellipse(400, 200, 150, 200);
  // Alien eyes
  fill(255); // White color
  ellipse(370, 160, 40, 60);
  ellipse(430, 160, 40, 60); 
  // blue eye balls
  fill(0, 0, 255); //Blue color
  ellipse(370, 160, 20, 30);
  ellipse(430, 160, 20, 30);
  
  //ears
  stroke(0);
  line(350, 80, 370, 140);
  line(450, 80, 430, 140);
  fill(0, 0, 255); // Blue color
  ellipse(350, 80, 20, 20);
  ellipse(450, 80, 20, 20);
  // Mouth
  noFill();
  stroke(0);
  arc(400, 240, 80, 40, 0, PI);
}
