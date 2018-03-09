/**
 * @description - Creates a player and handles all input received from the keyboard
 * @constructor new Player
 */
class Player {
  constructor() {
    this.avatarList = [
      'images/wizard-female.png',
      'images/night-sword-shield.png',
      'images/viking-sword-shield.png',
      'images/wizard-male.png',
      'images/female-archer.png'
    ];
    this.x = 3 * 101 + 15;
    this.y = 8 * 83 + 10;
    this.id = 3;
    this.avatarSelected = false;
    this.score = 0;
    this.level = 1;
    this.lifes = 3;
    this.lifeCollected = false;
    this.startGameText = 'Please Select Your Avatar To Play The Game.';
    this.isGameOver = false;
    this.lifesIcon = 'images/heart.png';
  }

  update(dt) {
    if (player.lifes === 0) {
      this.gameOver();
    }
  }

  /**
   * @description - if there is no avatar selected it shows the begin screen to choose your avatar
   * else it starts the game.
   */
  render() {
    if (this.avatarSelected === false) {
      // background
      ctx.fillStyle = '#9AD262';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = '30px serif';
      ctx.fillStyle = '#fff';
      // start screen text if player is game over text changes
      if (this.isGameOver === true) {
        ctx.fillText('Game Over Wanna Try Again?', 235, 135);
      } else {
        // info text start screen
        ctx.fillText(this.startGameText, 135, 100);
        ctx.font = '25px FontAwesome';

        ctx.fillText('Info', 135, 150);
        ctx.font = '20px FontAwesome';
        ctx.fillText(
          `Use the \uf104 or \uf105 key to switch avatar and enter to start the game`,
          135,
          170
        );
        ctx.fillText('Use the < or > key to move left and right', 135, 195);
        ctx.fillText(
          `Use the \uF106 or \uf107 key to move up and down`,
          135,
          220
        );
      }

      // avatar drawings
      ctx.drawImage(
        Resources.get('images/Selector.png'),
        this.id * 101 + 1.8 * 100,
        6 * 83 - 65,
        80,
        150
      );
      ctx.drawImage(
        Resources.get(this.avatarList[this.id]),
        3.4 * 101,
        4 * 83 - 40,
        150,
        150
      );
      for (let avatar in this.avatarList) {
        ctx.drawImage(
          Resources.get(this.avatarList[avatar]),
          avatar * 101 + 1.8 * 101,
          6 * 83 - 20,
          80,
          90
        );
      }
    } else {
      ctx.font = '20px serif';
      // score bar background
      ctx.fillStyle = 'rgba(54,54,54,.5)';
      ctx.fillRect(0, 0, canvas.width, 40);

      // score text
      ctx.fillStyle = '#fff';
      ctx.fillText(`score ${this.score}`, 10, 30);

      // level text
      ctx.fillStyle = '#fff';
      let textLevel = ctx.measureText(`level ${this.level}`);
      ctx.fillText(
        `level ${this.level}`,
        canvas.width / 2 - textLevel.width / 2,
        30
      );

      // lifes
      for (let i = 0; i <= this.lifes; i++) {
        ctx.drawImage(
          Resources.get(this.lifesIcon),
          canvas.width - i * 35,
          5,
          30,
          30
        );
      }
      ctx.drawImage(
        Resources.get(this.avatarList[this.id]),
        this.x,
        this.y,
        83,
        60
      );
    }
  }

  /**
   * @description - Handles input from the player on selecting an avatar
   * @param {string} input - receives the keydown input from app.js
   */
  handleAvatarInput(input) {
    switch (input) {
      case 'left':
        if (this.id > 0) this.id -= 1;
        break;
      case 'right':
        if (this.id < 4) this.id += 1;
        break;
      case 'enter':
        this.avatarSelected = true;
    }
  }

  /**
   * @description - Handles the player movements and blocks player from moving out of the canvas or into any obstacle on the canvas
   * row 0 castle towers
   * row 1 fields and cows
   * row 2 water with one bridge
   * row 3 path with enemy on reaching level 5 two enemies
   * row 4 bush and hill
   * row 5 path with enemy on reaching level 10 two enemies
   * row 6 path with enemy on reaching level 15 two enemies
   * row 7 water with two bridges
   * row 8 starting position of the player after selecting an avatar also resetPlayer goes to this position
   * @param {string} input - receives the keydown input from app.js
   * @returns {number} y - up or down position on the canvas
   * @returns {number} x - left or right position on the canvas
   */
  handleInput(input) {
    switch (input) {
      // return if player wants to go left from any of these x/y cordinates
      case 'left':
        if (
          (this.x === 116 && this.y === 591) || // row 7
          (this.x === 520 && this.y === 591) || // row 7
          (this.x === 318 && this.y === 342) || // row 4
          (this.x === 722 && this.y === 342) || // row 4
          (this.x === 621 && this.y === 176) || // row 2
          (this.x === 318 && this.y === 10) // row 0
        )
          return;
        else if (this.x > canvas.width / numCols)
          // move the player left 101
          this.x -= 101;
        break;
      case 'right':
        // return if player wants to go right from any of these x/y cordinates
        if (
          (this.x === 116 && this.y === 591) || // row 7
          (this.x === 520 && this.y === 591) || // row 7
          (this.x === 116 && this.y === 342) || // row 4
          (this.x === 520 && this.y === 342) || // row 4
          (this.x === 621 && this.y === 176) || // row 2
          (this.x === 419 && this.y === 10) // row 0
        )
          return;
        else if (this.x < canvas.width - 101)
          // move the player right 101
          this.x += 101;
        break;
      case 'up':
        // return if player wants to go up from any of these x/y cordinates
        if (
          (this.y === 674 && this.x === 15) || // row 8
          (this.y === 674 && this.x === 217) || // row 8
          (this.y === 674 && this.x === 318) || // row 8
          (this.y === 674 && this.x === 419) || // row 8
          (this.y === 674 && this.x === 621) || // row 8
          (this.y === 674 && this.x === 722) || // row 8
          (this.y === 425 && this.x === 217) || // row 5
          (this.y === 425 && this.x === 621) || // row 5
          (this.y === 259 && this.x === 15) || // row 4
          (this.y === 259 && this.x === 116) || // row 4
          (this.y === 259 && this.x === 217) || // row 4
          (this.y === 259 && this.x === 419) || // row 4
          (this.y === 259 && this.x === 520) || // row 4
          (this.y === 259 && this.x === 318) || // row 4
          (this.y === 259 && this.x === 722) || // row 4
          (this.y === 93 && this.x === 15) || // row 3
          (this.y === 93 && this.x === 116) || // row 3
          (this.y === 93 && this.x === 217) || // row 3
          (this.y === 93 && this.x === 520) || // row 3
          (this.y === 93 && this.x === 621) || // row 3
          (this.y === 93 && this.x === 722) // row 3
        )
          return;
        else if (this.y > 92)
          // move the player up 83
          this.y -= 83;
        else {
          // if player reaches the end add one to the level and reset the player
          this.levelUpdate();
          this.resetPlayer();
        }
        break;
      case 'down':
        // return if player wants to go down from any of these x/y cordinates
        if (
          (this.y === 508 && this.x === 15) || // row 6
          (this.y === 508 && this.x === 217) || // row 6
          (this.y === 508 && this.x === 318) || // row 6
          (this.y === 508 && this.x === 419) || // row 6
          (this.y === 508 && this.x === 621) || // row 6
          (this.y === 508 && this.x === 722) || // row 6
          (this.y === 508 && this.x === 217) || // row 6
          (this.y === 259 && this.x === 217) || // row 3
          (this.y === 259 && this.x === 621) || // row 3
          (this.y === 93 && this.x === 15) || // row 1
          (this.y === 93 && this.x === 116) || // row 1
          (this.y === 93 && this.x === 217) || // row 1
          (this.y === 93 && this.x === 419) || // row 1
          (this.y === 93 && this.x === 520) || // row 1
          (this.y === 93 && this.x === 318) || // row 1
          (this.y === 93 && this.x === 722) // row 1
        )
          return;
        else if (this.y < canvas.height - 110)
          // move the player down 83
          this.y += 83;
        break;
    }
  }

  /**
   * @description - abstracts one from the current lifes left
   */
  minLife() {
    this.lifes--;
  }

  /**
   * @description - add one level on reaching the gates of the castle
   * @constructor Enemy - creates a new enemy on reaching level 5 and 15
   * @constructor Enemy1 - creates a new enemy on reaching level 10
   */
  levelUpdate() {
    this.level++;
    this.score += 50;
    if (this.level === 3)
      allEnemies.push(new Enemy(Math.random() * 150 + 30, 3, player));
    else if (this.level === 6)
      allEnemies.push(new Enemy1(Math.random() * 150 + 30, 5, player));
    else if (this.level === 9)
      allEnemies.push(new Enemy(Math.random() * 150 + 30, 6, player));
    else if (this.level === 12)
      allEnemies.push(new Enemy1(Math.random() * 180 + 30, 6, player));
    else if (this.level === 15)
      allEnemies.push(new Enemy(Math.random() * 180 + 30, 3, player));
    else if (this.level === 18)
      allEnemies.push(new Enemy(Math.random() * 180 + 30, 5, player));
    else if (this.level === 21)
      allEnemies.push(new Enemy(Math.random() * 180 + 30, 1, player));
  }

  /**
   * @description - on reaching the gates of the castle this resets the player back to the starting position
   */
  resetPlayer() {
    this.x = 3 * 101 + 15;
    this.y = 8 * 83 + 10;
  }

  /**
   * @description - Restart the game and reset everything to original settings
   */
  gameOver() {
    this.avatarSelected = false;
    this.score = 0;
    this.level = 1;
    this.lifes = 3;
    this.lifeCollected = false;
    this.isGameOver = true;
  }
}
