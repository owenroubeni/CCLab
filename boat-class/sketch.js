function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(30, 50, 240);

  class Boat{
constructor(){
x = 100
y = 100
this.scalefactor = 1

}
display(){
push()
translate(this.x, this.y)

fill("red")
circle(0,0,5)

pop()

}

  }
}
