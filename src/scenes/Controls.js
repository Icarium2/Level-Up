import Phaser from 'phaser';

class Controls extends Phaser.Scene {
  constructor() {
    super({ key: 'controls' });
  }

  preload() {
    this.load.image('controls', './assets/images/controls-screen.png');
  }

  create() {
    const controls = this.add.image(800, 600, 'controls').setScale(1);
    controls.setInteractive();
    controls.on('pointerup', () => {
      this.scene.start('titleScreen');
    });
  }
}

export default Controls;
