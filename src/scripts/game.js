import Heroine from "./heroine";
import Enemy from "./enemy";
import Attack from "./attack";

export default class Game {

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {width: canvas.width, height: canvas.height};
        this.player = new Heroine(this.dimensions);
        this.score = 0;
        this.enemies = [];
        this.enemiesInterval = 100;
        this.gameOver = false;
        this.totalAttacks = [];
        this.attackInterval = 1;
        this.maxBullet = 5;
        this.fire = false;
        this.health = 3;
        this.frameInterval = 0;
        this.restart();
        // this.play();
        this.handleEvents();
        this.bossKill = 3;
        this.minionsKilled = 0;

        // will be used to handle the start and stop function
        this.gameStart = false;

        
        

    };

    // play() {
    //     if (this.gameStart) this.animate();
    // }

    restart() {
        this.player = new Heroine(this.dimensions);
        this.score = 0;
        this.animate();
    };

    handleEvents() {
        window.addEventListener("keydown", this.eventDown.bind(this));
        window.addEventListener("keyup", this.eventUp.bind(this));
        // this.ctx.canvas.addEventListener("keydown", this.startGame.bind(this))
    }

    // trying:
    // startGame(e) {
    //     if (e.key === "Enter") {
    //         this.gameStart = true;
    //     };
    // }

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

    detectCollision(first, second) {
        if (!(first.x > second.x + second.width ||
             first.x + first.width < second.x ||
             first.y > second.y + second.height || 
             first.y + first.height < second.y)    ) {
            return true;
        };
    }

    handleHeroine() {
        if (this.health <= 0) {
            this.gameOver = true;
        };
    };

    handleEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].update(this.frameInterval);
            this.enemies[i].draw(this.ctx);
            if (this.enemies[i].lifePoints <= 0) {
                let addedScore = this.enemies[i].maxHealth;
                this.score += addedScore;
                this.enemies.splice(i, 1);

                if (this.score >= 1000){
                    this.minionsKilled += 1
                };

                i--;
            };
            // current test code:
            if (this.enemies[i] && this.enemies[i].x <= 100) {
                this.health -= 1;
                console.log("totalPoint:" + this.health);
            };
        }

        if (this.frameInterval % this.enemiesInterval === 0) {
            let verticalPosition = Math.floor((Math.random() * 8) + 2) * 50;
            this.enemies.push(new Enemy(verticalPosition))
        };
    }

    // handleLevels() {
    //     // if (this.enemiesInterval > 120) this.enemiesInterval -= 25;
    //     if (this.score >= 400) {
    //         this.enemiesInterval = 75;
    //     } else if (this.score >= 1000);
    // }

    // handleBoss() {

    // }

    // this.attack = []

    handleAttacks() {
        for (let i = 0; i < this.totalAttacks.length; i++) {
            this.totalAttacks[i].update();
            this.totalAttacks[i].draw(this.ctx);

            for (let j = 0; j < this.enemies.length; j++) {
                if (this.enemies[j] && this.totalAttacks[i] &&
                    this.detectCollision(this.totalAttacks[i], this.enemies[j])) {
                    this.enemies[j].lifePoints -= this.totalAttacks[i].damage;
                    // get rid of attack instance from array
                    // increase maxBullet += 1
                    this.totalAttacks.splice(i, 1);
                    this.maxBullet += 1;
                    i--;
                }
            }

            if (this.totalAttacks[i] && this.totalAttacks[i].x >= this.dimensions.width) {
                this.totalAttacks.splice(i, 1);
                this.maxBullet += 1;
                i--;
            }
        }
        

        if (this.player.attack && this.maxBullet > 0 && this.attackInterval === 1) {
            this.attackInterval -= 1;
            this.totalAttacks.push(new Attack(this.player.x + 30, this.player.y+20));
            this.maxBullet -= 1;
            if (this.attackInterval === 0) { 
                let that = this;
                setTimeout(function(){
                    that.attackInterval += 1;
                }, 100);
            };
        };

    }

    handleGameStatus() {
        if (this.gameOver) {
            console.log("GAME OVER!")
        }
        this.ctx.fillStyle = "gold";
        this.ctx.font = "30px Arial";
        this.ctx.fillText("Score: " + this.score, 20, 40);
    }


    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.movePlayer();
        this.handleHeroine();
        // this.handleEnemies();
        // this.handleLevels();
        this.handleAttacks();
        this.handleGameStatus();
        this.player.handleFrame();
        this.player.animate(this.ctx);
        this.frameInterval++;
        requestAnimationFrame(this.animate.bind(this));
    };

    


};


   