class Iron{
	constructor(x,y,w,h)
	{

        var options={

        restitution:0.8,
		friction:3,
		density:30


		}
		this.x=x;
		this.y=y;
		this.width=w;
        this.height=h;
		this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var Ironpos=this.body.position;		
			push()
			translate(Ironpos.x, Ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			
			rect(0,0,this.width,this.height);

			pop()
	}

}