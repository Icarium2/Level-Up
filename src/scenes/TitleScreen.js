import Phaser from 'phaser';

class TitleScreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'titleScreen',
    });
  }

  preload() {
    this.load.image('titleScreen', './assets/images/title-screen.png');
    this.load.image('controlsButton', './assets/images/controls-button.png');
    this.load.image('controlsScreen', './assets/images/controls-screen.png');
    this.load.image('startGame', './assets/images/start-game.png');
    this.load.audio('introMusic', './assets/music/intro.wav');
  }

  create() {
    const titleScreen = this.add.image(400, 320, 'titleScreen').setScale(0.55);

    const introMusic = this.sound.add('introMusic');
    introMusic.autoplay = true;
    introMusic.play();

    let controlsButton = this.add.image(400, 450, 'controlsButton').setScale(1);

    controlsButton.setInteractive();
    controlsButton.on('pointerup', () => {
      this.scene.start('controls');
    });

    let playButton = this.add.image(400, 510, 'startGame').setScale(1);

    playButton.setInteractive();
    playButton.on('pointerup', () => {
      this.scene.start('Game');
    });
  }
}
export default TitleScreen;
