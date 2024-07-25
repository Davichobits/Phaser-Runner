import { MainGame } from './scenes/main-game';
import { AUTO, Scale, Game } from 'phaser';

const config = {
    type: AUTO, // Tipo de renderizado, si el ordenador soporta WebGL será esa la opción por defecto, caso contrario usa Canvas.
    width: 600,
    height: 300,
    scale: {
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH
    },
    autoRound: false, // para redondear las coordenadas de los objetos
    parent: 'game-container', // div donde se renderiza el juego
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 350 },
            debug: true,
        },
    },
    scene: [MainGame],
    backgroundColor: '#ffffff',
};

export default new Game(config);
