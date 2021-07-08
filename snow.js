class snow{
    constructor(x,y){
        var snowOption={
            restitution:0.2,density:0.2,friction:0.5

        }
        
        this.image=loadImage("snow4.webp")
        this.r=50
        this.body=Bodies.circle(x,y,this.r,snowOption)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)

        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.r,this.r)
        pop()
    }
}

