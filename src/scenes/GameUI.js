import Phaser from 'phaser';

export default class GameUI extends Phaser.Scene {
  constructor() {
    super({ key: 'game-ui' });
  }

  preload() {
    //health ui
    this.load.image('ui-heart-empty', '/src/assets/images/ui_heart_empty.png');
    this.load.image('ui-heart-full', '/src/assets/images/ui_heart_full.png');
  }
  create() {
    const hearts = this.add.group({
      classType: Phaser.GameObjects.Image,
    });

    hearts.createMultiple({
      key: 'ui-heart-full',
      setXY: {
        x: 10,
        y: 10,
        stepX: 16,
      },
      quantity: 3,
    });
  }
}