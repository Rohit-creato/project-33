var bg, bgimage
var cat, catimage
function preload(){
  bgimage = loadImage("snow1.jpg")
  catimage = loadImage ("cat.jpg")
}


function setup() {
  createCanvas(800,400);
bg = createSprite (400,200)
bg.addImage(bgimage)
cat = createSprite(100,300)
cat.addImage(catimage)

}

function draw() {
  background(255,255,255);
  if(keyDown(RIGHT_ARROW)){
    cat.x=cat.x+10
  }  
  if(keyDown(LEFT_ARROW)){
    cat.x=cat.x-10
  }
  drawSprites();
}