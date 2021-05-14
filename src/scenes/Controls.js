import Phaser from 'phaser';
import TitleScreen from './TitleScreen';

class Controls extends Phaser.Scene {
  constructor() {
    super({ key: 'controls' });
  }

  preload() {
    this.load.image('controls', '/src/assets/images/controls-screen.png');
    this.load.audio('introMusic', '/src/assets/music/intro.wav');
  }

  create() {
    const controls = this.add.image(400, 320, 'controls').setScale(0.55);
    controls.setInteractive();
    controls.on('pointerup', () => {
      this.scene.start('titleScreen');
    });

    const introMusic = this.sound.add('introMusic');
    introMusic.autoplay = true;
    introMusic.play();
  }
}

export default Controls;
