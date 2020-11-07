class Box {
    constructor(x, y, width, height,angle) {
      this.x=x
      this.y=y
      this.boxwidth=200
      this.boxheight=100
      this.boxthickness=20
      this.boxangle=0
      this.bottombody = Bodies.rectangle(this.x, this.y, this.boxwidth, this.boxthickness,{
        isStatic
        :true
      });
      this.LeftBody = Bodies.rectangle(this.x-this.boxwidth/2, this.y-this.boxheight/2, this.boxthickness, this.boxheight,{
        isStatic
        :true
      });
      this.RightBody = Bodies.rectangle(this.x+this.boxwidth/2, this.y-this.boxheight/2, this.boxthickness, this.boxheight,{
        isStatic
        :true
      });
      Matter.Body.setAngle(this.LeftBody,this.angle)
      Matter.Body.setAngle(this.RightBody,-1*this.angle)
      World.add(world, this.bottombody);
      World.add(world, this.LeftBody)
      World.add(world, this.RightBody);
 
    }
    display(){
      var pos =this.bottombody.position;
    
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.boxwidth, this.boxthickness);
      pop();
      var posLeft =this.LeftBody.position;
    
      push();
      translate(posLeft.x, posLeft.y);
      rotate(this.angle)
      rectMode(CENTER);
      rect(0, 0, this.boxthickness, this.boxheight);
      pop();
      var posRight =this.RightBody.position;
      push();
      translate(posRight.x, posRight.y);
      rotate(-1*this.angle)
      rectMode(CENTER);
      rect(0, 0, this.boxthickness, this.boxheight);
      pop();
    }
  };
  