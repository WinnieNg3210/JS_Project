import Hero from "./hero";

export default class Game {

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {width: canvas.width, height: canvas.height};
        // this.player = new Hero(this.dimensions);
        this.restart();
        // this.keys = [];
    };

    // play() {
    //     this.animate();
    // }

    restart() {
        this.player = new Hero(this.dimensions);
        // this.score = 0;
        this.animate();
    };

    animate() {
        this.player.animate(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    };

};