import { startX } from '@display/startX';
import { startY } from '@display/startY';
import Phaser from 'phaser';

/**
 * Clear graphics and draw sprite.
 * @param graphics Graphics.
 * @param sprite Sprite.
 */
export function redrawSprite(graphics: Phaser.GameObjects.Graphics, sprite: Phaser.Physics.Arcade.Sprite): void {
    graphics.clear();
    graphics.strokeRect(startX(sprite), startY(sprite), sprite.displayWidth, sprite.displayHeight);
}
