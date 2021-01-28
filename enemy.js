class Enemy {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.speed = 10;
        this.isCollided = false;
        this.images = [];
        this.img = "";
        this.opacity = 1;

        for (let i = 1; i < 4; i++) {
            let img = new Image();
            img.src = `./images/enemy${i}.png`;
            this.images.push(img);
        }

        this.img = this.images[Math.floor(Math.random() * 3)];
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y);
    }

    move() {
        this.y += this.speed;
    }

    fadeOut() {
        this.opacity -= 0.2;
        this.ctx.globalAlpha = this.opacity;
        this.draw();
        this.ctx.globalAlpha = 1;
    }

}