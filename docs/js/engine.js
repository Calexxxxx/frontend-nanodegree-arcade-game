'use strict';

var doc = document; // the document
var win = window; // the window
var game = doc.getElementById('game'); // wrapper for the canvas
var canvas = doc.createElement('canvas'); // canvas
var ctx = canvas.getContext('2d'); // getContext 2d
var allEnemies = []; // array of all enemies
var lastTime = void 0;
var numCols = void 0;
var numRows = void 0;

var Engine = function Engine() {
  /* This function serves as the kickoff point for the game loop itself
     * and handles properly calling the update and render methods.
     */
  function main() {
    var now = Date.now(),
        dt = (now - lastTime) / 1000.0;

    update(dt);
    render();

    lastTime = now;

    win.requestAnimationFrame(main);
  }

  /* This function does some initial setup that should only occur once,
     * particularly setting the lastTime variable that is required for the
     * game loop.
     */
  function init() {
    reset();
    lastTime = Date.now();
    main();
  }

  /* This function is called by main (our game loop) and itself calls all
     * of the functions which may need to update entity's data. Based on how
     * you implement your collision detection (when two entities occupy the
     * same space, for instance when your character should die), you may find
     * the need to add an additional function call here. For now, we've left
     * it commented out - you may or may not want to implement this
     * functionality this way (you could just implement collision detection
     * on the entities themselves within your app.js file).
     */
  function update(dt) {
    updateEntities(dt);
  }

  /* This is called by the update function and loops through all of the
     * objects within your allEnemies array as defined in app.js and calls
     * their update() methods. It will then call the update function for your
     * player object. These update methods should focus purely on updating
     * the data/properties related to the object. Do your drawing in your
     * render methods.
     */
  function updateEntities(dt) {
    allEnemies.forEach(function (enemy) {
      enemy.update(dt);
    });
    player.update();
    player.level;
  }

  /**
   * @description creates the canvas and renders all elements used to create the map
   */
  function render() {
    var rowImages = ['images/castle-tower.png', 'images/castle-tower1.png', 'images/castle-wall.png', 'images/ground-field.png', 'images/field-cows.png', 'images/field.png', 'images/path.png', 'images/water.png', 'images/water-bridge.png', 'images/hill.png', 'images/bush.png'];

    numRows = 8;
    numCols = 8;
    // Before drawing, clear existing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = 101 * numCols;
    canvas.height = 83 * numRows + 80;
    game.appendChild(canvas);

    // set background map to green
    ctx.fillStyle = '#adbb74';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // row 0
    ctx.drawImage(Resources.get(rowImages[0]), 0 * 101, 0 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[2]), 1 * 99, 0 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[1]), 2 * 99, 0 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[1]), 5 * 101, 0 * 83, 103, 83);
    ctx.drawImage(Resources.get(rowImages[2]), 6 * 101, 0 * 83, 103, 83);
    ctx.drawImage(Resources.get(rowImages[0]), 7 * 101, 0 * 83, 101, 83);

    // row 1
    ctx.drawImage(Resources.get(rowImages[3]), 0 * 101, 1 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[3]), 1 * 101, 1 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[3]), 2 * 101, 1 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[4]), 5 * 101, 1 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[4]), 7 * 101, 1 * 83, 101, 83);

    // row 2
    ctx.drawImage(Resources.get(rowImages[7]), 0 * 101, 2 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 1 * 101, 2 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 2 * 101, 2 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 3 * 101, 2 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 4 * 101, 2 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 5 * 101, 2 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[8]), 6 * 101, 2 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 7 * 101, 2 * 83, 101, 83);

    // row 3
    ctx.drawImage(Resources.get(rowImages[6]), 0 * 101, 3 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 2 * 99, 3 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 4 * 99, 3 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 6 * 99, 3 * 83, 220, 83);

    // row 4
    ctx.drawImage(Resources.get(rowImages[9]), 6 * 101, 4 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[10]), 2 * 101, 4 * 83, 101, 83);

    // row 5
    ctx.drawImage(Resources.get(rowImages[6]), 0 * 101, 5 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 2 * 99, 5 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 4 * 99, 5 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 6 * 99, 5 * 83, 220, 83);

    // row 6
    ctx.drawImage(Resources.get(rowImages[6]), 0 * 101, 6 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 2 * 99, 6 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 4 * 99, 6 * 83, 202, 83);
    ctx.drawImage(Resources.get(rowImages[6]), 6 * 99, 6 * 83, 220, 83);

    // row 7
    ctx.drawImage(Resources.get(rowImages[7]), 0 * 101, 7 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[8]), 1 * 101, 7 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 2 * 101, 7 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 3 * 101, 7 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 4 * 101, 7 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[8]), 5 * 101, 7 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 6 * 101, 7 * 83, 101, 83);
    ctx.drawImage(Resources.get(rowImages[7]), 7 * 101, 7 * 83, 101, 83);

    // if there is no avatar selected only render the avatars selection part
    if (player.avatarSelected !== false) {
      renderEntities();
    }
    player.render();
    if (player.lifes === 1) {
      player.refillLifes();
    }
  }

  // render all game elements
  function renderEntities() {
    allEnemies.forEach(function (enemy) {
      enemy.render();
    });
    player.render();
  }

  // reset the game on game over
  function reset() {
    // noop
    if (player.lifes === 0) {
      main();
    }
  }

  // all images used in the game
  Resources.load(['images/castle-tower.png', 'images/castle-wall.png', 'images/castle-tower1.png', 'images/ground-field.png', 'images/field-cows.png', 'images/field.png', 'images/path.png', 'images/water.png', 'images/water-bridge.png', 'images/hill.png', 'images/bush.png', 'images/female-archer.png', 'images/wizard-female.png', 'images/night-sword-shield.png', 'images/viking-sword-shield.png', 'images/wizard-male.png', 'images/Selector.png', 'images/enemy1.png', 'images/enemy2.png', 'images/heart.png', 'images/diamond.png']);
  Resources.onReady(init);
};