var person = [];

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 5; i++) {
    person[i] = new Person(i * 20);
  }
}

function keyPressed() {
  if (keyCode == UP_ARROW ) {
    for (let i = 0; i < 5; i++) {
      if (person[i].onGround()){
      var jump = createVector(0, -5);
      person[i].applyForce(jump);
      }
    }
  } else if (keyCode == RIGHT_ARROW) {
    for (let i = 0; i < 5; i++) {
      person[i].moveRight();
    }
  } else if (keyCode == LEFT_ARROW) {
    for (let i = 0; i < 5; i++) {
      person[i].moveLeft();
    }
  } else if (keyCode == DOWN_ARROW) {
    for (let i = 0; i < 5; i++) {
      person[i].stop();
    }
  }


}

function draw() {
  background(220, 50, 40);
  let gravity = createVector(0, 0.1);

  //translate(-person[0].pos.x + 50, 0);
  let force = createVector(-0.01, 0);
  for (let i = 0; i < 5; i++) {
    person[i].applyForce(gravity);
    person[i].update();
    person[i].display();
    person[i].edges();
  }

  fill(50, 50, 100);
  rect(400, height - 50, 50, 50);
}