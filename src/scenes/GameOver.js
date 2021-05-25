import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
  constructor() {
    super({
      key: 'gameOver',
    });
  }

  preload() {
    this.load.image('gameOverScreen', './assets/images/gameover-screen.png');
  }
  create() {
    this.add.image(400, 320, 'gameOverScreen').setScale(0.55);

    window.addEventListener(
      'keypress',
      (k) => {
        if (k.code == 'Enter') this.scene.start('Game');
      },
      { once: true }
    );
  }
}

export default GameOver;
