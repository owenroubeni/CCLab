let img
let img2
let img3
let img4
let coinImg
let boxImg
let hospitalImg

let pixelImg

let phase = 1

let font;

let imgHeight
let imgWidth;
let imgRatio;

let worldX = 0
let worldY = 0

let mario;
let marioJump = false;

let flag;

// sound variables
let mySound
let mySound2
let mySound3
let mySound4
let mySound5

let sound4Played = false
let sound5Played = false
let hatOn = true

let briefcaseBlk;
let coinBlk;
let confettiBlk;
let errorBlk;
let blkRed = false
let errTime = 0;

let boxHit = false

let marioGrows = false;
let coinY = 0;

let confettis = [];
let numConfetti = 1;

let confettiOn = false
let generatorLifespan = 0;

function preload() {
  img = loadImage("assets/mariobkg.png")
  img2 = loadImage("assets/mario.png")
  img3 = loadImage("assets/briefcase.png")
  img4 = loadImage("assets/questionblk.png")
  coinImg = loadImage("assets/coinImg.png")
  boxImg = loadImage("assets/2dbox.png")
  hospitalImg = loadImage("assets/hospital.png")
  hatImg = loadImage("assets/hat.png")

  mySound = loadSound("assets/coin.mp3")
  mySound2 = loadSound("assets/yay.mp3")
  mySound3 = loadSound("assets/error.mp3")
  mySound4 = loadSound("assets/success.mp3")
  mySound5 = loadSound("assets/baby.mp3")

  font = loadFont('assets/pixelsans.ttf')
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  pixelImg = createImage(width, height); // make img for pixel

  colorMode(HSB)

  mySound3.setVolume(10.0);

  imgWidth = img.width;
  imgHeight = img.height;
  imgRatio = imgWidth / imgHeight

  mario = new Mario();
  flagpole = new Flag(2000, 430)
  briefcaseBlk = new Block(1550, 240, 60, 40, img3)
  coinBlk = new Block(780, 240, 50, 50, img4)
  confettiBlk = new Block(580, 240, 50, 50, img4)
  errorBlk = new Block(980, 240, 50, 50, img4)
  box = new Obstacle(1225, 375, 80, 80)
  hospital = new Hospital(-100, 78, 600, 500, hospitalImg)


}

function draw() {
  background(0)
  if (phase == 1) {
    phase1()
  } else if (phase == 3) {
    phase3()
  } else if (phase == 2) {
    phase2()
  }
}

function phase1() {
  for (let i = 0; i < 3; i++) {
    push();
    if (marioGrows == true) {
      tint(50, 180)
    }
    image(img, worldX + i * (height * imgRatio) - i, worldY, height * imgRatio, height)
    pop();

  }

  if (keyIsPressed) {
    if ((key === "d" || key === "D") && worldX <= 2) {
      if (marioGrows == true) {
        worldX -= 2
      } else { worldX -= 4 }
    } else if ((key === "a" || key === "A") && worldX <= -2) {
      if (marioGrows == true) {
        worldX += 2
      } else { worldX += 4 }
    } else if ((key === "w" || key === "W")) {
      marioJump = true
    }

    if (worldX <= -1800) {
      worldX = -1800;
    }
  }

  box.display()
  //mario
  mario.display();
  if (marioJump == true) {
    mario.update();
  }

  flagpole.display()
  flagpole.checkFlagSlide()

  // chnage to phase2
  if (flagpole.flagBottom == true) {
    phase = 3

  }

  briefcaseBlk.display();
  coinBlk.coinAppear();
  coinBlk.display();

  confettiBlk.display();
  hospital.display()

  push()

  if (blkRed == true) {
    tint(0, 92, 85)
    errTime += 1;
  } else { noTint() }

  if (errTime >= 20) {
    blkRed = false
    errTime = 0;
  }
  errorBlk.display();
  pop()

  if ((worldX + briefcaseBlk.x) <= 210 && (worldX + briefcaseBlk.x) >= 130) {
    if (mario.marioY <= mario.marioMax + 20) {
      marioGrows = true;
    }
  }


  // coinBlk sound
  if ((worldX + coinBlk.x) <= 200 && (worldX + coinBlk.x) >= 140) {
    if (mario.marioY <= mario.marioMax + 20) {
      if (!mySound.isPlaying()) {
        mySound.play();
      }

      // coin rising
      coinY -= 1;
      if (coinY <= -40) {
        coinY = -40;
      }
    }
  }

  // confettiBlk sound
  if ((worldX + confettiBlk.x) <= 205 && (worldX + confettiBlk.x) >= 160) {
    if (mario.marioY <= mario.marioMax + 20) {
      if (!mySound2.isPlaying()) {
        mySound2.play();
      }
      confettiOn = true
    }
  }

  // errorBlk sound
  if ((worldX + errorBlk.x) <= 200 && (worldX + errorBlk.x) >= 150) {
    if (mario.marioY <= mario.marioMax + 20) {
      if (!mySound3.isPlaying()) {
        mySound3.play();
        blkRed = true;
      }
    }
  }

  console.log(worldX + box.x)

  // box hit
  if ((worldX + box.x) <= 217 && (worldX + box.x) >= 180) {
    if (mario.marioY <= mario.marioMax + 20) {
      phase = 2
    }
  }

  // success sound 
  if ((worldX + box.x) <= 132 && (worldX + box.x) >= 110) {
    if (!mySound4.isPlaying() && !sound4Played) {
      mySound4.play();
      sound4Played = true
    }
  }

  // hospital sound
  if ((worldX + hospital.x) <= -208 && (worldX + hospital.x) >= -230) {
    if (!mySound5.isPlaying() && !sound5Played) {
      mySound5.play();
      sound5Played = true
    }
  }

  if (confettiOn == true) {
    confettis.push(new Confetti(confettiBlk.x + 25, confettiBlk.y))
    generatorLifespan += 1;
  }

  for (let i = 0; i < confettis.length; i++) {
    confettis[i].update();
    confettis[i].display();
  }


  for (let i = 0; i < confettis.length; i++) {
    if (confettis[i].onCanvas == false) {
      confettis.splice(i, 1);
    }
  }

  if (generatorLifespan > 20) {
    confettiOn = false
    generatorLifespan = 0
  }
}

function phase3() {
  pixelImg.loadPixels();
  let pixelSize = 1;
  for (let y = 0; y < pixelImg.height; y += pixelSize) {
    for (let x = 0; x < pixelImg.width; x += pixelSize) {
      let index = (x + y * pixelImg.width) * 4; // (x + y*w) * RGBA
      let r = pixelImg.pixels[index + 0] = random(255); // R
      let b = pixelImg.pixels[index + 1] = random(255); // G
      let g = pixelImg.pixels[index + 2] = random(255); // B
      let a = pixelImg.pixels[index + 3] = 255; // A

      noStroke();
      fill(r, g, b);
      rect(x, y, pixelSize);
    }
  }
  pixelImg.updatePixels();

  image(pixelImg, 0, 0);

  push()

  textAlign(CENTER)
  textSize(50)
  fill(0, 100, 50)
  textFont(font)
  text("The World You Knew is Gone", width / 2, (height / 2) - 25)
  text("Ahead is Only Change...", width / 2, (height / 2) + 50)

  pop()
}

function phase2() {
  push()
  textAlign(CENTER)
  textSize(50)
  fill(0, 100, 100)
  textFont(font)
  text("You Are Not", width / 2, (height / 2) - 25)
  textSize(100)
  text("READY", width / 2, (height / 2) + 50)
  pop()
}

class Mario {
  constructor() {
    this.marioX = 200
    this.marioY = 14

    this.marioMax = -100 // height of jump
    this.marioMin = 25
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
      image(img2, -20, this.marioY - 5, this.width, this.height)
      hatOn = false
    } else {
      image(img2, -20, this.marioY, this.width, this.height)
    }

    // propeller hat on Mario
    if (hatOn == true) {
      image(hatImg, -41, this.marioY - 30, this.width + 45, this.height + 3)
    }

    pop()
  }

  update() {

    if (marioGrows == true) {
      this.marioMin = 30
    } else { this.marioMin = 25 }

    // jump
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
    this.flagBottom = false

    this.flagY = this.poleHeight
    this.flagSlide = false
  }

  display() {
    push();
    translate(worldX, 0); // <-- move flag with world

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


      if (this.flagY <= 57) {
        this.flagY = 57;
      }
    }

    // Draw the flag
    if (marioGrows == true) {
      fill(255, 0, 0)
    } else { fill(0, 100, 100) }
    noStroke();
    triangle(
      this.x, this.groundY - this.flagY + 35,    // bottom left
      this.x - this.flagWidth, this.groundY - this.flagY + 20,  // tip
      this.x, this.groundY - this.flagY + 5,     // top left
    );

    pop();
  }

  checkFlagSlide() {

    let flagPos = worldX + this.x;
    if (flagPos <= 200) {
      this.flagSlide = true
    } if (this.flagY <= 58) {
      this.flagBottom = true
    }
  }
}

class Block {
  constructor(x, y, w, h, img) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.img = img
  }

  display() {
    push()
    translate(worldX, 0)
    image(this.img, this.x, this.y, this.width, this.height)
    pop()
  }


  coinAppear() {
    push()
    translate(worldX, 0)
    image(coinImg, this.x + 5, this.y + 5 + coinY, this.width - 10, this.height - 10)
    pop()
  }

}

class Confetti {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(2, 8);

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



  }
  display() {
    push();
    translate(worldX, 0)
    translate(this.x, this.y);

    fill(this.confettiHue, 255, 255);
    noStroke();
    circle(0, 0, this.size);

    pop();
  }

}

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
  }

  display() {
    push()
    translate(worldX, 0)

    image(boxImg, this.x, this.y, this.width, this.height)
    pop()
  }
}

class Hospital {
  constructor(x, y, w, h, hospitalImg) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.img = hospitalImg
  }

  display() {
    push()
    translate(worldX, 0)

    image(this.img, this.x, this.y, this.width, this.height)
  
    textAlign(CENTER)
    textSize(20)
    fill(0, 0, 0)
    textFont(font)
    text("Press 'D' to Start", this.width - 395, this.height -300)
    pop()

  }
}
