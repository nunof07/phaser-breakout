import { Coordinates } from '@display/Coordinates';
import Phaser from 'phaser';

/**
 * Position from sprite.
 * @param sprite Sprite.
 */
export function spritePosition(sprite: Phaser.Physics.Arcade.Sprite): Coordinates {
    return {
        x: sprite.x,
        y: sprite.y,
    };
}
