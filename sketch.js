const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var ball1, slingshot;
var ground



function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,390,1200,20)

    box1 = new Box(400,200,70,70);
    box2 = new Box(400,240,70,70);
    box3 = new Box(400,330,70,70);

    box4 = new Box(500,200,70,70);
    box5 = new Box(500,240,70,70)
    box6= new Box(500,320,70,70)
   

    ball1 = new Ball(200,50,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball1.body,{x:200, y:50});
}

function draw(){
    
        background("lightblue");
    
        
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    
    
ground.display()
    box3.display();
    box4.display();
    

    box5.display();
    box6.display()
   

    ball1.display();
   
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    //}
}







