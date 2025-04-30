let stars = [];

let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };

let faceAngle = 0;

function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
}


function setup() {
  
  let canvas = createCanvas(windowWidth, windowHeight); // fullscreen! DONE
  canvas.parent("p5-canvas-container");
  // stars.push(new Star())

  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  background(0, 100);

  for(let i = 0; i < 2; i++){
    stars.push(new Star()) 
  }
  for(let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].display();
  }

  // clean
  for(let i = stars.length-1; i >=0; i--){
    if(stars[i].s > 7){
      stars.splice(i, 1);
    }
  }


  push()
  translate(width/2-(640/2), height/2)

  // google: https://www.researchgate.net/publication/369936547/figure/fig3/AS:11431281390808525@1745295140421/The-face-mesh-landmarks.tif

  // Draw all the tracked face points
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];
    for (let j = 0; j < face.keypoints.length; j++) {
      let keypoint = face.keypoints[j];
      if(j == 10 || j == 152){
        fill("red");
      }else{
        fill(0, 255, 0);
      }
      
      noStroke();
      circle(keypoint.x, keypoint.y, 5);
    }
  }

  // draw a line between point 10 and 152
  if(faces.length>0){
    let x1 = faces[0].keypoints[10].x
    let y1 = faces[0].keypoints[10].y
    let x2 = faces[0].keypoints[152].x
    let y2 = faces[0].keypoints[152].y
    stroke(255)
    noFill();
    line(x1, y1, x2, y2)
    let angle = atan2(y2 - y1, x2 - x1);
    faceAngle = degrees(angle)-90  // this variable is global so we can use it inside the stars to set their origin
    console.log(faceAngle)

    textAlign(CENTER);
    fill("red")
    noStroke();
    textSize(15)
    text(round(faceAngle), x1, y1-15)

    // dy = y2 - y1
    // dx = x2 - x1
    // theta = tan(dy/dx)
    // theta *= 180/PI // rads to degs
    // console.log(theta)
    
  }
  


  pop()


  // textAlign(CENTER);
  // fill("green")
  // textSize(100)
  // text(stars.length, width/2, height/2)

}

class Star{
  constructor(){
    this.s =  0.05
    this.a =  random(360)

    // this.originX = mouseX; // variable point
    this.originX = map(faceAngle, -45, 45, 0, width)

    let r = random(); // 0-1
    if(r < 0.5){
      this.type = "ring"
    }else{
      this.type = "star"
    }
    
  }
  update(){
    this.s *= 1.04
    // this.s = map(mouseX, 0, width, 0, 1)
    // keep turning vision
    this.originX = lerp(this.originX, width/2, 0.02)
  }
  display(){
    push()
    translate(this.originX, height/2)
    rotate(radians(this.a))
    scale(this.s)

    
    if(this.type == "star"){
      noStroke();
      fill(255, 190)
      circle(0, 200, 20)

    }else if(this.type == "ring"){

      stroke(255, 30);
      noFill();
      circle(0, 0, 200)
      // circle(0, 0, 180)
      // circle(0, 0, 160)

    }
    

    // fill("red")
    // circle(0, 0, 5)
    pop()
  }
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}