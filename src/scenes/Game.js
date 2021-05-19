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

    // weapon
    this.load.path = '/src/assets/sprite/';
    this.load.aseprite('shuriken', 'shuriken.png', 'shuriken.json');

    // enemy
    this.load.path = '/src/assets/sprite/';
    this.load.aseprite('enemy', 'enemy.png', 'enemy.json');
  }

  create() {
    const map = this.make.tilemap({
      key: 'map',
    });
    const tileset = map.addTilesetImage('catacombs', 'map_tiles');
    const mapProps = map.addTilesetImage('props', 'props');
    map.createLayer('wallsandfloor', tileset);
    map.createLayer('objects', mapProps);

<<<<<<< HEAD
    // Camera
    this.cameras.main.setBounds(0, 0, 3300, 1600);
=======
    this.cameras.main.setBounds(0, 0, 1600, 1600);
>>>>>>> a550ab51ebb8d0d6b29a69a37d8dcbe47a8ac1d8
    this.cursors = this.input.keyboard.createCursorKeys();

    // Sprite
    this.anims.createFromAseprite('sprite');
<<<<<<< HEAD
    this.player = this.physics.add.sprite(70, 70, 'front');
    this.player.play({ key: 'front', repeat: -1 });

=======
    this.player.play({ key: 'front' });
    this.player.setCollideWorldBounds(true);
>>>>>>> a550ab51ebb8d0d6b29a69a37d8dcbe47a8ac1d8
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    this.player.setCollideWorldBounds(true);

    // Enemies
    const enemy = this.add.sprite(90, 100, 'enemy');
  }

  update() {
    this.player.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.play('left', true);
      this.player.setVelocityX(-100);
<<<<<<< HEAD
=======
      this.player.play({ key: 'left' });
>>>>>>> a550ab51ebb8d0d6b29a69a37d8dcbe47a8ac1d8
    } else if (this.cursors.right.isDown) {
      this.player.play('right', true);
      this.player.setVelocityX(100);
<<<<<<< HEAD
=======
      this.player.play({ key: 'right' });
>>>>>>> a550ab51ebb8d0d6b29a69a37d8dcbe47a8ac1d8
    } else if (this.cursors.up.isDown) {
      this.player.play('up', true);
      this.player.setVelocityY(-100);
<<<<<<< HEAD
=======
      this.player.play({ key: 'back' });
>>>>>>> a550ab51ebb8d0d6b29a69a37d8dcbe47a8ac1d8
    } else if (this.cursors.down.isDown) {
      this.player.play('down', true);
      this.player.setVelocityY(100);
<<<<<<< HEAD
=======
      this.player.play({ key: 'front' });
>>>>>>> a550ab51ebb8d0d6b29a69a37d8dcbe47a8ac1d8
    }
  }
}

export default Game;
