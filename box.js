//Siempre hay que poner "class" para crear una nueva clase
class Box {
  //Dentro del parentesís de "constructor" se coloca si el usuario puede cambiar "x,y,width,height"
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    //"this" se utiliza para referirse a el objeto
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  //En el display se muestra como quieres que se muestre la figura creada
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
