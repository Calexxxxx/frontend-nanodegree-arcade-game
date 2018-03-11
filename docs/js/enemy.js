'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description - Creates a new enemy and checks if the enemy colides with the player
 * @constructor new Enemy
 */
var allEnemies = [];

var Enemy = function (_Character) {
  _inherits(Enemy, _Character);

  function Enemy(speed, row, player) {
    _classCallCheck(this, Enemy);

    var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, 0, 83 * row + 10));

    _this.sprite = 'images/enemy1.png';
    _this.player = player;
    _this.speed = speed;
    return _this;
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
}(Character);