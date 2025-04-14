// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 200; // Decide the initial number of particles.
let MAX_OF_PARTICLES = 500; // Decide the maximum number of particles.

let particles = [];

let rectWidth = 10;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  colorMode(HSB, 360, 100, 100)

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    // let x = (width / NUM_OF_PARTICLES) * i + width / (NUM_OF_PARTICLES * 2);
    let rectWidth = width / NUM_OF_PARTICLES;
    let x = rectWidth * i;
    let y = height / 2;
    particles[i] = new Particle(x, y, i, rectWidth);
  }
}

function draw() {
  background(30);

  // consider generating particles in draw(), using Dynamic Array

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }

  // limit the number of particles
  // if (particles.length > MAX_OF_PARTICLES) {
  //   particles.splice(0, 1); // remove the first (oldest) particle
  // }
}

function mouseClicked() {
  let min = (random(0, particles.length / 2));
  let max = (random(particles.length / 2, particles.length));
  for (let i = 0; i < particles.length; i++) {
    if (i > min && i < max) {
      let p = particles[i];
      p.resize();
    }
  }
}

class Particle {
  // constructor function
  constructor(startX, startY, i, rectWidth) {
    // set numbers
    this.height = 50;

    // passed numbers
    this.width = rectWidth;
    this.x = startX;
    this.y = startY - this.height / 2;
    this.index = i;
    this.randomPos = random(NUM_OF_PARTICLES);

    // for resizing
    this.resizeBool = false;
    this.sizeFac = 200;
    this.counter = 0;
  }
  // methods (functions): particle's behaviors
  update() {
    this.height = map(
      noise(this.randomPos + frameCount * 0.1),
      0,
      1,
      10,
      this.sizeFac
    );
    this.y = height / 2 - this.height / 2;
    if (this.resizeBool == true) {
      this.sizeFac = 500;
      this.counter += 1;
      if (this.counter >= 200) {
        this.sizeFac = 200;
        this.counter = 0;
        this.resizeBool = false;
      }
    }
  }
  resize() {
    //scale up
    this.resizeBool = true;
  }
  display() {
    // particle's appearance
    push();
    noStroke();
    translate(this.x, this.y);

    fill(220, 80, 90)
    rect(0, 0, this.width, this.height);

    pop();
  }
}
