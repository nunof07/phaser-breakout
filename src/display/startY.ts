import Phaser from 'phaser';

/**
 * Topmost y coordinate.
 * @param sprite Sprite
 */
export function startY(sprite: Phaser.Physics.Arcade.Sprite): number {
    return sprite.y - sprite.displayOriginY;
}
