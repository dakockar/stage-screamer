let isUpArrow = false;
let isDownArrow = false;

let splashScreenDOM = document.querySelector("#splash-screen");
let gameScreenDOM = document.querySelector("#game-screen");
let gameOverScreenDOM = document.querySelector("#game-over");

let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");

let scoreDOM = document.querySelector("#score");

let canFire = true;


splashScreenDOM.style.display = "none";
gameScreenDOM.style.display = "none";
gameOverScreenDOM.style.display = "none";

const game = new Game();


function buildSplashScreen() {
    splashScreenDOM.style.display = "flex";


}


function buildGameScreen() {
    splashScreenDOM.style.display = "none";
    gameOverScreenDOM.style.display = "none";
    gameScreenDOM.style.display = "flex";
    game.resetGame();
    game.startGame();
}

function buildGameOverScreen() {
    gameScreenDOM.style.display = "none";
    gameOverScreenDOM.style.display = "flex";
    scoreDOM.innerHTML = game.score;
}


buildSplashScreen();

startButton.addEventListener("click", () => {
    buildGameScreen();
})

restartButton.addEventListener("click", () => {
    buildGameScreen();
})


document.addEventListener("keydown", (event) => {

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
        if (canFire) {
            game.shootPressed();
            canFire = false;
            setTimeout(() => {
                canFire = true;
            }, 800);
        }
    }

    if (event.key === "q") {
        game.gameOver();
    }

    if (event.key === "r") {
        game.gameOver();
        buildGameScreen();
    }
    // console.log(event.key);
})