var canvas;
var backgroundImg;
var catStart, catWalking, catSitting;
var mouseStart, mouseTeasing, mouseStopping;
var cat, mouse;

function preload() {
    backgroundImg = loadImage ("images/garden.png");
    
    catStart = loadAnimation ("images/cat1.png");
    catWalking = loadAnimation ("images/cat2.png", "images/cat3.png");
    catSitting = loadAnimation ("images/cat4.png");

    mouseStart = loadAnimation ("images/mouse1.png");    
    mouseTeasing = loadAnimation ("images/mouse2.png", "images/mouse3.png");
    mouseStopping = loadAnimation ("images/mouse4.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite (870, 600);
    cat.addAnimation (catStart);
    cat.scale = 0.2;

    mouse = createSprite (200, 600);
    mouse.addAnimation (mouseStart);
    mouse.scale = 0.15;
}

function draw() {

    background(backgroundImg);
    
    keyPressed ();

    if (cat.x - mouse.x < (cat.width - mouse.width) /2) {
        cat.velocityX = 0;
        cat.addAnimation ("catSitting", catSitting);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation ("catSitting");

        mouse.addAnimation ("mouseStopping", mouseStopping);
        mouse.scale = 0.15;
        mouse.changeAnimation ("mouseStopping");
    }

    drawSprites();
}


function keyPressed(){

    if (keyCode === LEFT_ARROW) {
        cat.velocityX = -4;
        cat.addAnimation ("catWalking", catWalking);
        cat.changeAnimation ("catWalking");

        mouse.addAnimation ("mouseTeasing", mouseTeasing);
        mouse.frameDelay = 100;
        mouse.changeAnimation ("mouseTeasing")
    }


}
