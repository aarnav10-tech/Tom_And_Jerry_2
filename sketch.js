var catLying, catWalking, catSitting;
var gardenImg;
var mouseNeutral, mouseDancing, mouseBlinking;
var cat;
var mouse;


function preload() {
    //load the images here
    catLying = loadAnimation("images/cat1.png");
    catWalking = loadAnimation("images/cat2.png", "images/cat3.png");
    catSitting = loadAnimation("images/cat4.png");
    gardenImg = loadImage("images/garden.png");

    mouseNeutral = loadAnimation("images/mouse1.png");
    mouseDancing = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseBlinking = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catLying);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseNeutral", mouseNeutral);
    mouse.scale = 0.15;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
        cat.velocityX = 0;
        cat.addAnimation("catSitting", catSitting);
        cat.x = 300;
        cat.changeAnimation("catSitting");
        mouse.addAnimation("mouseBlinking", mouseBlinking);
        mouse.changeAnimation("mouseBlinking");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseDancing);
    mouse.changeAnimation("mouseTeasing");
    mouse.framDelay = 25;
  }

  if(keyCode === RIGHT_ARROW){
    cat.addAnimation("catWalking", catWalking);
    cat.changeAnimation("catWalking");
    cat.velocityX = -3;
    cat.frameDelay = 25;  

  }



}
