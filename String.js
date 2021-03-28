class String{
    constructor(b1,b2){

        var options={
            bodyA:b1,
            bodyB:b2,
            length:10,
            stiffness:0.05
        }
        this.string=Constraint.create(options)
        World.add(world,this.string)
    }
    display(){
        var p1=this.string.bodyA.position;
        var p2=this.string.bodyB.position;
        //strokeWeight(4);
        line(p1.x,p1.y,p2.x,p2.y)

    }
}