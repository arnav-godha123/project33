//making global variables
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var scene,sceneImage
var engine,world
var snowArr=[]
function preload(){
  sceneImage=loadImage("snow2.jpg")
}
function setup() {
engine=Engine.create()
world=engine.world
  createCanvas(800,400);
  // scene=createSprite(200,200,800,400)
  // scene.addImage(sceneImage)
}

function draw() {
  Engine.update(engine)
  background(sceneImage); 
  if(frameCount%60===0){
    
    snowArr.push(new snow(random(20,400),20))

  } 
  for(var i=0;i<snowArr.length;i++){
    snowArr[i].display()

  }
  drawSprites();
}