var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  //loading image to banana and obstacle
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  // creating group for food and obstacle
  FoodGroup = new Group();
   obstacleGroup= new Group();
}



function setup() {
  createCanvas(670,400);
  //adding score and survival time
  score=0;
  survivalTime=0
  
  // creating ground and monkey
  ground=createSprite(0,400,1500,10);
  monkey=createSprite(90,370,10,10);
  //Adding animation on monkey
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.1;
}


function draw() {
  //adding background on project
  background("skyblue");
  
  // adding control on monkey
  if(keyDown("space")&&monkey.y >= 350){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(ground);
 
  // adding velocity on ground
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
    score=score+1;
      }
  
 
 drawSprites()
  fill("white") ;
  text("Score: "+ score, 500,50);
  
  fill("black");
  var survivalTime=Math.ceil(getFrameRate());
  text("Survival Time: " + survivalTime,150,50 );
  
}


function fruits(){
  banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX = -3;
  FoodGroup.add(banana);
}

function stones() {
  obstacle=createSprite(670,380,10,10);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.scale=0.2;
  
  obstacleGroup.add(obstacle);
}






