var img;
function preload() {

img = loadImage("car.jpg");  // Adding Image

}

function setup () {

createCanvas (400, 400); // Setting up canva size 

background(0);

}

function draw() {

background(0);

image(img, -140, -90);  // Image alignment

var v = map(mouseX, 0, width, 2, 20);

filter(POSTERIZE, v);

}

