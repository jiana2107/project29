class Block{
    constructor (x,y,w,h){
    var box_options={
        restitution:0.8,
        friction:1.0,
        density:1.0}
  
        this.width=w;
        this.height=h;
        this.visibility=255;
     this.body = Bodies.rectangle(x,y,w,h,box_options);
      World.add(world,this.body);
  
    }
     display(){
         var pos=this.body.position;
         var angle=this.body.angle;
         push()
         translate(pos.x,pos.y)
         strokeWeight(4)
         stroke("black")
         fill("lightpink")
         rotate(angle)
         rectMode(CENTER);
         rect(0,0,this.width,this.height);
         pop()}
       
     
  
  }