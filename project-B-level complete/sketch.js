let img
let img2

let imgHeight
let imgWidth;
let imgRatio;

let worldX = 0
let worldY = 0

let mario;
let marioJump = false;

let flag;

let questionBlk;
let marioGrows = false;


function preload() {
  img = loadImage("assets/mariobkg.png")
  img2 = loadImage("assets/mario.png")
  img3 = loadImage("assets/briefcase.png")
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  imgWidth = img.width;
  imgHeight = img.height;
  imgRatio = imgWidth / imgHeight

  mario = new Mario();
  flagpole = new Flag(2000, 430)
  questionBlk = new QuestionBlk(500, 240)
}

function draw() {
  background(0)

  for (let i = 0; i < 3; i++) {
    image(img, worldX + i * (height * imgRatio) - i, worldY, height * imgRatio, height)


  }

  if (keyIsPressed) {
    if ((key === "d" || key === "D") && worldX <= 2) {
      worldX -= 10
    } else if ((key === "a" || key === "A") && worldX <= -2) {
      worldX += 5
    } else if ((key === "w" || key === "W")) {
      marioJump = true
    }

    if (worldX <= -1800) {
      worldX = -1800;
    }
  }

  //mario
  mario.display();
  if (marioJump == true) {
    mario.update();
  }

  flagpole.display()
  flagpole.checkFlagSlide()

  questionBlk.display();

  if ((worldX + questionBlk.x) <= 210 && (worldX + questionBlk.x) >= 130) {
    if (mario.marioY <= mario.marioMax + 20) {
      marioGrows = true;
    }
  }

  if ((worldX + questionBlk.x) <= 210 && (worldX + questionBlk.x) >= 130) {
    if (mario.marioY <= mario.marioMax + 20) {
      marioGrows = true;
    }
  }

// Add mario slowing down here....





}


class Mario {
  constructor() {
    this.marioX = 200
    this.marioY = 14

    this.marioMax = -100 // height of jump
    this.marioMin = 30
    this.marioTop = false;

    this.width = 40
    this.height = 60
  }

  display() {
    push()

    translate(this.marioX, 420 - this.height);
    if (key === "a" || key === "A") {
      scale(-1, 1)
    }

    if (marioGrows) {
      this.width = 55
      this.height = 85
    }

    image(img2, -20, this.marioY, this.width, this.height)

    pop()
  }

  update() {
    // Jump
    if (this.marioY <= this.marioMax + 10) {
      this.marioTop = true;
    }

    if (this.marioTop == true) {
      this.marioY = lerp(this.marioY, this.marioMin, 0.11)
      if (this.marioY >= this.marioMin - 11) {
        marioJump = false;
      }
    } else {
      this.marioY = lerp(this.marioY, this.marioMax, 0.12)
    }

    //reset for another jump
    if (marioJump == false) {
      this.marioTop = false;
    }
  }
}

class Flag {
  constructor(x, groundY) {
    this.x = x; // x-position of the pole
    this.groundY = groundY; // y-position of the ground
    this.poleHeight = 300; // height of the pole
    this.flagWidth = 50; // width of the flag
    this.ballDiameter = 10; // diameter of the ball
    this.baseWidth = 50
    this.baseHeight = 25

    this.flagY = this.poleHeight
    this.flagSlide = false
  }

  display() {
    push();
    translate(worldX, 0); // <-- This is important to move flag with world!

    // Pole
    stroke(100); // gray color
    strokeWeight(5);
    line(this.x, this.groundY, this.x, this.groundY - this.poleHeight);

    // Block
    fill(139, 69, 19)
    noStroke()
    rect(this.x - this.baseWidth / 2, this.groundY - this.baseHeight + 2.5, this.baseWidth, this.baseHeight)

    // Ball Top
    fill(255, 255, 0); // yellow
    noStroke();
    circle(this.x, this.groundY - this.poleHeight, this.ballDiameter);

    if (this.flagSlide) {
      this.flagY -= 2;
      // console.log(this.flagY, this.groundY)

      if (this.flagY <= 57) {
        this.flagY = 57;
      }
    }

    // Draw the flag
    fill(255, 0, 0);
    noStroke();
    triangle(
      this.x, this.groundY - this.flagY + 35,    // bottom left
      this.x - this.flagWidth, this.groundY - this.flagY + 20,  // tip
      this.x, this.groundY - this.flagY + 5,     // top left
    );

    pop();
  }

  checkFlagSlide() {

    // console.log(worldX, worldX + this.x, mario.marioX)
    let flagPos = worldX + this.x;
    if (flagPos <= 200) {
      this.flagSlide = true
      // console.log("yesssss")
    }
  }
}

class QuestionBlk {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 60
    this.height = 40
  }

  display() {
    push()
    translate(worldX, 0)
    image(img3, this.x, this.y, this.width, this.height)

  }


  update() {

  }
}