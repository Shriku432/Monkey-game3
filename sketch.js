
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var SurvivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
    

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
 
createCanvas (600,600);
monkey=createSprite(150,200,5,4)
 
monkey.addAnimation("monkey",monkey_running)
monkey.scale=0.1

  ground = createSprite(200,180,600,10);
  
  ground.x = ground.width /2;
  ground.velocityX = -4; 
  console.log(ground.x)
 
  obstacleGroup = new Group();
  FoodGroup = new Group();
}


function draw() {
background("white")
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  
  stroke ("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+ SurvivalTime, 100,50);
  
 ground.velocityX=-4;
  if(keyDown("space")&& monkey.y >= 150) {
    monkey.velocityY = -10;}
  
    monkey.velocityY = monkey.velocityY + 0.9
  
    if (ground.x < 0){
    ground.x = ground.width/2;
    }
  monkey.collide(ground);
  

spawnbananas();

spawnobstacle();
  
drawSprites() ;
}

function Spawnbananas(){
if(World.frameCount%80===0){
banana= createSprite(100,180,5,4)   
banana.addImage(bananaImage)
banana.scale=0.1  
banana.y = Math.round(random(80,120));
banana.velocityX=-3
banana.lifetime=100;
}  
  
function Spawnobstacle(){
if(World.frameCount%300===0){
obstacle= createSprite(100,180,5,4)   
obstacle.addImage(obstacleImage)
obtacle.scale=0.1  
obstacle.y = Math.round(random(80,120));
obstacle.velocityX=-3
obstacle.lifetime=100;  
  
}


}

}