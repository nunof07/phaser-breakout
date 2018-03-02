import { Position } from '@display/Position';
import Phaser from 'phaser';

/**
 * Position from sprite.
 * @param sprite Sprite.
 */
export function spritePosition(sprite: Phaser.Physics.Arcade.Sprite): Position {
    return {
        x: sprite.x,
        y: sprite.y,
    };
}
