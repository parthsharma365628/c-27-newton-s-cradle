
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload(){}
function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the objects Here.
	bob1=new bob (155,400,25)
	bob2=new bob(200,400,25)
	bob3=new bob(245,400,25)
	bob4=new bob(290,400,25)
	bob5=new bob(335,400,25)
	bob6=new bob(380,400,25)


	log1 = new log(285,200)
	
    rope1= new sling(bob1.body,{x:155,y:210})
	rope2= new sling(bob2.body,{x:205,y:210})
	rope3= new sling(bob3.body,{x:255,y:210})
	rope4= new sling(bob4.body,{x:305,y:210})
	rope5= new sling(bob5.body,{x:355,y:210})
	rope6= new sling(bob6.body,{x:405,y:210})
	
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightBlue");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  bob6.display()
  
  log1.display()
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  rope6.display()

}
function keyPressed(){
	if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0})
}
}