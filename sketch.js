const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var paper_object;
var ground;
var dustbinImage;


function preload(){
 dustbinImage = loadImage("dustbingreen.png");


}

function setup() {
	createCanvas(1200,500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(810,450,100,10);
  paper_object = new PaperObject(300,160,50); 
  ground = new Ground(600,490,1200,30);

}
function draw() {
  rectMode(CENTER);
  background(255);
    Engine.update(engine);
    console.log(paper_object.body.position.x);
    console.log(paper_object.body.position.y);
    console.log(paper_object.body.angle);
  
    
  paper_object.display();
    dustbin.display();
    image(dustbinImage,710,330,215,150);
    ground.display();
}

function keyPressed() {

if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paper_object.body,paper_object.body.position,{x:300,y:-500});

}

}





