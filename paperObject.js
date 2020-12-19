class PaperObject{
constructor(x,y,radius) {
var options={
   "restituition":0.3,
   "friction":0.5,
   "density":1.2,
}
 this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
this.image = loadImage("paper.png");


World.add(world,this.body);    
}
display() {
   var pos = this.body.position;
   var angle = this.body.angle;
   push();
   translate(pos.x, pos.y);
    rotate(angle);
   ellipseMode(RADIUS);
   fill("Purple");
   image(this.image,0,0,this.radius,this.radius);
   pop();
}




}