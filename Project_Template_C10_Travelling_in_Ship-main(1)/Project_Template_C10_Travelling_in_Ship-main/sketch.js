var seaImg, shipimg1;
var edges, ship;

function preload(){
 seaImg = loadImage("sea.png");
 shipimg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship4.png");
 
}

function setup(){
  createCanvas(600,500);

  sea = createSprite(600,500);
  sea.addAnimation("running",seaImg);
  sea.scale=0.5;
  sea.velocityX=-1;
  
  ship = createSprite(50,200,20,50);
  ship.addAnimation("running",shipimg1);
  
  edges = createEdgeSprites();

  ship.scale=0.25;
  ship.x = 90;
  ship.y = 300;
}

function draw() {
  background("blue");
 
  if (keyDown("enter")){
    ship.velocityX = 5;
  }

  if (keyDown("Left")){
    ship.velocityX = -5;
  }

  if (keyDown("space")){
    ship.velocityX = 0;
  }

  if (sea.x < 0){
    sea.x = sea.width/2;
  }

  ship.collide(edges[3]);

 drawSprites();
}
