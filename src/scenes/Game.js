import Phaser from 'phaser';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
    this.lastDamageTaken = 0;
    this.shurikens;
  }

  //Taking damage and phasing out becoming unable to take dmg for 2 sec (when hit)
  takeDamage = () => {
    const currentTime = Date.now();
    if (currentTime > this.lastDamageTaken + 2000) {
      this.lastDamageTaken = currentTime;
      window.store.currentHP = window.store.currentHP - 1;
    }
    if (window.store.currentHP < 1) {
      this.scene.start('gameOver');
    }
  };

  enemyHit = (enemy, shuriken) => {
    enemy.disableBody(true, true);
    this.shurikens.remove(shuriken);
    shuriken.destroy();
  };

  preload() {
    // load music
    this.load.audio('soundtrack', './assets/music/soundtrack.wav');

    // load map
    this.load.image('map_tiles', './assets/images/mainlevbuild.png');
    this.load.image('props', './assets/images/decorative.png');
    this.load.tilemapTiledJSON('map', './assets/images/catacombs01.json');

    // load character sprites
    this.load.path = './assets/sprite/';
    this.load.aseprite('sprite', 'sprite.png', 'sprite.json');

    //load weapon
    this.load.image('star', 'star.png');

    // load enemy
    this.load.path = './assets/sprite/';
    this.load.aseprite('enemy', 'enemy.png', 'enemy.json');

    // move path
    let url;
    url =
      'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexpathfollowerplugin.min.js';
    this.load.plugin('rexpathfollowerplugin', url, true);
  }

  create() {
    // UI & controls
    this.scene.run('game-ui');
    this.cameras.main.setBounds(0, 0, 1600, 1600);
    this.cameras.main.setZoom(3);
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
    const tileset = map.addTilesetImage('catacomb', 'map_tiles');
    const mapProps = map.addTilesetImage('decorative', 'props');
    map.createLayer('floor', tileset);
    map.createLayer('props', mapProps);
    map.createLayer('objects', tileset);
    const walls = map.createLayer('walls', tileset);
    walls.setCollisionByProperty({ collides: true });

    // player sprite
    this.player = this.physics.add.sprite(240, 380, 'front');
    this.anims.createFromAseprite('sprite');
    this.player.play({ key: 'front' });
    this.player.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
    this.player.isThrowing = false;
    this.player.lastThrow = 0;
    this.player.setScale(0.5);

    // Enemies
    this.anims.createFromAseprite('enemy');

    // Paths
    var path = this.add.path(70, 500).lineTo(300, 500);
    var path2 = this.add.path(70, 700).lineTo(300, 700);
    var graphics = this.add.graphics({});
    path.draw(graphics);
    this.enemy = this.physics.add.sprite(0, 0, 'enemy');
    this.enemy.setCollideWorldBounds(true);
    this.enemy.pathFollower = this.plugins
      .get('rexpathfollowerplugin')
      .add(this.enemy, {
        path: path,
        path2,
        t: 0,
      });
    this.tweens.add({
      targets: this.enemy.pathFollower,
      t: 1,
      ease: 'Linear',
      duration: 4000,
      repeat: -1,
      yoyo: true,
    });

    // Weapon
    this.shurikens = this.physics.add.group();

    //Collision
    this.physics.add.collider(this.player, this.enemy, this.takeDamage);
    this.physics.add.collider(this.player, walls);
    this.physics.add.collider(this.enemy, walls);
    this.physics.add.collider(this.enemy, this.shurikens, this.enemyHit);
  }

  update(time) {
    if (time > this.cooldown) {
      this.player.isThrowing = false;
    }

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

    //Weapon animation
    if (
      this.spacebar.isDown &&
      this.cursors.left._justDown &&
      this.player.isThrowing == false
    ) {
      this.weapon = this.add.sprite(this.player.x, this.player.y, 'star');
      this.weapon.setScale(0.02);
      this.shurikens.add(this.weapon);
      this.weapon.body.velocity.x = -160;
      this.player.isThrowing = true;
      this.cooldown = time + 400;
    } else if (
      this.spacebar.isDown &&
      this.cursors.right._justDown &&
      this.player.isThrowing == false
    ) {
      this.weapon = this.add.sprite(this.player.x, this.player.y, 'star');
      this.weapon.setScale(0.02);
      this.shurikens.add(this.weapon);
      this.weapon.body.velocity.x = 160;
      this.player.isThrowing = true;
      this.cooldown = time + 400;
    } else if (
      this.spacebar.isDown &&
      this.cursors.up._justDown &&
      this.player.isThrowing == false
    ) {
      this.weapon = this.add.sprite(this.player.x, this.player.y, 'star');
      this.weapon.setScale(0.02);
      this.shurikens.add(this.weapon);
      this.weapon.body.velocity.y = -160;
      this.player.isThrowing = true;
      this.cooldown = time + 400;
    } else if (
      this.spacebar.isDown &&
      this.cursors.down._justDown &&
      this.player.isThrowing == false
    ) {
      this.weapon = this.add.sprite(this.player.x, this.player.y, 'star');
      this.weapon.setScale(0.02);
      this.shurikens.add(this.weapon);
      this.weapon.body.velocity.y = 160;
      this.player.isThrowing = true;
      this.cooldown = time + 400;
    }
  }
}

export default Game;
