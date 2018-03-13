import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Draw graphics based on sprite.
 */
export interface GraphicSprite extends System {
    sprite(): Phaser.Physics.Arcade.Sprite;
    borderWidth(): number;
}
