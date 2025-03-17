// Make control console longer and button colors interactive

// Make the jellyfish color change when clicking on trash

// Add noise to either jellyfish movement when in lightmode or the jellyfish body

// Add more decoration

let gd1x, gd1y, gd1size, gd1green; // glowing dot 1 data

let gd2x, gd2y, gd2size, gd2green; // glowing dot 2 data

let gd3x, gd3y, gd3size, gd3green; // glowing dot 3 data

let gd4x, gd4y, gd4size, gd4green; // glowing dot 4 data

let gd5x, gd5y, gd5size, gd5green; // glowing dot 5 data

let gd6x, gd6y, gd6size, gd6green; // glowing dot 6 data

let gd7x, gd7y, gd7size, gd7green; // glowing dot 7 data

let gd8x, gd8y, gd8size, gd8green; // glowing dot 8 data

let gd9x, gd9y, gd9size, gd9green; // glowing dot 9 data

let gd10x, gd10y, gd10size, gd10green; // glowing dot 10 data

let gd11x, gd11y, gd11size, gd11green; // glowing dot 11 data

let gd12x, gd12y, gd12size, gd12green; // glowing dot 12 data

let gd13x, gd13y, gd13size, gd13green; // glowing dot 13 data

let gd14x, gd14y, gd14size, gd14green; // glowing dot 14 data

let gd15x, gd15y, gd15size, gd15green; // glowing dot 15 data

let gd16x, gd16y, gd16size, gd16green; // glowing dot 16 data

let gd17x, gd17y, gd17size, gd17green; // glowing dot 17 data

let gd18x, gd18y, gd18size, gd18green; // glowing dot 18 data

let gd19x, gd19y, gd19size, gd19green; // glowing dot 19 data

let gd20x, gd20y, gd20size, gd20green; // glowing dot 20 data

// Light Switch
let buttonColor = "red";

// Jellyfish Varibles
let jellyX = 0; //
let jellyY = 250;
let speed = 2;
let pulse = 0;
let pulseDirection = 1;
let jellyfishGr;
let jellyfishColor;

// Light On Variables
let lightON = false;
let s = 1;

let shrink = false;

//trash interaction
let trashColor = false;
let scaredTrash = false;
let disableCenter = false;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");


  jellyfishGr = random(100, 255);
  //255, 100, 200

  gd1x = random(width); //x
  gd1y = random(height); // y
  gd1size = random(4, 9); //size
  gd1green = random(100, 255);

  gd2x = random(width); //x
  gd2y = random(height); // y
  gd2size = random(4, 9); //size
  gd2green = random(100, 255);

  gd3x = random(width); //x
  gd3y = random(height); // y
  gd3size = random(4, 9); //size
  gd3green = random(100, 255);

  gd4x = random(width); //x
  gd4y = random(height); // y
  gd4size = random(4, 9); //size
  gd4green = random(100, 255);

  gd5x = random(width); //x
  gd5y = random(height); // y
  gd5size = random(4, 9); //size
  gd5green = random(100, 255);

  gd6x = random(width); //x
  gd6y = random(height); // y
  gd6size = random(4, 9); //size
  gd6green = random(100, 255);

  gd7x = random(width); //x
  gd7y = random(height); // y
  gd7size = random(4, 9); //size
  gd7green = random(100, 255);

  gd8x = random(width); //x
  gd8y = random(height); // y
  gd8size = random(4, 9); //size
  gd8green = random(100, 255);

  gd9x = random(width); //x
  gd9y = random(height); // y
  gd9size = random(4, 9); //size
  gd9green = random(100, 255);

  gd10x = random(width); //x
  gd10y = random(height); // y
  gd10size = random(4, 9); //size
  gd10green = random(100, 255);

  gd11x = random(width); //x
  gd11y = random(height); // y
  gd11size = random(4, 9); //size
  gd11green = random(100, 255);

  gd12x = random(width); //x
  gd12y = random(height); // y
  gd12size = random(4, 9); //size
  gd12green = random(100, 255);

  gd13x = random(width); //x
  gd13y = random(height); // y
  gd13size = random(4, 9); //size
  gd13green = random(100, 255);

  gd14x = random(width); //x
  gd14y = random(height); // y
  gd14size = random(4, 9); //size
  gd14green = random(100, 255);

  gd15x = random(width); //x
  gd15y = random(height); // y
  gd15size = random(4, 9); //size
  gd15green = random(100, 255);

  gd16x = random(width); //x
  gd16y = random(height); // y
  gd16size = random(4, 9); //size
  gd16green = random(100, 255);

  gd17x = random(width); //x
  gd17y = random(height); // y
  gd17size = random(4, 9); //size
  gd17green = random(100, 255);

  gd18x = random(width); //x
  gd18y = random(height); // y
  gd18size = random(4, 9); //size
  gd18green = random(100, 255);

  gd19x = random(width); //x
  gd19y = random(height); // y
  gd19size = random(4, 9); //size
  gd19green = random(100, 255);

  gd20x = random(width); //x
  gd20y = random(height); // y
  gd20size = random(4, 9); //size
  gd20green = random(100, 255);
}

function draw() {
  // background(220);

  if (lightON == true) {
    lightMode();
  } else {
    darkMode();
  }

  // Set Jellyfish
  moveJellyfish();
  drawJellyfish(jellyX, jellyY, pulse);

  // Submarine Border
  noStroke();
  fill(225, 173, 1);
  rect(0, 0, 100, height);
  rect(0, 0, width, 100);
  rect(700, 0, 100, height);
  rect(0, 400, width, 100);

  // Pipes
  fill(62, 39, 35);
  rect(45, 0, 20, 430); // Left
  rect(758, 70, 20, 400); // Right
  rect(150, 49, 500, 20); // Top

  // Control Console
  fill(110, 110, 110);
  rect(100, 400, 600, 100, 10);

  // Console Buttons (GRID)
  for (let y = 410; y < 500; y += 20) {
    for (let x = 110; x < 700; x += 20) {
      fill(0);
      circle(x, y, 10);
    }

    // Light Switch
    fill(buttonColor);
    rect(25, 425, 60, 50);
    fill(255);
  }

  waterBottle(161, 150, 0.05);

  canTrash(290, 325, 0.07);

  spoonTrash(600, 298, 0.09);

  canwrapTrash(465, 191, 0.06);

  push();

  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  textStyle(BOLD);
  text("Light", 55, 454);

  pop();
}

function mousePressed() {
  if (mouseX > 25 && mouseX < 85 && mouseY > 425 && mouseY < 475) {
    if (buttonColor == "red") {
      buttonColor = "green";
      repaint();
    } else if (buttonColor == "green") {
      buttonColor = "red";
      repaint();
    }
  }

  if (
    mouseX > 161 &&
    mouseX < 105 + 10 + 161 &&
    mouseY > 150 &&
    mouseY < 150 + 40
  ) {
    trashColor = true;

    jellyfishColor = color(173, 216, 230);
    scaredTrash = true;
  } else if (mouseX > 290 && mouseX < 325 && mouseY > 325 && mouseY < 375) {
    trashColor = true;

    jellyfishColor = color("red");
    scaredTrash = true;
  } else if (mouseX > 590 && mouseX < 635 && mouseY > 290 && mouseY < 325) {
    trashColor = true;

    jellyfishColor = color(255);
    scaredTrash = true;
  } else if (
    mouseX > 465 &&
    mouseX < 465 + 75 &&
    mouseY > 191 &&
    mouseY < 236
  ) {
    trashColor = true;

    jellyfishColor = color(50);
    scaredTrash = true;
  }
}

function repaint() {
  lightON = !lightON;

  trashColor = false;
  scaredTrash = false;
}

function lightMode() {
  fill(70, 130, 180);
  rect(100, 100, 600, 300);

  // jellyfishColor = color(255, 100, 200);

  if (trashColor == false) {
    jellyfishColor = color(255, 100, 200);
  }
}

function darkMode() {
  fill(10, 20, 50);
  rect(100, 100, 600, 300);

  fill(0, gd1green, 200, 150);
  circle(gd1x, gd1y, gd1size);

  fill(0, gd2green, 200, 150);
  circle(gd2x, gd2y, gd2size);

  fill(0, gd3green, 200, 150);
  circle(gd3x, gd3y, gd3size);

  fill(0, gd4green, 200, 150);
  circle(gd4x, gd4y, gd4size);

  fill(0, gd5green, 200, 150);
  circle(gd5x, gd5y, gd5size);

  fill(0, gd6green, 200, 150);
  circle(gd6x, gd6y, gd6size);

  fill(0, gd1green, 200, 150);
  circle(gd7x, gd7y, gd7size);

  fill(0, gd8green, 200, 150);
  circle(gd8x, gd8y, gd8size);

  fill(0, gd9green, 200, 150);
  circle(gd9x, gd9y, gd9size);

  fill(0, gd10green, 200, 150);
  circle(gd10x, gd10y, gd10size);

  fill(0, gd11green, 200, 150);
  circle(gd11x, gd11y, gd11size);

  fill(0, gd12green, 200, 150);
  circle(gd12x, gd12y, gd12size);

  fill(0, gd13green, 200, 150);
  circle(gd13x, gd13y, gd13size);

  fill(0, gd14green, 200, 150);
  circle(gd14x, gd14y, gd14size);

  fill(0, gd15green, 200, 150);
  circle(gd15x, gd15y, gd15size);

  fill(0, gd16green, 200, 150);
  circle(gd16x, gd16y, gd16size);

  fill(0, gd17green, 200, 150);
  circle(gd17x, gd17y, gd17size);

  fill(0, gd18green, 200, 150);
  circle(gd18x, gd18y, gd18size);

  fill(0, gd19green, 200, 150);
  circle(gd19x, gd19y, gd19size);

  fill(0, gd20green, 200, 150);
  circle(gd20x, gd20y, gd20size);

  //Jellyfish Color
  let sinValue = sin(frameCount * 0.01);
  jellyfishGr = map(sinValue, -1, 1, 100, 200);
  jellyfishColor = color(0, jellyfishGr, 200);
}

function moveJellyfish() {
  if (jellyX < 400 && disableCenter == false) {
    jellyX += speed * 0.5;
  }

  if (scaredTrash == true) {
    let sinValueX = noise(frameCount * 0.03);
    let mapNumX = map(sinValueX, 0, 1, 180, 600);
    jellyX = mapNumX;

    let sinValueY = noise(frameCount * 0.02 - 15);
    let mapNumY = map(sinValueY, 0, 1, 100, 400);
    jellyY = mapNumY;
    disableCenter = true;
  }

  // Pulse Motion
  pulse += pulseDirection * 0.5;
  if ((pulse > 10) | (pulse < -10)) {
    pulseDirection *= -1;
  }
}

function drawJellyfish(x, y, pulse) {
  push();
  translate(x, y);

  // Jellyfish Color
  fill(jellyfishColor);
  // fill(255, 100, 200);
  noStroke();

  // Body
  if (lightON == true) {
    s = s - 0.003;
    if (s < 0.2) {
      s = 0.2; // Stop Point
    }
    scale(s);
    shrink = true;
  } else if (shrink == true) {
    s = s + 0.003;
    if (s > 1) {
      s = 1; // Stop Point
    }
    scale(s);
  }

  ellipse(0, 0, 82 + pulse, 60 + pulse);

  // Tentacles
  // stroke(255, 100, 200);
  stroke(jellyfishColor);
  strokeWeight(3);
  // for (i = -30; i <= 30; i += 15) {
  //   line(i, 10, i + random(-5, 5), 75);}

  for (let i = 10; i < 84; i++) {
    let x = -22 + sin(i / 10 + frameCount * 0.12 + PI) * 5;
    circle(x, i, 1);
  }

  for (let i = 10; i < 88; i++) {
    let x = -5 + sin(i / 10 + frameCount * 0.14) * 8;
    circle(x, i, 1);
  }

  for (let i = 10; i < 87; i++) {
    let x = 10 + sin(i / 10 + frameCount * 0.08) * 5;
    circle(x, i, 1);
  }

  for (let i = 10; i < 86; i++) {
    let x = 23 + sin(i / 10 + frameCount * 0.1 + PI / 4) * 7;
    circle(x, i, 1);
  }
  pop();
}

function waterBottle(x, y, freq) {
  if (lightON == true) {
    fill(255, 0, 0);

    let new_y = y + sin(frameCount * freq) * 5;

    // Water Bottle
    fill(173, 216, 230);
    noStroke();
    rect(x, new_y, 105, 40, 20); // Body

    fill(0, 102, 204);
    ellipse(x + 105, new_y + 20, 20, 30); // Cap
  }
}

function canTrash(x, y, freq) {
  if (lightON == true) {
    let new_y = y + sin(frameCount * freq) * 5;

    fill("red");
    noStroke();
    rect(x, new_y, 35, 50, 10);

    fill(50, 50, 50);
    ellipse(x + 35 / 2, new_y + 4, 35, 10);
  }
}

function spoonTrash(x, y, freq) {
  if (lightON == true) {
    let new_y = y + sin(frameCount * freq) * 5;

    stroke(255);
    strokeWeight(3);
    line(x, new_y, x + 35, new_y + 35);

    push();
    translate(x, new_y);
    rotate(PI / 4);
    fill(255);
    ellipse(0, 0, 25, 15);

    pop();
  }
}

function canwrapTrash(x, y, freq) {
  if (lightON == true) {
    let new_y = y + sin(frameCount * freq) * 5;

    // Can Plastic Wrap
    noFill();
    stroke(50);
    strokeWeight(2);

    circle(x, new_y, 30);
    circle(x + 30, new_y, 30);
    circle(x + 60, new_y, 30);
    circle(x, new_y + 30, 30);
    circle(x + 30, new_y + 30, 30);
    circle(x + 60, new_y + 30, 30);
  }
}
