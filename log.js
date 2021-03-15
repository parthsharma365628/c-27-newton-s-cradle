class log{
    constructor(x,y){
     var opt={
     isStatic:true
     }
     this.logs=Bodies.rectangle(x,y,300,15,opt)
     this.width=300
     this.height=15
     World.add(world,this.logs) 

    }

    display(){
    fill("red")
    rectMode(CENTER)
    rect(this.logs.position.x,this.logs.position.y,this.width,this.height)            
    }

}





