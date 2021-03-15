class sling{
 constructor(bodyA,pointB){
var opt={
bodyA:bodyA,
pointB:pointB,
stiffness:0.04,
length:200
}
this.pointB=pointB
this.slings=Constraint.create(opt)
World.add(world,this.slings)

}   
display(){
    var pointA=this.slings.bodyA.position
    var pointB=this.pointB
    strokeWeight(3)
    stroke("black")
    line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}