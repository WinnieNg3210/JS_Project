import Attack from "./attack";

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
        // this.spaceBar = [];
        this.attack = false;
    };

    draw(ctx) {
        ctx.drawImage(this.heroSprite, this.width * this.frameX, 
            this.height * this.frameY, this.width, this.height, 
            this.x, this.y, this.width, this.height);
    };

    animate(ctx) {
        this.draw(ctx);
    };

    keyCount(ele) {
        let counter = 0;
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] === ele) counter += 1;
        };

        return counter;
    }

    keyDown(e) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            this.keys[e.key] = true;
            this.moving = true;
        }
        if (e.key === " ") {
            this.keys[e.key] = true;
            this.attack = true;
        }
    }

    keyUp(e) {
        delete this.keys[e.key];
        this.frameY = 2;
        this.moving = false;
        this.attack = false;
    };

    // fireDown(e) {
    //     if (e.code === "Space") {
    //       this.spaceBar[e.key] = true;
    //     //   let projectile = new Attack();
    //     //   projectile.update();
    //     //   projectile.draw();
    //       this.attack = true;
    //     };
    //     // console.log("spaceBar");
    // };

    // fireUp(e) {
    //     delete this.spaceBar[e.key];
    //     this.attack = false;
    // }


    handleFrame() {
        if (this.frameX < 3 && this.moving) this.frameX++;
        else this.frameX = 0;
    }

    
}