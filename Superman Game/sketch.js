let supermanImg;
let superman;
let pipes = [];
let gameOver = false;
let score = 0;
let lives = 4;
let gameStarted = false;
let backgroundImage; // Variable to store background image

function preload() {
  supermanImg = loadImage('superman.png'); // adding superman image
  backgroundImage = loadImage('dark.jpg'); // adding dark background image
}

function setup() {
  createCanvas(595, 540);  // adjusting the canvas size
  superman = new Superman();
}

function draw() {
  background(135, 206, 235);  // sky blue background
  image(backgroundImage, 0, 0, width, height);  // add background image

  if (!gameStarted) {
    textSize(32);
    fill(255); // white color
    textAlign(CENTER, CENTER);
    text('Press ENTER to Start', width / 2, height / 2);  // show start message
  } else if (!gameOver) {
    superman.update();  // update superman position
    superman.display();  // display superman image

    if (frameCount % 80 === 0) { // Increase interval for pipe generation
      pipes.push(new Pipe());
    }

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();
      pipes[i].display();  // showing pipes

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);  // remove offscreen pipes
        score++;
      }

      if (pipes[i].hits(superman)) {  // check collision
        lives--;
        if (lives <= 0) {
          gameOver = true;  // game over if no lives
        } else {
          resetSuperman();
        }
      }
    }

    fill(255); // white color
    textSize(32);
    text("Score: " + score, 10, 30);  // show score
    text("Lives: " + lives, 10, 60);  // show lives
    textAlign(LEFT);
  } else {
    textSize(32);
    fill(255); // white color
    textAlign(CENTER, CENTER);
    text('Game Over!', width / 2, height / 2);  // game over message
    text('Press ENTER to Restart', width / 2, height / 2 + 40);
  }
}

function keyPressed() {
  if (key === ' ') {
    if (gameStarted && !gameOver) {
      superman.up();  // make superman jump
    }
  } else if (keyCode === ENTER) {
    if (!gameStarted || gameOver) {
      startGame();  // start or restart game
    }
  }
}

function startGame() {
  gameStarted = true;
  gameOver = false;
  score = 0;
  lives = 4;
  superman = new Superman();
  pipes = [];
}

function resetSuperman() {
  superman = new Superman();
}

class Superman {
  constructor() {
    this.y = height / 2;
    this.x = 64;
    this.gravity = 0.8; // gravity must be increased
    this.lift = -17; // lift for balance
    this.velocity = 0;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9; // velocity
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
      lives--;
      if (lives <= 0) {
        gameOver = true;
      } else {
        resetSuperman();
      }
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  display() {
    image(supermanImg, this.x, this.y, 100, 80); // Size of the superman image
  }

  up() {
    this.velocity = this.lift; // setting velocity for jumps
  }
}

class Pipe {
  constructor() {
    this.spacing = 200; // Increase spacing between pipes
    this.top = random(height / 6, (3 / 4) * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 80;
    this.speed = 6; // Increased speed to make the game faster
  }

  update() {
    this.x -= this.speed;
  }

  display() {
    fill(255, 0, 0); // Change pipe color to red
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  offscreen() {
    return this.x < -this.w;
  }

  hits(superman) {
    if (superman.y < this.top || superman.y > height - this.bottom) {
      if (superman.x > this.x && superman.x < this.x + this.w) {
        return true;
      }
    }
    return false;
  }
}
