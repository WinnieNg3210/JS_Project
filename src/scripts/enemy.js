export default class Enemy {
    // constructor(x, health, imageSrc, verticalPosition) { //(??? might not need verticalPosition in param)
    
    constructor(verticalPosition) {
        this.lifePoints = 200;
        // this.dimension = dimension;
        this.x = 800; // this will be canvas.width in Game class
        this.y = verticalPosition; 
        this.width = 32;
        this.height = 48;
        this.frameX = 0;
        this.frameY = 1;
        this.speed = 1;
        this.maxHealth = this.lifePoints;
        this.minionSprite = new Image();
        this.minions = ["minion1", "minion2"];
        this.imageSrc = this.minions[Math.floor(Math.random() * this.minions.length)];
        // if (this.imageSrc === "minion1") {
        //     this.lifePoints = 200;
        // } else if (this.imageSrc === "minion2") {
        //     this.lifepoints = 400;
        // }

        this.minionSprite.src = `./src/images/${this.imageSrc}.png`;

        this.bossSprite = new Image();
        this.bossSprite.src = `./src/images/boss.png`;
    }

    draw(ctx) { // draw minions
        ctx.drawImage(this.minionSprite, this.width * this.frameX, this.height * this.frameY,
            this.width, this.height, this.x, this.y, this.width, this.height);
    }

    drawBoss(ctx) {
        ctx.drawImage(this.bossSprite, this.width * this.frameX, this.height * this.frameY,
            this.width, this.height, this.x, this.y, this.width, this.height);
    }

    // animate(ctx) {
    //     this.draw(ctx);
    // }

    // update() { // update
    //     this.x -= this.speed;
    // }
    update(frame) {
        this.x -= this.speed;
        if (frame%10 === 0) {
            if (this.frameX < 3) this.frameX++;
            else this.frameX = 0;
        };
    };

    // handleFrame() {
    //     if (this.frameX < 3) this.frameX++;
    //     else this.frameX = 0;
    // }
}