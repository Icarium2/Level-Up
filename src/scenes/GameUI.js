import Phaser from 'phaser';

export default class GameUI extends Phaser.Scene {
  constructor() {
    super({ key: 'game-ui' });
  }

  preload() {
    //health ui
    this.load.image('ui-heart-empty', './assets/images/ui_heart_empty.png');
    this.load.image('ui-heart-full', './assets/images/ui_heart_full.png');
  }
  create() {
    this.hearts = this.add.group({
      classType: Phaser.GameObjects.Image,
    });
  }
  update() {
    this.hearts.createMultiple([
      {
        key: 'ui-heart-empty',
        setScale: {
          x: 5,
          y: 5,
        },
        setXY: {
          x: 50,
          y: 50,
          stepX: 80,
        },

        quantity: window.store.maxHP,
      },
      {
        key: 'ui-heart-full',
        setScale: {
          x: 5,
          y: 5,
        },
        setXY: {
          x: 50,
          y: 50,
          stepX: 80,
        },
        quantity: window.store.currentHP,
      },
    ]);
  }
}
