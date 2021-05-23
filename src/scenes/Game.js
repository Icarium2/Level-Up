import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    // music
    this.load.audio('soundtrack', '/src/assets/music/soundtrack.wav');

    // map
    this.load.image('map_tiles', '/src/assets/images/mainlevbuild.png');
    this.load.image('props', '/src/assets/images/decorative.png');
    this.load.tilemapTiledJSON('map', '/src/assets/images/dungeon3.json');

    // character sprites
    this.load.path = '/src/assets/sprite/';
    this.load.aseprite('sprite', 'sprite.png', 'sprite.json');

    // weapon
    this.load.path = '/src/assets/sprite/';
    this.load.aseprite('shuriken', 'shuriken.png', 'shuriken.json');

    // enemy
    this.load.path = '/src/assets/sprite/';
    this.load.aseprite('enemy', 'enemy.png', 'enemy.json');

    //health ui
    this.load.image('heart-empty', '/src/assets/images/ui_heart_empty.png');
    this.load.image('heart-full', '/src/assets/images/ui_heart_full.png');
  }

  create() {
    // music
    this.sound.get('introMusic').stop();

    const soundtrack = this.sound.add('soundtrack');
    soundtrack.autoplay = true;
    soundtrack.loop = true;
    soundtrack.play();

    const map = this.make.tilemap({
      key: 'map',
    });
    const tileset = map.addTilesetImage('catacombs', 'map_tiles');
    const mapProps = map.addTilesetImage('props', 'props');
    map.createLayer('wallsandfloor', tileset);
    map.createLayer('objects', mapProps);

    this.player = this.physics.add.sprite(70, 70, 'front');

    this.cameras.main.setBounds(0, 0, 1600, 1600);
    this.cursors = this.input.keyboard.createCursorKeys();

    // Sprite
    this.anims.createFromAseprite('sprite');
    this.player.play({ key: 'front' });
    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

    // Enemies
    const enemy = this.add.sprite(90, 100, 'enemy');

    // Weapon
    this.anims.createFromAseprite('shuriken');
    this.weapon = this.add.sprite(100, 100, 'shuriken');
    //this.weapon.play('throw-left', true);
    this.weapon.play('throw-right', true);

    // -- Använda denna så att vapnet utgår från spriten
    //weapon.trackSprite(sprite, 14, 0);
    // -- Definera skjut-knapp
    //fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);

    this.anims.createFromAseprite('shuriken-rotated');
    // kan ej använda weapon två ggr. döp om!
    //this.weapon = this.add.sprite(100, 100, 'shuriken-rotated');
    //this.weapon.play('throw-up', true);
    //this.weapon.play('throw-down', true);
  }

  update() {
    //Walk animation
    this.player.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.play('left', true);
      this.player.setVelocityX(-100);
    } else if (this.cursors.right.isDown) {
      this.player.play('right', true);
      this.player.setVelocityX(100);
    } else if (this.cursors.up.isDown) {
      this.player.play('up', true);
      this.player.setVelocityY(-100);
    } else if (this.cursors.down.isDown) {
      this.player.play('down', true);
      this.player.setVelocityY(100);
    }
    //Throw weapon
  }
}

export default Game;
