// let greetings1 = "Hallo"
// let greetings2 = "哈喽"

//                  0       1        2              3                4
let greetings = ["Hallo", "哈喽", "Bonjour", "Annyeong-haseyo", "Zdravstvuite"]

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  console.log(greetings)
  console.log(greetings.length)
}

function draw() {
  background(10, 210, 230);

  // text(greetings[0], width / 2, height / 2)
  // text(greetings[1], width / 2, height / 2 + 12)
  // text(greetings[2], width / 2, height / 2 + 24)

  // for loop that loops 3 times!
  for (let i = 0; i < greetings.length; i++) {
   // console.log(i)


   // let arrayIndex = i
    let greeting = greetings[i] // note this is singular
    let y = height / 2 + i * 12
    text(greeting, width / 2, y)
  }

if(i == 0){
  fill("red")
}else if(i == greetings.length-1){
  fill("blue")
}else{ fill(0)
}








}