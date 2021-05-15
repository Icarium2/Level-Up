import Phaser from 'phaser';
import TitleScreen from './TitleScreen';

class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'Game' });
  }

  preload() {
    this.load.image('map_tiles', '/src/assets/images/cave.png');
    this.load.tilemapTiledJSON('map', '/src/assets/images/cave01.json');
  }

  create() {
    const map = this.make.tilemap({ key: 'map' });
    const tileset = map.addTilesetImage('cave', 'map_tiles');
    map.createStaticLayer('ground', tileset);
    map.createStaticLayer('walls', tileset);
    map.createStaticLayer('extra', tileset);
  }
}

export default Game;
