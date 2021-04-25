var basket,basketImg;
var egg,eggImage;
var backgroundImg;
var log,logImg;
var hen,henImg;
function preload(){                    
eggImage = loadImage("egg.png");
backgroundImg = loadImage("bg.png")
basketImg = loadImage("basket.png")
logImg = loadImage("log.png")
henImg = loadImage("hen.png")

}
function setup(){
createCanvas(windowWidth,windowHeight);
basket = createSprite(668,558,50,50)
basket.addImage(basketImg)
basket.scale = 0.5






log = createSprite(100,365,200,15)
log.addImage(logImg)

log = createSprite(300,365,200,15)
log.addImage(logImg)

log = createSprite(500,365,200,15)
log.addImage(logImg)

log = createSprite(700,365,200,15)
log.addImage(logImg)

log = createSprite(900,365,200,15)
log.addImage(logImg)

log = createSprite(1100,365,200,15)
log.addImage(logImg)
log = createSprite(1300,365,200,15)
log.addImage(logImg)

hen = createSprite(100,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(300,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(500,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(700,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(900,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(1100,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

hen = createSprite(1300,271,200,15)
hen.addImage(henImg)
hen.scale = 0.36

egg = createSprite(100,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(300,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(500,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(700,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(900,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(1100,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

egg = createSprite(1300,325,50,50)
egg.addImage(eggImage)
egg.scale = 0.1
egg.velocityY = 5
egg.velocityX = 0

console.log(windowWidth,windowHeight)
}
function draw(){
background(backgroundImg);
text(mouseX+","+mouseY,mouseX,mouseY);
if(keyDown("RIGHT_ARROW")){
    basket.x+= 5
    basket.y+= 0
}
if(keyDown("LEFT_ARROW")){
    basket.x+= -4
    basket.y+= 0
    }
    
    
    drawSprites()
}
function spawnEgg(){
    if(frameCount%50 === 0){
       
        egg.x=Math.round(random(100,750))
    }
}

