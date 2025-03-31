/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new OwenDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class OwenDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xLeft = 50
    this.xRight = 80
    this.moonwalkSpeed = 1;
    this.stepCycle = 0;
  }
  update() {
    // Body Movement
    this.x -= this.moonwalkSpeed

    // Alternating Feet
    // this.stepCycle = (this.stepCycle + 1) % 120
    // if (this.stepCycle < 60) {
    //   this.xRight -= 1
    // } else {
    //   this.xLeft -= 1
    // }

    if (frameCount % 120 < 60) {
      this.xRight -= 0.6
      this.xLeft += 0.6
    } else {
      this.xRight += 0.6
      this.xLeft -= 0.6
    }



    if (this.x < 60) {
      this.x = 450
    }

  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    // Head and Body
    noStroke()
    fill(217, 141, 99)
    circle(60, -20, 35)

    fill(165, 0, 0)
    noStroke()
    ellipse(60, 26, 37, 60)

    // Eye
    fill(0)
    circle(68, -22, 5)

    // Smile
    stroke(0)
    strokeWeight(2)
    noFill()
    arc(80, -15, 30, 10, 0, PI)

    // Feet
    fill(255)
    ellipse(this.xLeft, 90, 17, 5)
    ellipse(this.xRight, 90, 17, 5)

    // Legs
    stroke(36, 84, 130)
    strokeWeight(4)
    line(65, 55, this.xRight, 87)
    line(55, 55, this.xLeft, 87)

    // Arm
    stroke(217, 141, 99)
    strokeWeight(2)
    let y2 = 18 + 6 * sin(frameCount * 0.05)
    line(55, 18, 90, y2)

    //Hat
    fill(50)
    noStroke()
    rect(38, -40, 48, 10)

    fill(50) 
    rect(42, -45, 37, 10)

   




    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/