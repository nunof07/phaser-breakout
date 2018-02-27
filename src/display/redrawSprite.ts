import Phaser from 'phaser';

/**
 * Clear graphics and draw sprite.
 * @param graphics Graphics.
 * @param sprite Sprite.
 */
export function redrawSprite(graphics: Phaser.GameObjects.Graphics, sprite: Phaser.Physics.Arcade.Sprite): void {
    const startX: number = sprite.x - (sprite.displayWidth - (sprite.displayWidth - sprite.displayOriginX));
    const startY: number = sprite.y - (sprite.displayHeight - (sprite.displayHeight - sprite.displayOriginY));
    graphics.clear();
    graphics.strokeRect(startX, startY, sprite.displayWidth, sprite.displayHeight);
}
