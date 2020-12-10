class BaseClass{
  //intailizatin of the obj.
    constructor(x, y, width, height, angle) {
        var options = {
            //bounciness
            'restitution':0.8,
            //opposing force
            'friction':1.0,
            //mass/volume
            'density':1.0
        }
        //to add the bodies into the world
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        //define new properties at the run time.
        push();
        //when body falls some of these change, so after it is at rest
        //these props go away/orignal ones come.
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        //to retain its orignal properties
        pop();
      }
}