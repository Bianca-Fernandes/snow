// var Engine = Matter.Engine,
  // World = Matter.World,
  // Events = Matter.Events,
  // Bodies = Matter.Bodies;
  const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var girl, boy, inviGround, snow, wind;

function preload(){
  bg = loadImage("snow.jpg");
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl.png");
  wind = loadSound("wind.mp3");
}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;

  boy = createSprite(500, 400, 50, 50);
  boy.addImage(boyImg);
  boy.scale = 0.5;

  girl = createSprite(300 ,370, 50, 50);
  girl.addImage(girlImg);
  girl.scale = 0.5;

  inviGround = createSprite(400, 495, 800, 10);
  inviGround.visible = false;

  // displaying();
  // snow = new Snow(200, 100, 100);

  // wind.play();
}

function draw() {
  background(bg);  

  Engine.update(engine);

  girl.velocityY = 5;
  boy.velocityY = 5;

  boy.collide(inviGround);
  girl.collide(inviGround);

  displaying();
  snow.display();
  // console.log(frameCount%60===0);
  if(frameCount%60=== 0){
    displaying();
    snow.display();
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode == 32)
    boy.velocityY -= 50; 

  if(keyCode == 87)
    girl.velocityY -= 50; 

  if(keyCode == 37)
    boy.x -= 30;
  
  if(keyCode == 39)
    boy.x+= 30;

  if(keyCode == 65)
    girl.x -= 30

  if(keyCode == 68)
     girl.x += 30
  }

  function displaying(){
rand = random(100, 400);
console.log(rand);
snow = new Snow(rand, 100, 100);
// snow.display();
  }