export default class Attack {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        this.power = 1; // or 100; depending on what I've set the minion health
        this.speed = 5; // or whatever
    }

    update() {
        this.x += this.speed;
    };

    draw(ctx) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2)
        ctx.fill();
    };
}