function Person(x,y,m) {
  this.pos = createVector(50+x, height-30-y*10);
  this.vel = createVector(1, 0);
  this.acc = createVector(0, 0);
  this.size=30;
  this.mass = m;
  this.hitCount=0;

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
    fill(this.pos.x%255,this.pos.y%255,this.size%255);
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  this.edges = function(obj) {
    if (this.pos.y > height-30) {
      this.vel.y *= -0.3; //-1 for bouncing
      this.pos.y = height-30;
    }
    // if (this.pos.x<obj.
  }
  
  this.hits = function(obj){
    
//     if(this.pos.x>obj.x &&this.pox.x<obj.x+obj.size){
      
//     }
    for(let i in obj){
      
    if(this.pos.x>obj[i].x && this.pos.x<obj[i].x+obj[i].width){
      stroke(30,100,200);
      textSize(50);
      text(this.hitCount++,50,50,250);
      }
    }
  }
}

