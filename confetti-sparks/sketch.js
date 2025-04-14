let confettis = [];
let numConfetti = 1;

let backgroundHUE

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");


  // for (let i = 0; i < numConfetti; i++) {
  //   confettis.push(new Confetti(width / 2, height / 2))
  // }

  // HUE Saturation Brightness
  colorMode(HSB)

  backgroundHUE = random(0, 255)
}

function draw() {
  background(backgroundHUE, 10, 190);

  for (let i = 0; i < 1; i++) {
    confettis.push(new Confetti(width / 2, height / 2))
  }

  for (let i = 0; i < confettis.length; i++) {
    confettis[i].update();
    confettis[i].display();
  }

  text(confettis.length, 20, 20)

  // if (confettis.length > 30) {
  //   confettis.splice(0, 1)

  for (let i = 0; i < confettis.length; i++) {
    if (confettis[i].onCanvas == false) {
      confettis.splice(i, 1);
    }
  }
}


class Confetti {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 10);

    this.confettiHue = random(255)

    this.speedX = random(-2, 2);
    this.speedY = random(-1, -3);

    this.onCanvas = true;

  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    this.speedY += 0.1
    this.speedX *= 0.99

    checkOutOfCanvas()
    
  }
  display() {
    push();
    translate(this.x, this.y);

    fill(this.confettiHue, 255, 255);
    noStroke();
    circle(0, 0, this.size);

    pop();
  }

}

// // function mousePressed() {
// //   for (let i = 0; i < numConfetti; i++) {
// //     confettis.push(new Confetti(width / 2, height / 2))
// //   }

// }