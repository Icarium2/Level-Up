import Phaser from 'phaser';

class TitleScreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'titleScreen',
    });
  }

  preload() {
    this.load.image('titleScreen', '/public/assets/images/title-screen.png');
    this.load.image(
      'controlsButton',
      '/public/assets/images/controls-button.png'
    );
    this.load.image(
      'controlsScreen',
      '/public/assets/images/controls-screen.png'
    );
    this.load.image('startGame', '/public/assets/images/start-game.png');
    this.load.audio('introMusic', '/public/assets/music/intro.wav');
  }

  create() {
    const titleScreen = this.add.image(800, 700, 'titleScreen').setScale(1.2);

    const introMusic = this.sound.add('introMusic');
    introMusic.autoplay = true;
    introMusic.play();

    let controlsButton = this.add.image(800, 950, 'controlsButton').setScale(2);

    controlsButton.setInteractive();
    controlsButton.on('pointerup', () => {
      this.scene.start('controls');
    });

    let playButton = this.add.image(800, 1050, 'startGame').setScale(2);

    playButton.setInteractive();
    playButton.on('pointerup', () => {
      this.scene.start('Game');
    });
  }
}
export default TitleScreen;
