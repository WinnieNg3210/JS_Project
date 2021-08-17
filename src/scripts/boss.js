export default class Boss {
    constructor(verticalPosition) {
        this.x = 800; 
        this.y = verticalPosition;
        this.width = 32;
        this.height = 48;
        this.frameX = 0;
        this.frameY = 1;
        this.speed = 2;
        this.lifePoints = 600;
        this.maxHealth = this.lifePoints;

        this.bossSprite = new Image();
        this.bossSprite.src = `./src/images/boss.png`;
    }

    draw(ctx) {
        ctx.drawImage(this.bossSprite, this.width * this.frameX, this.height * this.frameY,
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