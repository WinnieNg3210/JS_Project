import Hero from "./hero";

export default class Game {

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {width: canvas.width, height: canvas.height};
        this.player = new Hero(this.dimensions);
        // this.keys = this.player.keys;
        this.restart();
        this.handleEvents();
        // this.player.handleFrame();
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
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.movePlayer();
        this.player.handleFrame();
        this.player.animate(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    };

    handleEvents() {
        window.addEventListener("keydown", this.eventDown.bind(this));
        window.addEventListener("keyup", this.eventUp.bind(this));
    }

    eventDown(e) {
        this.player.keyDown(e);        
    };

    eventUp(e) {
        this.player.keyUp(e);
    };

    movePlayer() {
        if (this.player.keys["ArrowDown"] && 
        this.player.y < this.dimensions.height - this.player.height) {
            this.player.y += this.player.speed;
            this.player.frameY = 0;
        };

        if (this.player.keys["ArrowUp"] && this.player.y > 100) {
            this.player.y -= this.player.speed;
            this.player.frameY = 3;
        };
    }



    


};

   