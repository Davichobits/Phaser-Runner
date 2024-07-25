import { Scene } from 'phaser';
import { Player } from '../game-objects/player';

export class MainGame extends Scene {
    constructor() {
        super('Game');
        this.player = null;

    }

    preload() {
        this.load.audio("coin", "assets/sounds/coin.mp3");
        this.load.audio("jump", "assets/sounds/jump.mp3");
        this.load.audio("dead", "assets/sounds/dead.mp3");
        this.load.audio("theme", "assets/sounds/theme.mp3");
    }

    create() {
        this.player = new Player(this, 100, 100, 0x000000);
        // definir teclado
        this.SPACE = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );
        // definir sonido
        this.loadAudios();
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.SPACE)) {
            this.jump();
            this.playAudio("jump");
        }
    }

    jump() {
        this.player.body.setVelocityY(-300);
    }
    loadAudios() {
        this.audios = {
            jump: this.sound.add("jump"),
            coin: this.sound.add("coin"),
            dead: this.sound.add("dead"),
        };
    }
    playAudio(key) {
        this.audios[key].play();
    }
}
