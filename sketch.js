const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var ground;
var engine;
var world;
var stand;
var polygon;
var slingshot;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var ballImage;

function preload()
{
	ballImage=loadImage("ball.png");
}


function setup() {
  var canvas=createCanvas(1300,600);
  engine = Engine.create();
	world = engine.world;
 // createSprite(400, 200, 50, 50);
  ground = new Ground(width/2,height,1300,20);
  stand = new Ground(800, 570,400,10);
  box1= new Box(800,550,30,30);
  box2= new Box(770,550,30,30);
  box3= new Box(740,550,30,30);
  box4= new Box(710,550,30,30);
  box5= new Box(830,550,30,30);
  box6= new Box(860,550,30,30);
  box7= new Box(890,550,30,30);
  
  box8= new Box(800,520,30,30);
  box9= new Box(770,520,30,30);
  box10= new Box(740,520,30,30);
  box11= new Box(830,520,30,30);
  box12= new Box(860,520,30,30);

  box13= new Box(800,490,30,30);
  box14= new Box(770,490,30,30);
  box15= new Box(830,490,30,30);

  box16= new Box(800,460,30,30);
  
  polygon= Bodies.circle(50,200,10);
  World.add(world,polygon);

  slingshot= new SlingShot(this.polygon,{x:100,y:300});

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
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	stand.display();
	imageMode(CENTER)
	image(ballImage,polygon.position.x,polygon.position.y,40,40);
	slingshot.display();
//	box1.display();

 drawSprites();
}


function mouseDragged()
{
	Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}