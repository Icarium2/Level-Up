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
    this.add.image(800, 600, 'gameOverScreen').setScale(0.7);

    window.addEventListener(
      'keypress',
      (k) => {
        if (k.code == 'Enter')
          this.scene.start('Game'), (window.store = { currentHP: 3 });
      },
      { once: true }
    );
  }
}

export default GameOver;
