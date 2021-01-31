
// variable declaraitons & initializations

let isUpArrow = false;
let isDownArrow = false;

let splashScreenDOM = document.querySelector("#splash-screen");
let gameScreenDOM = document.querySelector("#game-screen");
let gameOverScreenDOM = document.querySelector("#game-over");

let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let unmuteButton = document.querySelector("#unmute-btn");

let scoreDOM = document.querySelector("#score");
let winStatDOM = document.querySelector("#win-stat");
let haterDOM = document.querySelector("#hater-text");

let canFire = true;
let canScream = true;


let splashScrSong = document.querySelector("#splash-scr-song");
let mainSong = document.querySelector("#main-song");
let ending = document.querySelector("#ending");


let enemyDieSnd = document.querySelector("#enemy-die");
let enemyDieSndArr = ["./sounds/die1.mp3", "./sounds/die2.mp3", "./sounds/die3.mp3", "./sounds/die4.mp3"];



let currTimeArr = [9.6, 19.2];

splashScrSong.volume = 0.35;
mainSong.volume = 0.2;
ending.volume = 0.5;
enemyDieSnd.volume = 0.3;

// ------------------------------



// functions

function buildSplashScreen() {
    splashScreenDOM.style.display = "flex";
    // splashScrSong.play();        // instead, I used autoplay and an unmute button
    splashScrSong.currentTime = 0;



    mainSong.currentTime = 0;
}

function buildGameScreen() {
    splashScrSong.pause();
    ending.pause();
    ending.currentTime = 0;

    splashScreenDOM.style.display = "none";
    gameOverScreenDOM.style.display = "none";
    gameScreenDOM.style.display = "flex";

    game.isGameOver = false;

    game.resetGame();
    game.startGame();
    mainSong.play();
}

function buildGameOverScreen() {
    gameScreenDOM.style.display = "none";
    gameOverScreenDOM.style.display = "flex";
    mainSong.pause();
    mainSong.currentTime = currTimeArr[1];


    scoreDOM.innerHTML = game.score;

    if (game.score === 1) {
        haterDOM.innerHTML = "hater";
    }
    else {
        haterDOM.innerHTML = "haters";
    }

    // the numbers can change in the final product 

    if (game.score <= 30) {

        ending.src = "./sounds/ss - bad ending.mp3";
        ending.play();

        winStatDOM.innerHTML = "That is not enough, you suck!"
    }

    // this part is omitted for now
    // else if (game.score > 15 && game.score <= 30) {

    //     // TODO: change ending audio src
    //     // ending.src = "";
    //     // ending.play();

    //     winStatDOM.innerHTML = "Wow, you are killing it out there!<br>I bet you can do even better &#9836;&#9834;&#9836;";
    // }
    else if (game.score > 30) {

        ending.src = "./sounds/ss - good ending.mp3";
        ending.play();

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

unmuteButton.addEventListener("click", () => {
    splashScrSong.currentTime = 0;
    splashScrSong.muted = false;
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

        if (canScream) {
            // screamAudio.play

            canScream = false;
            setTimeout(() => {
                canScream = true;
            }, 1500);
        }
    }

    if (event.key === "q") {
        game.gameOver();
    }

    if (event.key === "r") {
        if (game.isGameOver) {
            buildGameScreen();
        }
    }
    // console.log(event.key);
})