export default class Enemy {
    // constructor(x, health, imageSrc, verticalPosition) { //(??? might not need verticalPosition in param)
    
    constructor(verticalPosition) {
        this.x = 800; 
        this.y = verticalPosition;
        this.width = 32;
        this.height = 48;
        this.frameX = 0;
        this.frameY = 1;
        this.speed = 2;
        this.minionSprite = new Image();
        this.minions = ["minion1", "minion2"];
        this.imageSrc = this.minions[Math.floor(Math.random() * this.minions.length)];
        if (this.imageSrc === "minion1") {
            this.lifePoints = 100;
        } else if (this.imageSrc === "minion2") {
            this.lifePoints = 200;
        };
        this.maxHealth = this.lifePoints;
        this.minionSprite.src = `./src/images/${this.imageSrc}.png`;
    }

    draw(ctx) { // draw minions
        ctx.drawImage(this.minionSprite, this.width * this.frameX, this.height * this.frameY,
            this.width, this.height, this.x, this.y, this.width, this.height);
    }

    update(frame) {
        this.x -= this.speed;
        if (frame%10 === 0) {
            if (this.frameX < 3) this.frameX++;
            else this.frameX = 0;
        };
    };

}