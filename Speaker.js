class Speaker {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = "./images/speaker.png";
        this.rotateAngle = 0;
        // this.bullets = [new Bullet(this.getMidPointX(), this.getMidPointY(), this.ctx)]


        // this.bullets = [];
        // for (let i = 0; i < 5; i++) {
        //     this.bullets.push(new Bullet(this.getMidPointX(), this.getMidPointY(), this.ctx));
        // }
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

    shoot(i) {

        let bullet = new Bullet(this.getMidPointX(), this.getMidPointY(), this.ctx);
        bullet.move(this.rotateAngle);


        // if (this.bullets[i].y < 0) {
        //     this.bullets.push(new Bullet(this.getMidPointX(), this.getMidPointY(), this.ctx));
        // }
        // this.bullets[i].move(this.rotateAngle);
        // this.bullets[i].drawRotated(this.rotateAngle);


        // tried stuff but did not work...

        // if (this.bullets.length < 5) {
        //     bullet.move();
        //     this.bullets.push(bullet); 
        // }
        // console.log(this.bullets);


        // if (bullet.y < 0) {
        //     this.bullets.shift();
        //     console.log("in the if" + this.bullets);
        // }

        // setTimeout(() => {
        //     this.bullets.shift();
        // }, 2000);
        // bullet.drawRotated(this.rotateAngle);

    }



    getMidPointX() {        // 40           // 460
        return (this.x + this.img.width / 2);
    }

    getMidPointY() {    // 660
        return (this.y + this.img.height / 2);
    }

}