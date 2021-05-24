import Phaser, { LEFT } from 'phaser';

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

    // move path
    var url;
    url =
      'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexpathfollowerplugin.min.js';
    this.load.plugin('rexpathfollowerplugin', url, true);
  }

  create() {
    // UI & controls
    this.scene.run('game-ui');
    this.cameras.main.setBounds(0, 0, 1600, 1600);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

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

    // player sprite
    this.player = this.physics.add.sprite(70, 70, 'front');
    this.anims.createFromAseprite('sprite');
    this.player.play({ key: 'front' });
    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

    // Enemies
    this.anims.createFromAseprite('enemy');
    //enemy.play('enemy-right', true);

    // Enemy Path
    var path = this.add.path(70, 330).lineTo(300, 330);
    var graphics = this.add.graphics({
      // lineStyle: {
      //   width: 1,
      //   alpha: 1,
      // },
    });
    path.draw(graphics);

    var gameObject = this.physics.add.sprite(0, 0, 'enemy');
    gameObject.pathFollower = this.plugins
      .get('rexpathfollowerplugin')
      .add(gameObject, {
        path: path,
        t: 0,
      });

    this.tweens.add({
      targets: gameObject.pathFollower,
      t: 1,
      ease: 'Linear',
      duration: 4000,
      repeat: -1,
      yoyo: true,
    });
    // END

    // Weapon
    this.anims.createFromAseprite('shuriken');
    this.anims.createFromAseprite('shuriken-rotated');

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
    // Weapon animation
    if (this.spacebar.isDown && this.cursors.left._justDown) {
      this.weapon = this.add.sprite(
        this.player.x - 120,
        this.player.y,
        'shuriken'
      );
      this.weapon.play('throw-left', true);
    } else if (this.spacebar.isDown && this.cursors.right._justDown) {
      this.weapon = this.add.sprite(
        this.player.x + 120,
        this.player.y,
        'shuriken'
      );
      this.weapon.play('throw-right', true);
    } else if (this.spacebar.isDown && this.cursors.up._justDown) {
      this.weapon = this.add.sprite(
        this.player.x,
        this.player.y - 120,
        'shuriken-rotated'
      );
      this.weapon.play('throw-up', true);
    } else if (this.spacebar.isDown && this.cursors.down._justDown) {
      this.weapon = this.add.sprite(
        this.player.x,
        this.player.y + 120,
        'shuriken-rotated'
      );
      this.weapon.play('throw-down', true);
    }

    // Enemy path

    // END
  }
}

export default Game;
