import { GameObjects } from 'phaser';

export class Player extends GameObjects.Rectangle {
  constructor(scene, x, y, color) {
    super(scene, x, y, 32, 32, color);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.body.collideWorldBounds = true;
  }
}