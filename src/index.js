import Phaser from 'phaser';
import TitleScreen from './scenes/TitleScreen';
import Controls from './scenes/Controls';
import Game from './scenes/Game';
import GameUI from './scenes/GameUI';
import GameOver from './scenes/GameOver';

const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1200,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [TitleScreen, Controls, Game, GameUI, GameOver],
};
window.store = { currentHP: 3, maxHP: 3 };

const game = new Phaser.Game(config);
