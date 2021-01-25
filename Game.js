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
        this.enemies = [];
        this.bullets = [];
    }

    startGame() {

        this.intervalID = setInterval(() => {

            requestAnimationFrame(() => {
                //this.drawCanvas directly as a callback function didn't work here ("this" returned undefined)
                this.drawCanvas();
            });
        }, 50);

        this.intervalID2 = setInterval(() => {
            let randomNum = Math.floor(Math.random() * (this.canvas.width - 140)) + 30;
            this.enemies.push(new Enemy(randomNum, -50, this.ctx));
        }, 1000)

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

        this.checkCollisions();

        this.enemies = this.enemies.filter(elem => !elem.isCollided);
        this.bullets = this.bullets.filter(elem => elem.y > 0 && !elem.isCollided);

        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw();
            this.enemies[i].move();
        }

        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].drawRotated();
            this.bullets[i].move();
        }

    }

    shootPressed() {
        this.bullets.push(this.speakerLeft.shoot());
        this.bullets.push(this.speakerRight.shoot());
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    checkCollisions() {

        // check if the bullet's collision points is within the borders of an enemy 
        for (let enemy of this.enemies) {
            for (let bullet of this.bullets) {
                if (bullet.collisionPt1.x > enemy.x && bullet.collisionPt1.x < enemy.x + enemy.img.width) {
                    if (bullet.collisionPt1.y > enemy.y && bullet.collisionPt1.y < enemy.y + enemy.img.height) {
                        enemy.isCollided = true;
                        bullet.isCollided = true;
                    }
                }
                else if (bullet.collisionPt2.x > enemy.x && bullet.collisionPt2.x < enemy.x + enemy.img.width) {
                    if (bullet.collisionPt2.y > enemy.y && bullet.collisionPt2.y < enemy.y + enemy.img.height) {
                        enemy.isCollided = true;
                        bullet.isCollided = true;
                    }
                }
            }
        }

    }

    gameOver() {
        clearInterval(this.intervalID);
        clearInterval(this.intervalID2);
        alert("game over");
    }

}