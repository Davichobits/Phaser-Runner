import { MainGame } from './scenes/MainGame';
import { AUTO, Scale, Game } from 'phaser';

const config = {
    type: AUTO,
    width: 600,
    height: 300,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    scene: [
        MainGame, GameOver
    ],
    autoRound: false,
    parent: "game-container",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 350 },
            debug: true,
        },
    },
};

export default new Game(config);
