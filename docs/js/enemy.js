'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @description - Creates a new enemy and checks if the enemy colides with the player
 * @constructor new Enemy
 */
var allEnemies = [];

var Enemy = function () {
  function Enemy(speed, row, player) {
    _classCallCheck(this, Enemy);

    this.sprite = 'images/enemy1.png';
    this.player = player;
    this.speed = speed;
    this.x = 0;
    this.y = 83 * row + 10;
  }

  _createClass(Enemy, [{
    key: 'update',
    value: function update(dt) {
      if (this.x <= canvas.width) {
        this.x += dt * this.speed;
      } else {
        this.x = 0;
        this.speed = Math.random() * 100 + 30;
      }

      if (this.x < this.player.x + 60 && this.x + 60 > this.player.x && this.y < this.player.y + 60 && this.y + 60 > this.player.y) {
        this.player.minLife();
        this.player.resetPlayer();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 80, 60);
    }
  }]);

  return Enemy;
}();