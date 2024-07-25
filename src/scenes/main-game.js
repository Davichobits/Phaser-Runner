import { Scene } from 'phaser';
import { Player } from '../game-objects/player';

export class MainGame extends Scene {
    constructor() {
        super('Game');
        this.player = null;
    }

    preload() {

    }

    create() {
        this.player = new Player(this, 100, 100, 0x000000);
    }
}
