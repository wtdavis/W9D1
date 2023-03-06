class Asteroid extends MovingObject {
    static RADIUS = 25;
    static  COLOR = "purple";

    constructor (options) {
        this.options = options;
        this.pos = pos;
        this.radius = RADIUS;
        this.color = COLOR;
        this.vec = Util.randomVec();
        super(options);
    }
}

export default Asteroid;
import * as Util from "./util.js";
