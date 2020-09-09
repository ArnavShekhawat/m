
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivaltime,ground;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bananaGroup=new Group();
  obstacleGroup=new Group();
 
}



function setup() {
  monkey=createSprite(60,300);
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
monkey.scale=0.1 ;
  
  
  ground=createSprite(200,300,400,10)
ground.x = ground.width /2;
   survivaltime=0;
 
}


function draw() {
   
  
background(225);
   
bananas();
  obstacles();
  
  if(obstacleGroup.isTouching(monkey)){
     obstacleGroup.destroyEach ();
    
    survivaltime=survivaltime=0;;
     
     }
  
 monkey.collide(ground);
  
  
  if(monkey.y>300){
  monkey.y=300;
    
  }
  
 
  if(keyDown("space")&&monkey.y<=362){
  monkey.velocityY=- 12 ;
}
 if(monkey.y<100){ 
     monkey.velocityY=0.1;
 monkey.y=300;
 }
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
     survivaltime=survivaltime+2;
     
     
     }
  
 drawSprites();
  textSize(15);
  stroke("blue");
  text("Survival Time "+ survivaltime,150,20);
}

function bananas(){
  if(World.frameCount%80===0){
  banana=createSprite(400,400,20,20);
  banana.scale=0.1;
 banana.y=Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.velocityX=-8;
    bananaGroup.add(banana);
    banana.setLifetime=100;
    
  
  }
}

function obstacles(){
if(World.frameCount%300===0){
obstacle=createSprite(400,280,20,20);
obstacle.addImage(obstacleImage);
obstacle.scale=0.1;
obstacle.addImage(obstacleImage);
obstacle.velocityX=-8;
   obstacleGroup.add(obstacle);
   obstacle.setLifetime=100;


}
}


