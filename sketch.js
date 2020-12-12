var fixedRect, movingRect;
var gameObject1 , gameObject2 , gameObject3 , gameObject4 ;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.shapeColor = "Red";
  movingRect.shapeColor = "yellow";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "Blue";

  gameObject2 = createSprite(300,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject3 = createSprite(100,300  ,50,50);
  gameObject3.shapeColor = "Blue";

  gameObject4 = createSprite(300,300,50,50);
  gameObject4.shapeColor = "green";

  gameObject3.velocityX = 2;
  gameObject4.velocityX = -2;
}

function draw() {
  background(255,255,255);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(gameObject1,movingRect)){
    fixedRect.shapeColor = "black";
    movingRect.shapeColor = "black";
  }
  else{
    fixedRect.shapeColor = "Red";
    movingRect.shapeColor = "yellow";
  }

  bounceOff(gameObject3,gameObject4);
  drawSprites();
}

