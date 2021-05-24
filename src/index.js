import Phaser from 'phaser';
import TitleScreen from './scenes/TitleScreen';
import Controls from './scenes/Controls';
import Game from './scenes/Game';
import GameUI from './scenes/GameUI';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [TitleScreen, Controls, Game, GameUI],
};
window.store = { currentHP: 3, maxHP: 3 };

const game = new Phaser.Game(config);
