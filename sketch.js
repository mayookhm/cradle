
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	log1 = new Log(500,200,500,30);
	ball1 = new Ball(300,300,20,20);
	ball2 = new Ball(400,300,20,20);
	ball3 = new Ball(500,300,20,20);
	ball4 = new Ball(600,300,20,20);
rope1 = new Rope(500,250,5,100);
rope2 = new Rope(300,250,5,100);
rope3 = new Rope(400,250,5,100);
rope4 = new Rope(600,250,5,100);
	//slingshot1 = new Slingshot(ball1.body,log1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 log1.display();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 //slingshot1.display();
}



