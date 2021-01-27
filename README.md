# stage-screamer

## Description

Stage screamer is a top-down shooter game. The player is on the stage of a rock concert hall. She controls the angle of the loudspeakers on both sides and tries to shoot the enemies that are coming from across the room, with her screams.
The game ends when one of the enemies reaches the player. 
The score is kept based on the count of the enemies that are killed. If it is less than a certain number, player loses. Otherwise, the player reaches the goal.

## MVP (DOM - CANVAS)

- there are two loudspeakers at each bottom corner
- player controls the angles of the loudspeakers (in the 1st draft, the loudspeakers cannot be controlled separately)
- loudspeakers shoot diagonally based on the angle
- enemies are trying to reach the stage
- when one enemy reaches the stage, the game is over
- score is kept based on the enemies banished
- playes wins or loses depending on the score


## Backlog


## Data structure
<!-- Classes and methods definition. -->
### index.js
    - buildSplashScreen()
    - buildGameScreen()
    - buildGameOverScreen()

### game.js
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

### speaker.js
    - Speaker(this.x, this.y, this.ctx)
    - drawRotated(rotateAngle)
    - shoot()
    - getMidPointX()
    - getMidPointY()

### enemy.js
    - Enemy(this.x, this.y, this.ctx)
    - draw()
    - move()
    - fadeOut()

### bullet.js
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
    - ok, but can do better
    - you're a rockstar

## Task

- index - buildGameScreen
- game - startGame
- game - drawCanvas
- speaker - getMidPointX
- speaker - getMidPointY
- speaker - drawRotated
- bullet - getMidPointX
- bullet - getMidPointY
- bullet - drawRotated
- bullet - move
- speaker - shoot
- game - shootPressed
- game - updateCanvas
- enemy - draw
- enemy - move
- game - checkEnemyPositions
- game - gameOver
- game - checkCollisions
- game - printScore
- index - buildSplashScreen
- index - buildGameOverScreen
- game - resetGame
- enemy - fadeOut


## Links


### Trello
<!-- [Link url](https://trello.com) -->


### Git
[Repo](https://github.com/dakockar/stage-screamer)

[Deploy](https://dakockar.github.io/stage-screamer/)


### Slides
<!-- URls for the project presentation (slides) -->
[Presentation slides](https://docs.google.com/presentation/d/1ILhqEKDlHVfW3c6UQAN_on4nlDYPc7rHHZ8Xg1LTw8E/edit?usp=sharing)