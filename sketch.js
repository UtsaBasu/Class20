var rectangle1 , rectangle2;


function setup() {
  createCanvas(800,400);
  rectangle1=createSprite(400, 200, 50, 50);
  rectangle1.shapeColor="red";
  rectangle2=createSprite(460, 260, 50, 50);
  rectangle2.shapeColor="red";
}

function draw() {
  background(255,255,255); 
  rectangle1.x=World.mouseX;
  rectangle1.y=World.mouseY;

  if(rectangle1.x-rectangle2.x<(rectangle1.width/2)+(rectangle2.width/2)&&rectangle2.x-rectangle1.x<(rectangle1.width/2)+(rectangle2.width/2)
  &&rectangle1.y-rectangle2.y<(rectangle1.height/2)+(rectangle2.height/2)&&rectangle2.y-rectangle1.y<(rectangle1.height/2)+(rectangle2.height/2)){
    rectangle1.shapeColor="blue";
    rectangle2.shapeColor="blue";
  }
  else{
    rectangle1.shapeColor="red";
    rectangle2.shapeColor="red";
  }

  drawSprites();
}