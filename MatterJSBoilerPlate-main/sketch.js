
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var quadrado
var chao
var reta
var bol
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bol = Bodies.circle(400,100,40);
	World.add(world,bol);

    reta = Bodies.rectangle(200,100,100,50);
	World.add(world,reta);

    quadrado = Bodies.rectangle(600,100,50,50);
	World.add(world,quadrado);

	chao = Bodies.rectangle(400,690,800,10, {isStatic:true});
	World.add(world,chao);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("green");
  
  ellipse(bol.position.x,bol.position.y,40)
  rect(reta.position.x,reta.position.y,100,50) 
  rect(quadrado.position.x,quadrado.position.y,50,50) 

  drawSprites();
 
}



