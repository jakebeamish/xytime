let scale = 0.003

function setup() {
  setAttributes('antialias', true);
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(10)

}

function draw() {


  background(0, 100);


  let t = frameCount * -5;
  let z = 0;
  stroke(255, 255);
  translate(-width/2, -height/2, -1000);
  // translate(0, -height / 2, -1000)
  // rotateY(frameCount * 0.01)


  rotateY(PI/3);
  // rotateZ(TWO_PI - PI/2);


  // rotateZ(PI/2);

  // rotateX(frameCount * 0.1)
  noFill();
  rectMode(CENTER);
  // rotateY(TWO_PI * 0.4)
  strokeWeight(2);
  rect(width / 2, height / 2, width, height);
  line(0, noise(t * scale, 1) * height, width, noise(t * scale, 1) * height);
  line(noise(t * scale, 0) * width, 0, noise(t * scale, 0) * width, height);

  beginShape();
  vertex(noise(t * scale, 0) * width, noise(t * scale, 1) * height, -5000)
  vertex(noise(t * scale, 0) * width, noise(t * scale, 1) * height, 3000)
  endShape();

  beginShape();

  strokeWeight(10);
  point(noise(t * scale, 0) * width, noise(t * scale, 1) * height);
  strokeWeight(8);
  for (z = -5000; z < 5000; z++) {
    // rotateX((z+1)/1000 * TWO_PI)
    vertex(noise((t + z) * scale, 0) * width, noise((t + z) * scale, 1) * height, z);
  }
  endShape();
}
