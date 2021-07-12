class Polygon {
    constructor(bodyA,pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.04,
        length: 10
      }
    
   
      this.polygon =Constraint.create(options);
        World.add(world,this.Polygon)

    
    }
    display(){
      if(this.polygon.bodyA){
        var pointA=this.polygon.bodyA.position
        var pointB=this.polygon.pointB
        stroke(10)
        strokeWeight(4)
        stroke("pink")
        line (pointA.x-25,pointA.y,pointB.x,pointB.y)
        }
      
    }
  };
  