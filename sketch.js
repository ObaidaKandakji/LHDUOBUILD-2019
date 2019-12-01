var person = [];

function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < 5; i++) {
    person[i] = new Person(i*20);
  }
}

function keyPressed() {
  if (key == 'a') {
    for (let i = 0; i < 5; i++) {
    var jump = createVector(0, -3);

      person[i].applyForce(jump);
    }
  }
}

function draw() {
  background(220, 50, 40);

  let gravity = createVector(0, 0.1);

  translate(-person[0].pos.x + 50, 0);

  let force = createVector(-0.01, 0);
  for (let i = 0; i < 5; i++) {

    person[i].applyForce(gravity);
   // person[i].applyForce(force);

    if (mouseIsPressed) {
      var jedi = createVector(-0.05, 0);
      person[i].applyForce(jedi);
    }


    person[i].update();
    person[i].display();
    person[i].edges();
  }
//obstacle
  fill(50, 50, 100);
  rect(400, height - 50, 50, 50);
}
