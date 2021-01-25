class Game {

    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.intervalID = 0;
        this.speakerLeft = new Speaker(0, 620, this.ctx);
        this.speakerRight = new Speaker(420, 620, this.ctx);
        this.rotateAngle = 15;
        this.bgImg = new Image();
        this.bgImg.src = "./images/bgImg.png";
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
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.bgImg, 0, 0);

        this.speakerLeft.drawRotated(this.rotateAngle);
        this.speakerRight.drawRotated(-this.rotateAngle);

        this.updateCanvas();

        if (qIsPressed) {
            this.gameOver();
        }

    }

    updateCanvas() {
        if (isShooting) {
            this.speakerLeft.shoot();
            this.speakerRight.shoot();
        }
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addEnemy() {

    }

    checkCollisions() {

    }

    gameOver() {
        clearInterval(this.intervalID);
        alert("game over");
    }

}