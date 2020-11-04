const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var ground;

function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;
 // createSprite(400, 200, 50, 50);
  ground= new Ground(400,390,800,20);

  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });

    Engine.run(engine);
}

function draw() {
  background(255,255,255);  
 ground.display();

 drawSprites();
}