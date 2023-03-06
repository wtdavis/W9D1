// function MovingObject (pos, )
class MovingObject {

constructor (pos, vel, radius, color) {
    this.pos = pos
    this.vel = vel
    this.radius = radius
    this.color = color
}

 draw(ctx) {
        // const centerX = canvas.width/2;
        // const centerY = canvas.height/2;

        ctx.beginPath()
        ctx.arc(100, 100, 20, 0, 2 * Math.PI, false);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#003300";
        ctx.stroke()


    };

move (ctx) {
    this.pos[0] += vel[0]
    this.pos[1] += vel[1]
} 
    
    

}
// document.addEventListener("DOMContentLoaded", function(){





export default MovingObject