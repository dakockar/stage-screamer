class Game {

    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.bgImg = new Image();
        this.bgImg.src = "./images/bgImg.png";
        this.speakerLeft = new Speaker(0, 620, this.ctx);
        this.speakerRight = new Speaker(420, 620, this.ctx);
        this.rotateAngle = 15;
        this.enemies = [];
        this.bullets = [];
        this.fadeOutArray = [];
        this.score = 0;
        this.isGameOver = false;
        this.rN = 0;
    }

    startGame() {

        this.intervalID = setInterval(() => {

            requestAnimationFrame(() => {
                //this.drawCanvas directly as a callback function didn't work here ("this" returned undefined)
                this.drawCanvas();
            });
        }, 50);

        this.intervalID2 = setInterval(() => {
            this.rN = Math.floor(Math.random() * enemyDieSndArr.length);

            let randomNum = Math.floor(Math.random() * (this.canvas.width - 140)) + 30;
            this.enemies.push(new Enemy(randomNum, -50, this.ctx));
        }, 800)

    }

    drawCanvas() {
        this.ctx.drawImage(this.bgImg, 0, 0);

        this.speakerLeft.drawRotated(this.rotateAngle);
        this.speakerRight.drawRotated(-this.rotateAngle);

        this.printScore();

        this.updateCanvas();
    }

    updateCanvas() {

        this.checkCollisions();

        for (let enemy of this.fadeOutArray) {
            enemy.fadeOut();

            if (enemy.opacity <= 0.2) {
                this.fadeOutArray.shift();
            }
        }

        this.enemies = this.enemies.filter(enemy => !enemy.isCollided);
        this.bullets = this.bullets.filter(bullet => bullet.y > 0 && !bullet.isCollided);


        for (let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].draw();
            this.enemies[i].move();
        }

        for (let i = 0; i < this.bullets.length; i++) {
            this.bullets[i].drawRotated();
            this.bullets[i].move();
        }

        this.checkEnemyPositions();
    }

    shootPressed() {
        this.bullets.push(this.speakerLeft.shoot());
        this.bullets.push(this.speakerRight.shoot());
    }

    checkCollisions() {
        // check if the bullet's collision points is within the borders of an enemy 
        for (let enemy of this.enemies) {
            for (let bullet of this.bullets) {
                if (bullet.collisionPt1.x > enemy.x && bullet.collisionPt1.x < enemy.x + enemy.img.width) {
                    if (bullet.collisionPt1.y > enemy.y && bullet.collisionPt1.y < enemy.y + enemy.img.height) {
                        enemy.isCollided = true;
                        this.fadeOutArray.push(enemy);
                        bullet.isCollided = true;
                        this.score++;
                        enemyDieSnd.src = enemyDieSndArr[this.rN];
                        enemyDieSnd.play();
                    }
                }
                else if (bullet.collisionPt2.x > enemy.x && bullet.collisionPt2.x < enemy.x + enemy.img.width) {
                    if (bullet.collisionPt2.y > enemy.y && bullet.collisionPt2.y < enemy.y + enemy.img.height) {
                        enemy.isCollided = true;
                        this.fadeOutArray.push(enemy);
                        bullet.isCollided = true;
                        this.score++;
                        enemyDieSnd.src = enemyDieSndArr[this.rN];
                        enemyDieSnd.play();

                    }
                }
            }
        }
    }

    printScore() {
        this.ctx.font = "20px 'Architects Daughter', cursive";
        this.ctx.fillStyle = "#e8bc82";
        this.ctx.fillText("score: " + this.score, 30, this.canvas.height - 55);
    }

    checkEnemyPositions() {
        for (let enemy of this.enemies) {
            if (enemy.y > 650) {
                this.gameOver();
            }
        }
    }

    gameOver() {
        clearInterval(this.intervalID);
        clearInterval(this.intervalID2);
        this.isGameOver = true;
        buildGameOverScreen();
    }

    resetGame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.enemies = [];
        this.bullets = [];
        this.fadeOutArray = [];
        this.score = 0;
    }
}