let kick;

function preload() {
  let kick = loadspot(sound / assets / kick.mp3)
}



function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220);
}

function mousePressed() {
  kick.play()



}