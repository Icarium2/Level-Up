import Phaser from 'phaser';

class Controls extends Phaser.Scene {
  constructor() {
    super({ key: 'controls' });
  }

  preload() {
    this.load.image('controls', '/src/assets/images/controls-screen.png');
  }

  create() {
    const controls = this.add.image(400, 320, 'controls').setScale(0.55);
    controls.setInteractive();
    controls.on('pointerup', () => {
      this.scene.start('titleScreen');
    });
  }
}

export default Controls;
