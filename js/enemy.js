/**
 * @description - Creates a new enemy and checks if the enemy colides with the player
 * @constructor new Enemy
 */
const allEnemies = [];
class Enemy extends Character {
  constructor(speed, row, player) {
    super(0, 83 * row + 10);
    this.sprite = 'images/enemy1.png';
    this.player = player;
    this.speed = speed;
  }

  update(dt) {
    if (this.x <= canvas.width) {
      this.x += dt * this.speed;
    } else {
      this.x = 0;
      this.speed = Math.random() * 100 + 30;
    }

    if (
      this.x < this.player.x + 60 &&
      this.x + 60 > this.player.x &&
      this.y < this.player.y + 60 &&
      this.y + 60 > this.player.y
    ) {
      this.player.minLife();
      this.player.resetPlayer();
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 80, 60);
  }
}
