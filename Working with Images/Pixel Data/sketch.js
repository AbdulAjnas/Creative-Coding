var img, x, y;

function preload() {

img = loadImage("nature.jpeg"); // nature image

}



function setup() {

createCanvas (300, 200); // canva size 

background(0);  // background if the image 

noStroke();

}



function draw() {

background(0);

x = mouseX;

y = mouseY;

image( img, 5, 5);

var c = get(x, y); // Image allignment

fill(c);

ellipse (x, y, 100, 100);  // ball size

}

