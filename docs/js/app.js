'use strict';

var player = new Player(); // create a new player

allEnemies = new Array(); // an array with all enemies
// pushing new enemies onto the array adding extra enemies is done in player.js
allEnemies.push(new Enemy1(Math.random() * 100 + 30, 3, player));
allEnemies.push(new Enemy(Math.random() * 100 + 30, 5, player));
allEnemies.push(new Enemy1(Math.random() * 100 + 30, 6, player));

// listen to keypresses
document.addEventListener('keyup', function (e) {
  // game controls
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  // avatar selection controls
  var avatarKeys = {
    37: 'left',
    13: 'enter',
    39: 'right'
  };

  // check if an avatar is selected or not change which handler is used
  if (player.avatarSelected === true) {
    player.handleInput(allowedKeys[e.keyCode]);
  } else {
    player.handleAvatarInput(avatarKeys[e.keyCode]);
  }
});
// load the engine.js
Engine();