import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    this.load.audio('introMusic', '/src/assets/music/soundtrack.wav');
  }

  create() {
    const introMusic = this.sound.add('introMusic');
    introMusic.autoplay = true;
    introMusic.play();
  }
}

export default Game;
