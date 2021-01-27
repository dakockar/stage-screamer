class Bullet {
    constructor(x, y, ctx, rotateAngle) {
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "./images/bullet.png";
        this.x = x;     //40        //460
        this.y = y;     //660
        this.speed = 30;
        this.rotateAngle = rotateAngle;
        this.isCollided = false;
        this.collisionPt1 = { x: 0, y: 0 };
        this.collisionPt2 = { x: 0, y: 0 };
    }

    drawRotated() {
        this.ctx.save();
        this.ctx.translate(this.getMidPointX(), this.getMidPointY());
        this.ctx.rotate(this.rotateAngle * Math.PI / 180);
        this.ctx.translate(-this.getMidPointX(), -this.getMidPointY());
        this.ctx.drawImage(this.img, this.x, this.y);
        this.ctx.restore();
    }

    move() {

        this.x += this.speed * Math.sin(this.rotateAngle * Math.PI / 180);
        this.y -= this.speed * Math.cos(this.rotateAngle * Math.PI / 180);

        // collision point finding formulas
        // x1 = x - height/2 * sin(rotateAngle)
        // y1 = y + height/2 * cos(rotateAngle)
        // x2 = x1 + height * cos(rotateAngle)
        // y2 = y1 + height * sin(rotateAngle)
        this.collisionPt1.x = this.x - this.img.height / 2 * Math.sin(this.rotateAngle);
        this.collisionPt1.y = this.y + this.img.height / 2 * Math.cos(this.rotateAngle);
        this.collisionPt2.x = this.x - this.img.height / 2 * Math.sin(this.rotateAngle) + this.img.height * Math.cos(this.rotateAngle);
        this.collisionPt2.y = this.y + this.img.height / 2 * Math.cos(this.rotateAngle) + this.img.height * Math.sin(this.rotateAngle);
    }


    getMidPointX() {        //50
        return (this.x + this.img.width / 2);
    }

    getMidPointY() {        // 680
        return (this.y + this.img.height / 2);
    }

}