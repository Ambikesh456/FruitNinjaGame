var PLAY  = 1;
var END  = 0;
var gameState = 1;

var sword,sword2,fruits,enemy,FruitGroup,EnemyGroup;
var backGround;
var score = 0;

var gameover,gameOver,cutSound;

function preload(){
  sword1 = loadImage("sword.png");
  enemys = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  sword2 = loadImage("gameover.png")
  
  cutSound = loadSound("knifeSwooshSound.mp3")
  gameOver  =loadSound("gameover.mp3")
}
function setup() {
  createCanvas(400, 400);
  
  
  
  
  
  
  
 
  fruitsGroup = new Group();
  enemyGroup = new Group();
  
}

function draw() {
  
 background ("lightblue")
  text ("score: "+score, 200,50)
  
   var sword = createSprite(200,200,30,50);
  sword.addImage(sword1);
  sword.scale = 0.5;
  sword.lifetime = 1;
  
  
  fruits();
  enemy();
  
  if (gameState === PLAY){
    
    
    sword.x = World.mouseX
    sword.y = World.mouseY
    
     if (fruitsGroup.isTouching(sword)){
    fruitsGroup.destroyEach();
    score = score+1;
    cutSound.play();  
  }
  if (enemyGroup.isTouching(sword)){
    gameState = END;
    gameOver.play();
  }
  
    
    
  }
  
  if (gameState === END){
   sword.addImage(sword2);
    
     enemyGroup.destroyEach();
    fruitsGroup.destroyEach(); 
    
    enemyGroup.setVelocityEach(0);
    fruitsGroup.setVelocityEach(0);
    
    enemyGroup.setLifetimeEach (-1) ;
    fruitsGroup.setLifetimeEach(-1);
    
  }
  
  
  
  
 
  drawSprites();
  
 
}

function fruits(){
  
  
  if(frameCount % 70 === 0){
    var fruit = createSprite(400,Math.round(random(0,400)),10,10)
  fruit.velocityX = -4;
    fruit.scale = 0.1;
    fruit.lifetime = 200;
    fruitsGroup.add(fruit);
    
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fruit.addImage(fruit1);
              break;
      case 2: fruit.addImage(fruit2);
              break;
      case 3: fruit.addImage(fruit3);
              break;
      case 4: fruit.addImage(fruit4);
              break;
     
      default: break;
    }
    
  }
}

function enemy(){
  
  
  if(frameCount % 300 === 0){
    var enemy = createSprite(400,Math.round(random(0,400)),10,10)
  enemy.velocityX = -3;
    enemy.scale = 1;
    enemy.addAnimation("poo",enemys)
    enemy.lifetime = 200;
    enemyGroup.add(enemy);
    
    
    }
    
  
}