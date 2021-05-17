import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    this.load.image('map_tiles', '/src/assets/images/mainlevbuild.png');
    this.load.image('props', '/src/assets/images/decorative.png');
    this.load.tilemapTiledJSON('map', '/src/assets/images/dungeon3.json');

    // sprite
    this.load.path = '/src/assets/sprite/';
    this.load.aseprite('sprite', 'sprite.png', 'sprite.json');

    this.load.atlas(
      'sprite',
      '/src/assets/sprite/sprite.png',
      '/src/assets/sprite/sprite.json'
    );
  }

  create() {
    const map = this.make.tilemap({
      key: 'map',
    });
    const tileset = map.addTilesetImage('catacombs', 'map_tiles');
    const mapProps = map.addTilesetImage('props', 'props');
    map.createStaticLayer('wallsandfloor', tileset);
    map.createStaticLayer('objects', mapProps);

    this.cameras.main.setBounds(0, 0, 800, 600);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = this.physics.add.sprite(70, 70, 'front');

    // Sprite
    this.anims.createFromAseprite('sprite');
    this.player.play({ key: 'front', repeat: -1 });
    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
  }

  update() {
    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-100);
      this.player.play({ key: 'side-left', repeat: -1 });
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
      this.player.play({ key: 'side-right', repeat: -1 });
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-100);
      this.player.play({ key: 'back', repeat: -1 });
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(100);
      this.player.play({ key: 'front', repeat: -1 });
    }
  }
}

export default Game;
