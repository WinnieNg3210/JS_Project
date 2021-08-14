

export default class Hero {
    constructor(dimension) {
        // this.ctx = ctx;
        this.dimension = dimension; 
        this.x = 100;
        this.y = 200;
        this.width = 32;
        this.height = 48;
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 8;
        this.moving = false;
        this.heroSprite = new Image();
        this.heroSprite.src = "./src/images/sailormoon.png"
        // this.addEventListener("keydown", this);
        // this.addEventListener("keyup", this);
    };

    drawHero(ctx) {
        ctx.drawImage(this.heroSprite, this.width * this.frameX, 
            this.height * this.frameY, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    };

    animate(ctx) {
        this.drawHero(ctx);
        // this.moveHero();
    };



    // handleEvent(e) {
    //     switch(e.key) {
    //         case "keydown":
    //             this.keyDownEvent(e)
    //             break;
    //         case "keyup"
    //     }
    // }

    
}