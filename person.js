function Person(y,m) {
  this.pos = createVector(50+y, height-30-y*10);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.mass = 0;

  this.applyForce = function(force) {
    // var f = force.copy();
    // f.div(this.mass);
    this.acc.add(force);
  }
  
  this.moveRight = function(){
    this.vel.sub(this.vel.copy());
    this.vel.add(2)
  }
  
  this.moveLeft = function(){
    this.vel.sub(this.vel.copy());
    this.vel.add(-2)
  }
  
  this.stop = function(){
    this.vel = createVector(0,0);
  }
  
  this.onGround = function(){
    return this.vel.y == 0;
  }
  
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  
  this.display = function() {
    fill(30);
    rect(this.pos.x, this.pos.y, 30, 30);
  }

  this.edges = function() {
    if (this.pos.y > height-30) {
      this.vel.y *= 0; //-1 for bouncing
      this.pos.y = height-30;
    }
  }
}