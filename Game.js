class Game {

    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.intervalID = 0;
        this.bgImg = new Image();
        this.bgImg.src = "./images/bgImg.png";
        this.speakerLeft = new Speaker(0, 620, this.ctx);
        this.speakerRight = new Speaker(420, 620, this.ctx);
        this.rotateAngle = 15;
        this.enemies = [new Enemy(200, -80, this.ctx)];
    }

    startGame() {

        this.intervalID = setInterval(() => {

            requestAnimationFrame(() => {
                //this.drawCanvas directly as a callback function didn't work here ("this" returned undefined)
                this.drawCanvas();
            });
        }, 50);
    }

    drawCanvas() {

        this.ctx.drawImage(this.bgImg, 0, 0);

        this.speakerLeft.drawRotated(this.rotateAngle);
        this.speakerRight.drawRotated(-this.rotateAngle);

        this.updateCanvas();

        if (qIsPressed) {
            this.gameOver();
        }

    }

    updateCanvas() {
        let randomNum = Math.floor(Math.random() * (canvas.width - 140)) + 30;
        if (isShooting) {
            this.speakerLeft.shoot();
            this.speakerRight.shoot();
        }

        for (let i = 0; i < this.enemies.length; i++) {

            // if (isShooting) {
            //     this.speakerLeft.shoot(i);
            //     this.speakerRight.shoot(i);
            //     // isShooting = false;
            // }


            if (this.enemies[i].y === 200) {
                this.enemies.push(new Enemy(randomNum, -50, this.ctx));
            }

            this.addEnemy(i);





            if (this.enemies[i].y > 600) {
                this.enemies[i].vanish();
                // console.log(this.enemies);
            }

            // we don't want the array to become too big
            if (this.enemies.length > 8) {
                this.enemies.shift();
            }



        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addEnemy(i) {
        this.enemies[i].draw();
        this.enemies[i].move();
    }

    checkCollisions(i) {

    }

    gameOver() {
        clearInterval(this.intervalID);
        alert("game over");
    }

}