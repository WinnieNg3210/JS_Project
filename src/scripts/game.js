import Heroine from "./heroine";
import Enemy from "./enemy";
import Boss from "./boss";
import Attack from "./attack";

export default class Game {

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {width: canvas.width, height: canvas.height};
        this.player = new Heroine(this.dimensions);
        this.score = 0;
        this.enemies = [];
        this.enemiesInterval = 150;
        this.gameOver = false;
        this.totalAttacks = [];
        this.attackInterval = 1;
        this.maxBullet = 8;
        this.level2 = 200;
        this.level3 = 400;
        // this.fire = false;
        this.health = 3;
        this.frameInterval = 0;
        
        // this.play();
        
        this.boss = [];
        this.finalBoss = false;
        this.showBoss = 1;
        this.bossKill = 1;
        this.minionsKilled = 0;

        // will be used to handle the start and stop function
        // this.gameStart = false;

        this.handleEvents();
        this.restart();

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

    // handleHeroine() {
    //     if (this.health <= 0) {
    //         this.gameOver = true;
    //     };
    // };


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
            // how to potentially lose:
            if (this.enemies[i] && this.enemies[i].x === 100) {
                this.health -= 1;
            };
        }

        if (this.frameInterval % this.enemiesInterval === 0) {
            let verticalPosition = Math.floor((Math.random() * 8) + 2) * 50;
            this.enemies.push(new Enemy(verticalPosition))
        };
    }

    handleLevels() {
        // if (this.enemiesInterval > 120) this.enemiesInterval -= 25;
        if (this.score >= this.level2) {
            this.enemiesInterval = 100;
        } else if (this.score >= this.level3) {
            this.enemiesInterval = 75;
        };
        if (this.score >= 1000) this.finalBoss = true;
    }

    handleBoss() {
        
        for (let i = 0; i < this.boss.length; i++) {
            this.boss[i].update(this.frameInterval);
            this.boss[i].draw(this.ctx);
            if (this.boss[i].lifePoints <= 0) {
                let addedScore = this.boss[i].maxHealth;
                this.score += addedScore;
                this.boss.splice(i, 1)
                this.minionsKilled = 0;
                this.bossKill -= 1;
                this.showBoss += 1;
                i--;
            }
        }

        if (this.showBoss === 1 && this.minionsKilled % 5 === 0) {
            let verticalPosition = Math.floor((Math.random() * 8) + 2) * 50;
            this.boss.push(new Boss(verticalPosition));
            this.showBoss -= 1;
        };

        
    }

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
                };
            };

            if (this.boss) {
                for (let k = 0; k < this.boss.length; k++) {
                    if (this.boss[k] && this.totalAttacks[i] &&
                        this.detectCollision(this.totalAttacks[i], this.boss[k])) {
                        this.boss[k].lifePoints -= this.totalAttacks[i].damage;
                        this.totalAttacks.splice(i, 1);
                        this.maxBullet += 1;
                        i--;
                    };

                    if (this.boss[k] && this.boss[k].x === 100) {
                        this.health -= 1;
                    }
                };
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
        if (this.bossKill <= 0 || this.health <= 0) {
            this.gameOver = true;
        };
        if (this.gameOver) {
            console.log("GAME OVER!");
        };
        this.ctx.fillStyle = "gold";
        this.ctx.font = "30px Style Script";
        this.ctx.fillText("Score: " + this.score, 20, 40);
        this.ctx.fillText("Life Left: " + this.health, 20, 80);
    }


    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.movePlayer();
        // this.handleHeroine();
        // this.handleBoss();
        this.handleEnemies();
        
        this.handleLevels();
        this.handleAttacks();
        this.handleGameStatus();
        this.player.handleFrame();
        this.player.animate(this.ctx);
        this.frameInterval++;
        if (this.finalBoss && this.boss) this.handleBoss();
        if(!this.gameOver) requestAnimationFrame(this.animate.bind(this));
        
    };

    


};


   