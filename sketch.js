const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//Se crea primero la variable para la clase
var box1,box2,box3;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //Se crea la variable utilizando la clase, dentro del parentesís se coloca las posisiones en X y Y e Alto y Ancho
    box1 = new Box(200,300,50,50);
    box2 = new Box(180,100,50,100);
   // box3 = new Box(300,70,50,30);
    ground = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    //Luego se coloca "display();" para que la variable se 
    box1.display();
    box2.display();
    //box3.display();
    ground.display();
}