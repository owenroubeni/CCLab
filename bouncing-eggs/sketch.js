// let egg1;
// let egg2;  
let basket = []; // eggArray, eggs   // <--------

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  // egg1 = new Egg(100, 300); 
  // egg2 = new Egg(200, 100); 


  // // ADD ONE SINGLE EGG
  // let egg = new Egg(100, 100); 
  // basket.push(egg);  

  for(let i = 0; i < 5; i ++){  // <--------
    let egg = new Egg(random(0, width), random(0, height));   // <--------
    basket.push(egg);    // <--------
  }                     // <--------


  console.log(basket)
}

function draw() {
  background(20, 100, 200);

  // egg1.update()
  // egg1.display()

  // egg2.update()
  // egg2.display() 


  // basket[0].update();  // <--------
  // basket[0].display(); // <--------

  for(let i = 0; i < basket.length; i++){
    basket[i].update();  // <--------
    basket[i].display(); // <--------
  }
  
}


class Egg{
  constructor(startX, startY){ 
    // properties
    this.x = startX; 
    this.y = startY; 
    this.diaX = 80;
    this.diaY = 130;
    this.speedX = random(-2,2); 
    this.speedY = random(-2,2); 
    this.scaleFactor = random(0.3, 1); 

    this.showYolk = false;

  }
  update(){
    // this.x = this.x + this.speedX;
    this.x += this.speedX;
    this.y += this.speedY;

    if(this.x < 0 || this.x > width){
      this.speedX = -this.speedX

   
      this.showYolk = !this.showYolk
    }

    if(this.y < 0 || this.y > height){
      this.speedY = -this.speedY
      this.showYolk = !this.showYolk
    }


  }
  display(){
    push();
    translate(this.x, this.y);
    scale(this.scaleFactor);  // <--------

    // circle(0,0, this.dia)

    noStroke();
    fill(255, 200);
    // UPPER HALF
    // ellipse(0, 0, this.diaX, this.diaY)
    arc(0, 0, this.diaX, this.diaY, PI, 2*PI)

    // LOWER HALF
    // ellipse(0, 0, this.diaX, this.diaX)
    arc(0, 0, this.diaX, this.diaX, 0, PI)

    if(this.showYolk == true){
      fill(240, 140, 40);
      circle(0, 0, this.diaX/2)
    }
    

    pop();
  }
}


function mousePressed(){

  // add egg on mouse location
  let egg = new Egg(mouseX, mouseY);  
  basket.push(egg);    

}