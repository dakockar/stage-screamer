class Enemy {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.speed = 5;
        this.isCollided = false;
        this.images = [];

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

    vanish() {

        // this.img.style.opacity = "0.5";

        this.img.src = "";
        delete this;
        // console.log(this);
    }



}