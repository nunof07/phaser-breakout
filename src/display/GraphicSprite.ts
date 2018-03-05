import { System } from '@core/System';
import Phaser from 'phaser';

/**
 * Draw graphics based on sprite.
 */
export interface GraphicSprite extends System {
    sprite(): Phaser.Physics.Arcade.Sprite;
}
