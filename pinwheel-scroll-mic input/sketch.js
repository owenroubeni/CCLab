let p;
let bgHue;
let mic;
let interacted = false;
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  p = new PinWheel(width/2, height/2)
  colorMode(HSB)
  bgHue = 0

  mic = new p5.AudioIn();
  // mic.start();
}

function draw() {
  background(bgHue, 50, 50);

  if(interacted == true){
    let level = mic.getLevel();
    // let dia = map(level, 0.0, 1.0, 0, 1000);
    fill(0)
    textSize(20)
    text("volumen level: " + level, 20, 20);
    text("blow into your microphone", 20, 40);
  
    if(level > 0.1){
      p.angleGoal += 400;
    }
  
    // p.angle = map(level, 0, 1, 0, 360*3)
    
    
    p.update();
    p.display();
  }else{
    textSize(20)
    text("click to make sure the sound input works", 20, 40);
  }
  
  

}

class PinWheel{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.angle = 10;
    this.angleGoal = this.angle;
    this.scaleFactor = 1;
    this.radius = 100;

  }
  update(){
    this.angle = lerp(this.angle, this.angleGoal, 0.3);
  }
  drawSingleWing(){
    fill(30, 90, 180)
    //SMALL triangle
    //       x1, y1      x2, y2                     x3, y3
    triangle(0,0,   0,-this.radius/2,   this.radius/2, -this.radius/2)

    fill(220, 150, 30)
    //BIG triangle
    triangle(0,0,  this.radius/2, -this.radius/2,  this.radius, 0)
  }
  display(){
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor);
    
    strokeWeight(5)
    line(0, 0, 0, this.radius*2)


    noStroke();
    // PINWHEEL WITH 4 wings
    push();
    translate(0, 0);
    rotate(radians(-this.angle)) // pinwheel rotating as a whole
    for(let i = 0; i < 4; i++){
      rotate(radians(360/4)) // rotate each wing by 90deg from starting angle
      this.drawSingleWing() 
    }
    pop();
    


    fill("red");
    circle(0, 0, 5);
    pop();
  }
}


function mousePressed(){
  navigator.mediaDevices.enumerateDevices().then(devices => {
    console.log("Devices:", devices);
  });
  if (!interacted) {
    getAudioContext().resume().then(() => {
      mic.start();
      interacted = true;
      console.log("Audio context resumed and mic started.");
    });
  }
}

// function mousePressed(){
//   if (!interacted) {
//     getAudioContext().resume().then(() => {
//       mic.start();
//       interacted = true;
//       console.log("Audio context resumed and mic started.");
//     });
//   }
// }

function keyPressed(){
  navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    console.log("Mic access granted!");
  })
  .catch(err => {
    console.error("Mic error", err);
  });
}