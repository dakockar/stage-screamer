class Bullet {
    constructor(x, y, ctx) {
        // this.direction;
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "./images/bullet.png";
        this.x = x;     //40        //460
        this.y = y;     //660
        this.speed = 30;
        this.rotateAngle = 0;
    }

    drawRotated(rotateAngle) {
        this.ctx.save();
        this.ctx.translate(this.getMidPointX(), this.getMidPointY());
        this.ctx.rotate(rotateAngle * Math.PI / 180);
        this.ctx.translate(-this.getMidPointX(), -this.getMidPointY());
        this.ctx.drawImage(this.img, this.x, this.y);
        this.ctx.restore();
    }

    move(rotateAngle) {
        console.log(this.y);
        this.rotateAngle = rotateAngle;

        let intervalID = setInterval(() => {

            this.drawRotated(this.rotateAngle);

            this.x += this.speed * Math.sin(rotateAngle * Math.PI / 180);
            this.y -= this.speed * Math.cos(rotateAngle * Math.PI / 180);

            if (this.y < 0) {
                clearInterval(intervalID);
            }
        }, 100);

    }

    checkCollision() {

    }

    getMidPointX() {        //50
        return (this.x + this.img.width / 2);
    }

    getMidPointY() {        // 680
        return (this.y + this.img.height / 2);
    }

}