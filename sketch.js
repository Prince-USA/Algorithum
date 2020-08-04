var fixed_rect, moving_rect,distances


function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(400, 200, 50, 50);
  moving_rect = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;
  fixed_rect.shapeColor = "green";
  moving_rect.shapeColor = "green";
  distances = (moving_rect.x - fixed_rect.x);
  text(distances,700,350);
  fixed_rect.debug = true;
  moving_rect.debug = true;

  if(moving_rect.x - fixed_rect.x < fixed_rect.width/2 + moving_rect.width/2 &&
    fixed_rect.x -moving_rect.x < fixed_rect.width/2 + moving_rect.width/2 
    && moving_rect.y - fixed_rect.y < fixed_rect.height/2 + moving_rect.height/2 
    && fixed_rect.y - moving_rect.y < fixed_rect.height/2 + moving_rect.height/2){
    
    fixed_rect.shapeColor = "blue";
    moving_rect.shapeColor = "blue";
  } else{
    fixed_rect.shapeColor = "green";
    moving_rect.shapeColor = "green";
  }
 
  drawSprites();
}