
var trex ,trex_running;
var edges
var piso, pisoImg, invisible;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");  
pisoImg=loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running", trex_running);
 trex.scale=0.7;


 //piso
piso= createSprite(180,180,600,20);
piso.addImage(pisoImg);
invisible=createSprite(200,190,600,10)
invisible.visible=false;

 edges=createEdgeSprites();
}

function draw(){
  background("lightgray")
piso.velocityX=-2;
if(piso.x < 0){
piso.x=piso.width/2;
}

  if(keyDown("space")&& trex.y>=100){
    trex.velocityY=-10;
   
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(invisible);
  
drawSprites();
}
