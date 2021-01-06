const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bruce;
var maxDrops = 1;
var rain = []
var imagenum, thunder;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
    thunder1 = loadImage("RainyImages/thunderbolt/1.png")
    thunder2 = loadImage("RainyImages/thunderbolt/2.png")
    thunder3 = loadImage("RainyImages/thunderbolt/3.png")
    thunder4 = loadImage("RainyImages/thunderbolt/4.png")
}

function setup(){
    var canvas = createCanvas(600,windowHeight);
    engine = Engine.create();
    world = engine.world;
    
    bruce = new Umbrella(275,665);

    drops = new Drops();

    imagenum = 1;

    thundernum1 = createSprite(400,100,100,100);
    thundernum1.addImage(thunder1);
    thundernum2 = createSprite(200,100,100,100);
    thundernum2.addImage(thunder2);
    thundernum3 = createSprite(500,100,100,100);
    thundernum3.addImage(thunder3);
    thundernum4 = createSprite(100,100,100,100);
    thundernum4.addImage(thunder4);
    thundernum1.visible = false;
    thundernum1.scale = 0.5;
    thundernum2.visible = false;
    thundernum2.scale = 0.5;
    thundernum3.visible = false;
    thundernum3.scale = 0.5;
    thundernum4.visible = false;
    thundernum4.scale = 0.5;
    
}

function draw(){
   background("black");
   Engine.update(engine);

    for(var i = 0; i<maxDrops; i++ ){
        rain.push(new Drops(random(0,600),0));

    }

    if(thundernum1.visible === false && thundernum2.visible === false 
        && thundernum3.visible === false && thundernum4.visible === false){
        console.log("end");
        switch(imagenum){
            case 1: 
                    thundernum1.visible = true;
                    if(frameCount % 30 === 0){
                        thundernum1.visible = false;
                        imagenum = int(random(1,5));
                        break;
                        
                    }
                    
                    
            case 2: 
                    thundernum2.visible = true;
                    if(frameCount % 30 === 0){
                        thundernum2.visible = false;
                        imagenum = int(random(1,5));
                        console.log("end");
                        break;
                        
                    }
                    
            case 3: 
                    thundernum3.visible = true;
                    if(frameCount % 30 === 0){
                        thundernum3.visible = false;
                        imagenum = int(random(1,5));
                        console.log("end");
                        break;
                    }
                    
            case 4: 
                    thundernum4.visible = true;
                    if(frameCount % 30 === 0){
                        thundernum4.visible = false;
                        imagenum = int(random(1,5));
                        console.log("end");
                        break;
                    }

            default:
                thundernum1.visible = true;
                if(frameCount % 30 === 0){
                    thundernum1.visible = false;
                    imagenum = int(random(1,5));
                    console.log("end");
                    break;
                }
                    
        }
    }


   bruce.display();

   for (var i = 0; i < rain.length; i++) {
     
    rain[i].display();
    
  }

  drawSprites();
}   

