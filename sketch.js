const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
   var canvas = createCanvas(1000, 800);
   engine =  Engine.create();
   world = engine.world;

   ground = new Platform(500, 750, 800, 20);
   platform1 = new Platform(550, 200, 300, 20);
   
ball1 = new Pendulum(450, 400, 50);
ball2 = new Pendulum(500, 400, 50);
ball3 = new Pendulum(550, 400, 50);
ball4 = new Pendulum(600, 400, 50);
ball5 = new Pendulum(650, 400, 50);

string1 = new String(ball1.body, {x: 450, y: 200});
string2 = new String(ball2.body, {x: 500, y: 200});
string3 = new String(ball3.body, {x: 550, y: 200});
string4 = new String(ball4.body, {x: 600, y: 200});
string5 = new String(ball5.body, {x: 650, y: 200});


text("press space", 100, 10);


}

function draw(){
    background(255);
    Engine.update(engine);

    ground.display();
    platform1.display();
    string1.display();
string2.display();
string3.display();
string4.display();
string5.display();

ball1.display();

ball2.display();
ball3.display();
ball4.display();
ball5.display();




}

function keyPressed(){
    if(keyCode===32){
        ball1.body.position.x = ball1.body.position.x-5
    }
}
