  class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      } 
     
      World.add(world, this.body);
    }
   
    display(){
    var pos =this.body.position;
    var angle = this.body.angle
    Matter.Body.translate(body, translation)
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }

}