// Bouncing DVD Logo
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/131-bouncing-dvd-logo.html
// https://youtu.be/0j86zuqqTlQ

let x;
let y;

let xspeed;
let yspeed;

let dvd;


function preload() {
  dvd = loadImage("me200.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xspeed = 3;
  yspeed = 3;
}


function draw() {
  background(00,80,00);
  // rect(x, y, 80, 60);
  // Draw the DVD logo
  image(dvd, x, y);


  x = x + xspeed;
  y = y + yspeed;

  if (x + dvd.width >= width) {
    xspeed = -xspeed;
    x = width - dvd.width;
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed;
    y = height - dvd.height;
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
  }
}