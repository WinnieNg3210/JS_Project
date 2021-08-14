

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
        this.speed = 4;
        this.moving = false;
        this.heroSprite = new Image();
        this.heroSprite.src = "./src/images/sailormoon.png"
        this.keys = [];
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

    keyDown(e) {
        this.keys[e.key] = true;
        console.log(this.keys);
        this.moving = true;
    }

    keyUp(e) {
        delete this.keys[e.key];
        // console.log("up");
        this.frameY = 2;
        this.moving = false;
    };

    handleFrame() {
        if (this.frameX < 3 && this.moving) this.frameX++;
        else this.frameX = 0;
    }


    
}