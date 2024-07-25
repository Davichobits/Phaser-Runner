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
        // definir teclado
        this.SPACE = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.SPACE)) {
            this.jump();
        }
    }

    jump() {
        this.player.body.setVelocityY(-300);
    }
}
