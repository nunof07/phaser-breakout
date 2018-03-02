import Phaser from 'phaser';

/**
 * Leftmost x coordinate.
 * @param sprite Sprite
 */
export function startX(sprite: Phaser.Physics.Arcade.Sprite): number {
    return sprite.x - sprite.displayOriginX;
}
