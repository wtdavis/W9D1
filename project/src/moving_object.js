// function MovingObject (pos, )
class MovingObject {

constructor (pos, vel, radius, color) {
    this.pos = pos
    this.vel = vel
    this.radius = radius
    this.color = color
}

draw() {
    document.addEventListener("DOMContentLoaded", function(){
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d")  ; 
        const centerX = canvas.width/2;
        const centerY = canvas.height/2;
        ctx.beginPath()
        ctx.arc(centerX, centerY, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#003300";
        ctx.stroke()


    });
    
    

}



}


export default MovingObject