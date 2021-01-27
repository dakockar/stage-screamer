class Speaker {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "./images/speaker.png";
        this.rotateAngle = 0;
    }

    drawRotated(rotateAngle) {
        this.rotateAngle = rotateAngle;
        this.ctx.save();
        this.ctx.translate(this.getMidPointX(), this.getMidPointY());
        this.ctx.rotate(this.rotateAngle * Math.PI / 180);
        this.ctx.translate(-this.getMidPointX(), -this.getMidPointY());
        this.ctx.drawImage(this.img, this.x, this.y);
        this.ctx.restore();
    }

    shoot() {
        let bullet = new Bullet(this.getMidPointX(), this.getMidPointY(), this.ctx, this.rotateAngle);
        return bullet;
    }

    getMidPointX() {        // 40           // 460
        return +(this.x + this.img.width / 2);
    }

    getMidPointY() {    // 660
        return +(this.y + this.img.height / 2);
    }

}