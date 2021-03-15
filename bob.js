class bob {
    constructor(x,y,r){
        var opt={
            'isStatic':false,
            'restitution':0.3,
            'friction':0,
            'density':0.8
        }
    
    this.body=Bodies.circle(x,y,r,opt)
    this.r=r
    World.add(world,this.body)
    
    }
    display(){
       /* var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);*/
        ellipseMode(RADIUS);
        fill("Pink");
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        //pop();
    }
    }  