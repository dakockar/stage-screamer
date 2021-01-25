// canvas = document.querySelector("canvas");
// ctx = this.canvas.getContext("2d");

const game = new Game();
// let startButton = document.querySelector("button");


function buildSplashScreen() {

}


function buildGameScreen() {
    game.startGame();

}

function buildGameOverScreen() {


}

window.addEventListener("load", () => {
    buildSplashScreen();

})


let isUpArrow = false;
let isDownArrow = false;
let qIsPressed = false;


document.addEventListener("keydown", (event) => {

    // if (event.key === "Enter") 

    if (event.key === "q") {
        qIsPressed = true;
    }

    if (event.key === "ArrowDown") {
        isDownArrow = true;
        isUpArrow = false;

        if (game.rotateAngle >= 5 && game.rotateAngle < 80) {
            game.rotateAngle += 5;
        }
    }
    else if (event.key === "ArrowUp") {
        isDownArrow = false;
        isUpArrow = true;

        if (game.rotateAngle > 5 && game.rotateAngle <= 80) {
            game.rotateAngle -= 5;
        }
    }


    // keydown is sending signal continuously, not only once. how to solve this?

    if (event.key === " ") {
        game.shootPressed();
    }

    // console.log(event.key);

})



document.addEventListener("keyup", (event) => {
    if (event.key === " ") {
        isShooting = false;
        // console.log("space keyup");
    }
})




// buildGameScreen();