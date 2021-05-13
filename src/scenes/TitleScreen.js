import Phaser from 'phaser';
import Controls from './Controls';
import Game from './Game';

class TitleScreen extends Phaser.Scene {
  constructor() {
    super({
      key: 'titleScreen',
    });
  }

  preload() {
    this.load.image('titleScreen', '/src/assets/images/titleScreen.png');
    this.load.image('controlsButton', '/src/assets/images/controls-button.png');
    this.load.image('controlsScreen', '/src/assets/images/controls-screen.png');
    this.load.image('startGame', '/src/assets/images/start-game.png');

    this.load.audio('introMusic', '/src/assets/music/intro.wav');
  }

  create() {
    const titleScreen = this.add.image(400, 320, 'titleScreen').setScale(0.55);

    const introMusic = this.sound.add('introMusic');
    introMusic.autoplay = true;
    introMusic.play();

    let controlsButton = this.add
      .image(400, 430, 'controlsButton')
      .setScale(1.2);

    controlsButton.setInteractive();
    controlsButton.on('pointerup', () => {
      this.scene.start('controls');
    });

    let playButton = this.add.image(400, 500, 'startGame').setScale(1.2);

    playButton.setInteractive();
    playButton.on('pointerup', () => {
      this.scene.start('game');
    });
  }
}
export default TitleScreen;
