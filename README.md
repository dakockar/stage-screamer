# stage-screamer

## Description

Stage screamer is a top-down shooter game. The player is on the stage of a rock concert hall. She controls the angle of the loudspeakers on both sides and tries to shoot the enemies that are coming from across the room with her screams.
The game ends when one of the enemies reaches the player. 
The score is kept based on the count of the enemies that are killed. If it is less than a certain number, player loses. Otherwise, the player reaches the goal.

## MVP (DOM - CANVAS)

- there are two loudspeakers at each bottom corner
- player controls the angles of the loudspeakers (1st draft, the loudspeakers can be controlled together only)
- loudspeakers shoot diagonally depending on the angle
- enemies are trying to reach the stage
- when one enemy reaches the stage, the game is over
- score is kept based on enemies killed
- playes wins or loses depending on the score (to be decided later)


## Backlog


## Data structure
<!-- Classes and methods definition. -->
- index.js
    - buildSplashScreen()
    - buildGameScreen()
    - buildGameOverScreen()

- Game.js
    - Game()
    - startGame()
    - drawCanvas()
    - updateCanvas()
    - shootPressed()
    - checkCollisions()
    - printScore()
    - checkEnemyPositions()
    - gameOver()
    - resetGame()

- Speaker.js
    - Speaker(this.x, this.y, this.ctx)
    - drawRotated(rotateAngle)
    - shoot()
    - getMidPointX()
    - getMidPointY()

- Enemy.js
    - Enemy(this.x, this.y, this.ctx)
    - draw()
    - move()

- Bullet
    - Bullet(this.x, this.y, this.ctx, this.rotateAngle)
    - drawRotated()
    - move()
    - getMidPointX()
    - getMidPointY()


## States y States Transitions
<!-- Definition of the different states and their transition (transition functions) -->

- splashScreen
- gameScreen
- gameoverScreen (3 different states based on the score)
    - you suck
    - can do better
    - you're a rockstar

## Task

- index - buildGameScreen
- game - startGame
- game - drawCanvas
- speaker
- index - buildSplashScreen
- index - buildGameOverScreen



## Links


### Trello
<!-- [Link url](https://trello.com) -->


### Git
URls for the project repo and deploy
[Link Repo] https://github.com/dakockar/stage-screamer

<!-- [Link Deploy](http://github.com) -->


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)