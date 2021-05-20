import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    // map
    this.load.image('map_tiles', '/src/assets/images/mainlevbuild.png');
    this.load.image('props', '/src/assets/images/decorative.png');
    this.load.tilemapTiledJSON('map', '/src/assets/images/dungeon3.json');

    // sprites
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
    map.createLayer('wallsandfloor', tileset);
    map.createLayer('objects', mapProps);

    this.cameras.main.setBounds(0, 0, 1600, 1600);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.player = this.physics.add.sprite(70, 70, 'front');

    // Sprite
    this.anims.createFromAseprite('sprite');
    this.player.play({ key: 'front' });
    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

    //Health Bar

    let healthBar = this.makeBar(140, 100, 0x2ecc71);
    this.setValue(healthBar, 100);
  }

  makeBar(x, y, color) {
    //draw
    let bar = this.add.graphics();

    //color
    bar.fillStyle(color, 1);

    //fill
    bar.fillRect(0, 0, 200, 50);

    //position
    bar.x = 10;
    bar.y = 10;
    return bar;
  }
  setValue(bar, percentage) {
    //scale
    bar.scaleX = percentage / 100;
  }
  update() {
    this.player.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-100);
      this.player.play({ key: 'left' });
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(100);
      this.player.play({ key: 'right' });
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-100);
      this.player.play({ key: 'back' });
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(100);
      this.player.play({ key: 'front' });
    }
  }
}

export default Game;
