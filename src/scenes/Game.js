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

    // weapon rotated
    this.load.path = '/src/assets/sprite/';
    this.load.aseprite(
      'shuriken-rotated',
      'shuriken-rotated.png',
      'shuriken-rotated.json'
    );

    // enemy
    this.load.path = '/src/assets/sprite/';
    this.load.aseprite('enemy', 'enemy.png', 'enemy.json');
  }

  create() {
    // UI & controls
    this.scene.run('game-ui');
    this.cameras.main.setBounds(0, 0, 1600, 1600);
    this.cursors = this.input.keyboard.createCursorKeys();

    // music
    this.sound.get('introMusic').stop();
    const soundtrack = this.sound.add('soundtrack');
    soundtrack.autoplay = true;
    soundtrack.loop = true;
    soundtrack.play();

    // map
    const map = this.make.tilemap({
      key: 'map',
    });
    const tileset = map.addTilesetImage('catacombs', 'map_tiles');
    const mapProps = map.addTilesetImage('props', 'props');
    map.createLayer('wallsandfloor', tileset);
    map.createLayer('objects', mapProps);

    this.player = this.physics.add.sprite(70, 70, 'front');
    const enemy = this.physics.add.sprite(90, 100, 'enemy');

    // player sprite
    this.anims.createFromAseprite('sprite');
    this.player.play({ key: 'front' });
    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

    // Enemies
    this.anims.createFromAseprite('enemy');
    enemy.play('enemy-down', true);

    // Weapon
    this.anims.createFromAseprite('shuriken');
    this.weapon = this.add.sprite(100, 100, 'shuriken');
    this.weapon.play('throw-right', true);

    //weapon.play('throw-left', true);

    this.anims.createFromAseprite('shuriken-rotated');
    this.weapon2 = this.add.sprite(100, 100, 'shuriken-rotated');
    this.weapon2.play('throw-down', true);
    //weapon.play('throw-up', true);

    // -- Använda denna så att vapnet utgår från spriten
    //this.weapon.trackSprite(this.player, 0, 0);
    // -- Definera skjut-knapp
    //this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    this.physics.add.collider(this.player, enemy);
    console.log(this.player);
    console.log(enemy);
  }

  update() {
    //Player walk animation
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
  }
}

export default Game;
