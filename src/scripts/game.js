import Hero from "./hero";
import Enemy from "./enemy";
import Attack from "./attack";

export default class Game {

    constructor(canvas){
        this.ctx = canvas.getContext("2d");
        this.dimensions = {width: canvas.width, height: canvas.height};
        this.player = new Hero(this.dimensions);
        // this.minion1 = new Enemy(this.dimensions.width, 100, "minion1");
        // this.minion2 = new Enemy(this.dimensions.width, 300, "minion2");
        // this.boss = new Enemy(this.dimensions.width, 500, "boss");

        this.enemies = [];
        this.enemyPositions = [];
        this.enemiesInterval = 600;
        this.gameOver = false;
        this.attacks = []
        this.lifePoints = 3;
        this.frameInterval = 0;
        this.restart();
        this.handleEvents();

    };

    // play() {
    //     this.animate();
    // }

    restart() {
        this.player = new Hero(this.dimensions);
        this.score = 0;
        this.animate();
    };

    handleEvents() {
        window.addEventListener("keydown", this.eventDown.bind(this));
        window.addEventListener("keyup", this.eventUp.bind(this));
    }

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

    collision(first, second) {
        if (!(first.x > second.x + second.width ||
             first.x + first.width < second.x ||
             first.y > second.y + second.height || 
             first.y + first.height < second.y)    ) {
            return true;
        };
    }

    handleHero() {
        if (lifePoint <= 0) {
            gameOver = true;
        };
    }

    handleEnemies() {
        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].update();
            this.enemies[i].animate(this.ctx);
            this.enemies[i].handleFrame();
        }

        if (this.frameInterval % 100 === 0) {
            let verticalPosition = Math.floor((Math.random() * 9) + 1) * 50;
            this.enemies.push(new Enemy(verticalPosition))
            if (this.enemiesInterval > 120) this.enemiesInterval -= 50;
        }
 
    }

    handleAttacks() {
        
    }

    handleGameStatus() {
        if (gameOver) {
            // something
        }
    }





    animate() {
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.movePlayer();
        // this.handleHero();
        // this.handleEnemies();
        // this.handleAttacks();
        this.player.handleFrame();
        this.player.animate(this.ctx);
        this.frameInterval++;
        requestAnimationFrame(this.animate.bind(this));
    };

    


};


   