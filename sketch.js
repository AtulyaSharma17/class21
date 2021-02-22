// var fixedRect,movingRect;
// function setup() {
//   createCanvas(800,400);
//   fixedRect=createSprite(400, 200, 50, 50);
//   movingRect=createSprite(600, 200, 50, 50);
//   fixedRect.shapeColor="green";
//   movingRect.shapeColor="green";

//   obj1=createSprite(100, 50, 50, 50);
//   obj1.shapeColor="green";

//   obj2=createSprite(200, 50, 50, 50);
//   obj2.shapeColor="green";
// }
    
// function draw() {
//   background(0); 
//   movingRect.y=World.mouseY;
//   movingRect.x=World.mouseX;


//   console.log("distance="+(movingRect.x-fixedRect.x));
//   console.log("Add of widths:"+(fixedRect.width/2+movingRect.width/2));
  
  
//   if(isTouching(obj1,movingRect))
//   {
//     obj1.shapeColor="blue";
// movingRect.shapeColor="blue";
//   }
//   else{
//     obj1.shapeColor="green";
//     movingRect.shapeColor="green";
//   }

//   drawSprites();
// }



  




var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}


function draw() {
  background(0,0,0); 
  
  bounceOff(movingRect,fixedRect);

  drawSprites();
}


// if(sprite1.isTouching(sprite2)){
//   sprite1.shapeColor="blue";
//   sprite2.shapeColor="blue";
// }
