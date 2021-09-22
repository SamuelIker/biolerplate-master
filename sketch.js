const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var rectangle;
var engine, world;
var object;
var ground;
var rectMode;
var rect;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.World;

  
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);

  World.add(world, ground);
}

function draw() {
  
  background(0,0,0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 20);
  
  drawSprites();
}