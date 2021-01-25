canvas = document.querySelector("canvas");
ctx = this.canvas.getContext("2d");

const game = new Game();


function buildSplashScreen() {


}


function buildGameScreen() {
    game.startGame();

}

function buildGameOverScreen() {


}

// window.addEventListener("load", () => {
//     // buildSplashScreen();

// })


let isLeftArrow = false;
let isRightArrow = false;
let isShooting = false;
let shotOnce = false;
let qIsPressed = false;


document.addEventListener("keydown", (event) => {

    if (event.key === "q") {
        qIsPressed = true;
    }

    if (event.key === "ArrowDown") {
        isRightArrow = true;
        isLeftArrow = false;

        if (game.rotateAngle >= 5 && game.rotateAngle < 80) {
            game.rotateAngle += 5;
        }
    }
    else if (event.key === "ArrowUp") {
        isRightArrow = false;
        isLeftArrow = true;

        if (game.rotateAngle > 5 && game.rotateAngle <= 80) {
            game.rotateAngle -= 5;
        }
    }


    // keydown is sending signal continuously, not only once. how to solve this?

    if (event.key === " ") {
        isShooting = true;

    }

    // console.log(event.key);

})



// document.addEventListener("keydown", (event) => {
//     if (event.key === " ") {
//         isShooting = true;
//         setTimeout(() => {
//             isShooting = false;
//         }, 200);
//     }

// }, { once: true });



document.addEventListener("keyup", (event) => {

    if (event.key === " ") {
        isShooting = false;
        // console.log("space keyup");
    }
})


buildGameScreen();

// let enemy = new Enemy(100, 100, ctx);
// enemy.draw();