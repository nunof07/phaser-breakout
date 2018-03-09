import { System } from '@core/System';
import Phaser from 'phaser';

/**
 * Physics.
 */
export interface Physics extends System {
    collide(ball: Phaser.Physics.Arcade.Sprite, paddle: Phaser.Physics.Arcade.Sprite): this;
}