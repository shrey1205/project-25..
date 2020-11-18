
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dusbinImg, dustBin;

function preload()  {
   dustbinImg = loadImage("sprites/dustbin.png");


}


function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	dustBin = createSprite(1200,500, 10, 10);
	dustBin.addImage(dustbinImg);

	dustbin = new Dustbin(1200, 650);
	ball = new Ball(200,450,40);
	ground = new Ground(width/2, 670, width,20);
}


function draw() {
  
  background(150);


  ball.display();
  dustbin.display();
  ground.display();

  
 
  drawSprites();
}


function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-85});
   }


}
