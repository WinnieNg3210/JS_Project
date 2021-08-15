export default class Enemy {
    // constructor(x, health, imageSrc, verticalPosition) { //(??? might not need verticalPosition in param)
    constructor(verticalPosition) {
        // this.dimension = dimension;
        this.x = 800; // this will be canvas.width in Game class
        this.y = verticalPosition; 
        // verticalPosition will be created to spawn the enemy in a random row
        this.width = 32;
        this.height = 48;
        this.frameX = 0;
        this.frameY = 1;
        this.speed = 1;
        // this.moving = true;
        this.health = 200;
        this.maxHealth = this.health;
        this.enemySprite = new Image();
        // this.enemySprite.src = `./src/images/${imageSrc}.png`;
        this.enemySprite.src = `./src/images/minion1.png`;
    }

    draw(ctx) { // draw minions
        ctx.drawImage(this.enemySprite, this.width * this.frameX, this.height * this.frameY,
            this.width, this.height, this.x, this.y, this.width, this.height);
    }

    // animate(ctx) {
    //     this.draw(ctx);
    // }

    update() { // update
        this.x -= this.speed;
    }

    handleFrame() {
        if (this.frameX < 3 && this.moving) this.frameX++;
        else this.frameX = 0;
    }
}