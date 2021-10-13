import Heroine from "./heroine";
import Enemy from "./enemy";
import Boss from "./boss";
import Attack from "./attack";

export default class Game {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.player = new Heroine(this.dimensions);

    this.score = 0;
    this.enemies = [];
    this.enemiesInterval = 100;
    this.gameOver = false;
    this.totalAttacks = [];
    this.attackInterval = 1;
    this.maxBullet = 3;
    this.level1 = 500;
    this.level2 = 1000;
    this.level3 = 1500;
    this.finalLevel = 2000;
    this.frameInterval = 0;
    this.boss = [];
    this.finalBoss = false;
    this.showBoss = 1;
    this.bossKill = 1;
    this.minionsKilled = 0;
    this.bossSpawn = 1;
    // this.color = "pink";
    // this.font = "35px Dancing Script";
    // this.player = new Heroine(this.dimensions)
    this.health = 3;

    // will be used to handle the start and stop function
    this.gameStart = false;

    this.attackSound1 = new Audio("src/sounds/attack.mp3");
    this.attackSound2 = new Audio("src/sounds/attack.mp3");
    this.attackSound3 = new Audio("src/sounds/attack.mp3");
    this.destroySound = new Audio("src/sounds/destroy.mp3");
    this.winSound = new Audio("src/sounds/win.mp3");
    this.loseSound = new Audio("src/sounds/lose.mp3");
    this.soundCycle = 1;
    this.attackSound1.volume = 0.4;
    this.attackSound2.volume = 0.4;
    this.attackSound3.volume = 0.4;
    this.destroySound.volume = 0.1;
    this.winSound.volume = 0.2;
    this.loseSound.volume = 0.2;

    // this.playWin = false;
    // this.winAudio();
    this.soundOn = true;

    this.handleEvents();
    this.play();
    this.intro();
  }

  intro() {
    if (this.frameInterval <= 1) {
      this.ctx.fillStyle = "pink";
      this.ctx.font = "30px Dancing Script";
      this.ctx.fillText(
        "Oh no! Queen Beryl wants revenge on Sailormoon.",
        70,
        170
      );
      this.ctx.fillText(
        "This time the evil Queen will be taking actions",
        70,
        220
      );
      this.ctx.fillText(
        "and she has set her sight on Tokyo! Help our heroine",
        70,
        270
      );
      this.ctx.fillText("defeat her once and for all.", 70, 320);
      this.ctx.fillText("Press Enter to Play", 70, 400);
    }
  }

  play() {
    this.animate();
  }

  restart() {
    this.score = 0;
    this.enemies = [];
    this.enemiesInterval = 100;
    this.gameOver = false;
    this.totalAttacks = [];
    this.boss = [];
    this.finalBoss = false;
    this.showBoss = 1;
    this.bossKill = 1;
    this.minionsKilled = 0;
    this.player = new Heroine(this.dimensions);
    this.health = 3;
    this.animate();
  }

  handleEvents() {
    window.addEventListener("keydown", this.eventDown.bind(this));
    window.addEventListener("keyup", this.eventUp.bind(this));
    window.addEventListener("keypress", this.startGame.bind(this));
    window.addEventListener("keypress", this.resetGame.bind(this));
    window.addEventListener("keypress", this.soundStatus.bind(this));
    window.addEventListener("keydown", this.preventScroll.bind(this), false);
  }

  preventScroll(e) {
    if (
      ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(
        e.code
      ) > -1
    ) {
      e.preventDefault();
    }
  }

  startGame(e) {
    if (e.key === "Enter") {
      if (!this.gameStart && this.frameInterval === 1) {
        this.gameStart = true;
        this.play();
      } else if (!this.gameStart && this.frameInterval > 1) {
        this.gameStart = true;
        this.animate();
      } else if (this.gameOver) {
        this.restart();
        // this.playWin = false;
      } else {
        //pause test
        this.gameStart = false;
        // this.pause = true;
      }
    }
  }

  pauseGame() {
    if (!this.gameStart && this.frameInterval > 1 && this.bossKill !== 0) {
      this.ctx.fillStyle = "gold";
      this.ctx.font = "90px Dancing Script";
      this.ctx.fillText("Pause!", 180, 220);
      this.ctx.font = "45px Dancing Script";
      this.ctx.fillText("Press Enter to Continue", 330, 290);
      this.ctx.fillText("Press R to Reset", 330, 350);
    }
  }

  resetGame(e) {
    if (e.key === "r") {
      if (!this.gameStart && this.frameInterval > 1) {
        this.gameStart = true;
        this.restart();
      }
    }
  }

  soundStatus(e) {
    if (e.key === "m") {
      if (this.soundOn) {
        this.soundOn = false;
        this.attackSound1.volume = 0.0;
        this.attackSound2.volume = 0.0;
        this.attackSound3.volume = 0.0;
        this.destroySound.volume = 0.0;
        this.winSound.volume = 0.0;
        this.loseSound.volume = 0.0;
      } else {
        this.soundOn = true;
        this.attackSound1.volume = 0.4;
        this.attackSound2.volume = 0.4;
        this.attackSound3.volume = 0.4;
        this.destroySound.volume = 0.1;
        this.winSound.volume = 0.2;
        this.loseSound.volume = 0.2;
      }
    }
  }

  eventDown(e) {
    this.player.keyDown(e);
  }

  eventUp(e) {
    this.player.keyUp(e);
  }

  movePlayer() {
    if (
      this.player.keys["ArrowDown"] &&
      this.player.y < this.dimensions.height - this.player.height
    ) {
      this.player.y += this.player.speed;
      this.player.frameY = 0;
    }

    if (this.player.keys["ArrowUp"] && this.player.y > 100) {
      this.player.y -= this.player.speed;
      this.player.frameY = 3;
    }
  }

  detectCollision(first, second) {
    if (
      !(
        first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y
      )
    ) {
      return true;
    }
  }

  handleEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].update(this.frameInterval);
      this.enemies[i].draw(this.ctx);
      // console.log(this.enemies[i].x)

      if (this.enemies[i].lifePoints <= 0) {
        if (this.soundOn) {
          // this.destroySound.volume = 0.2;
          this.destroySound.play();
          // this.destroySound.cloneNode(true).play();
        }
        let addedScore = this.enemies[i].maxHealth;
        this.score += addedScore;
        this.enemies.splice(i, 1);
        if (this.score >= 200) {
          this.minionsKilled += 1;
        }
        i--;
      }
      // how to potentially lose:
      // if (this.enemies[i] && this.enemies[i].x === 100) {
      //     this.health -= 1;
      // };
      if (this.enemies[i] && this.enemies[i].x < 10) {
        this.enemies.splice(i, 1);
        this.health -= 1;
      }
    }

    if (this.frameInterval % this.enemiesInterval === 0) {
      let verticalPosition = Math.floor(Math.random() * 8 + 2) * 50;
      this.enemies.push(new Enemy(verticalPosition));
    }
  }

  handleLevels() {
    // if (this.enemiesInterval > 120) this.enemiesInterval -= 25;
    if (this.score >= this.level1) {
      this.enemiesInterval = 100;
    } else if (this.score >= this.level2) {
      this.enemiesInterval = 75;
    } else if (this.score >= this.level3) {
      this.enemiesInterval = 50;
    }
    if (this.score >= this.finalLevel) this.finalBoss = true;
  }

  handleBoss() {
    for (let i = 0; i < this.boss.length; i++) {
      this.boss[i].update(this.frameInterval);
      this.boss[i].draw(this.ctx);
      if (this.boss[i].lifePoints <= 0) {
        if (this.soundOn) this.destroySound.cloneNode(true).play();
        let addedScore = this.boss[i].maxHealth;
        this.score += addedScore;
        this.boss.splice(i, 1);

        this.bossKill -= 1;
        this.showBoss += 1;
        i--;
      }
    }

    if (this.showBoss === 1 && this.minionsKilled % this.bossSpawn === 0) {
      let verticalPosition = Math.floor(Math.random() * 8 + 2) * 50;
      this.boss.push(new Boss(verticalPosition));
      this.minionsKilled = 0;
      this.showBoss -= 1;
    }
  }

  handleAttacks() {
    for (let i = 0; i < this.totalAttacks.length; i++) {
      this.totalAttacks[i].update();
      this.totalAttacks[i].draw(this.ctx);

      for (let j = 0; j < this.enemies.length; j++) {
        if (
          this.enemies[j] &&
          this.totalAttacks[i] &&
          this.detectCollision(this.totalAttacks[i], this.enemies[j])
        ) {
          this.enemies[j].lifePoints -= this.totalAttacks[i].damage;
          // get rid of attack instance from array
          // increase maxBullet += 1
          this.totalAttacks.splice(i, 1);
          this.maxBullet += 1;
          i--;
        }
      }

      if (this.boss) {
        for (let k = 0; k < this.boss.length; k++) {
          if (
            this.boss[k] &&
            this.totalAttacks[i] &&
            this.detectCollision(this.totalAttacks[i], this.boss[k])
          ) {
            this.boss[k].lifePoints -= this.totalAttacks[i].damage;
            this.totalAttacks.splice(i, 1);
            this.maxBullet += 1;
            i--;
          }

          // if (this.boss[k] && this.boss[k].x === 100) {
          //     this.health -= 1;
          // };
          if (this.boss[k] && this.boss[k].x < 10) {
            this.boss.splice(i, 1);
            this.health -= 1;
          }
        }
      }

      if (
        this.totalAttacks[i] &&
        this.totalAttacks[i].x >= this.dimensions.width
      ) {
        this.totalAttacks.splice(i, 1);
        this.maxBullet += 1;
        i--;
      }
    }

    if (this.player.attack && this.maxBullet > 0 && this.attackInterval === 1) {
      this.attackInterval -= 1;
      this.totalAttacks.push(
        new Attack(this.player.x + 30, this.player.y + 20)
      );
      this.maxBullet -= 1;
      // this.attackSound.volume = 0;
      if (this.soundOn) {
        if (this.soundCycle === 1) {
          this.attackSound1.play();
          this.soundCycle++;
        } else if (this.soundCycle === 2) {
          this.attackSound2.play();
          this.soundCycle++;
        } else if (this.soundCycle === 3) {
          this.attackSound3.play();
          this.soundCycle = 1;
        }
      }

      if (this.attackInterval === 0) {
        let that = this;
        setTimeout(function () {
          that.attackInterval += 1;
        }, 100);
      }
    }
  }

  handleGameStatus() {
    if (this.soundOn) {
      this.ctx.fillStyle = "gold";
      this.ctx.font = "30px Dancing Script";
      this.ctx.fillText("Sound: On (Press M to toggle)", 200, 40);
    } else {
      this.ctx.fillStyle = "gold";
      this.ctx.font = "30px Dancing Script";
      this.ctx.fillText("Sound: Off (Press M to toggle)", 200, 40);
    }

    if (this.bossKill <= 0 || this.health <= 0) {
      this.gameOver = true;
    }

    if (this.gameOver && this.bossKill <= 0) {
      if (this.soundOn) this.winSound.play();
      this.win();
    } else if (this.gameOver && this.health <= 0) {
      if (this.soundOn) this.loseSound.play();
      this.lose();
    }
    this.ctx.fillStyle = "gold";
    this.ctx.font = "30px Dancing Script";
    this.ctx.fillText("Score: " + this.score, 20, 40);
    this.ctx.fillText("Life Left: " + this.health, 20, 80);
    this.ctx.fillText("Attacks Left: " + this.maxBullet, 200, 80);
  }

  win() {
    this.ctx.fillStyle = "gold";
    this.ctx.font = "90px Dancing Script";
    this.ctx.fillText("YOU WIN!", 180, 220);
    this.ctx.font = "45px Dancing Script";
    this.ctx.fillText("Score: " + this.score, 320, 290);
    this.ctx.font = "35px Dancing Script";
    this.ctx.fillText("Press Enter to Play Again", 240, 380);
  }

  lose() {
    this.ctx.fillStyle = "gold";
    this.ctx.font = "90px Dancing Script";
    this.ctx.fillText("YOU LOSE!", 180, 220);
    this.ctx.font = "45px Dancing Script";
    this.ctx.fillText("Score: " + this.score, 320, 290);
    this.ctx.font = "35px Dancing Script";
    this.ctx.fillText("Press Enter to Play Again", 240, 380);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.intro();
    this.movePlayer();
    this.pauseGame();
    this.handleEnemies();
    this.handleLevels();
    this.handleAttacks();
    this.player.handleFrame();
    this.player.animate(this.ctx);
    if (this.finalBoss && this.boss) this.handleBoss();
    this.handleGameStatus();
    this.frameInterval++;
    // console.log(this.frameInterval);
    if (!this.gameOver && this.gameStart)
      requestAnimationFrame(this.animate.bind(this));
  }
}
