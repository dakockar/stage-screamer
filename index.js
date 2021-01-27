
// variable declaraitons & initializations

let isUpArrow = false;
let isDownArrow = false;

let splashScreenDOM = document.querySelector("#splash-screen");
let gameScreenDOM = document.querySelector("#game-screen");
let gameOverScreenDOM = document.querySelector("#game-over");

let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");

let scoreDOM = document.querySelector("#score");
let winStatDOM = document.querySelector("#win-stat");
let haterDOM = document.querySelector("#hater-text");

let canFire = true;

// ------------------------------



// functions

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

    if (game.score === 1) {
        haterDOM.innerHTML = "hater";
    }
    else {
        haterDOM.innerHTML = "haters";
    }

    if (game.score > 15 && game.score <= 30) {
        winStatDOM.innerHTML = "Wow, you are killing it out there!<br>I bet you can do even better &#9836;&#9834;&#9836;";
    }
    else if (game.score > 30) {
        winStatDOM.innerHTML = "Awesome! You are a rockstar &hearts;<br><br>Can you break your record?";
        restartButton.innerHTML = "TRY AGAIN!"
    }
}

//-------------------------------------------------


splashScreenDOM.style.display = "none";
gameScreenDOM.style.display = "none";
gameOverScreenDOM.style.display = "none";

const game = new Game();

buildSplashScreen();



// event listeners

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

    // cooldown added for firing shots

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