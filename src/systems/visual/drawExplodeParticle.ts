import { Coordinates } from '@display/Coordinates';
import { Size } from '@display/Size';
import Phaser from 'phaser';

/**
 * Draw explosion particle.
 * @param graphics Graphics.
 * @param position Position.
 * @param size Size
 */
export function drawExplodeParticle(graphics: Phaser.GameObjects.Graphics, position: Coordinates, size: Size): void {
    const startX: number = position.x - size.width * 0.5;
    const startY: number = position.y - size.height * 0.5;
    graphics.fillRect(startX, startY, size.width, size.height);
    graphics.strokeRect(startX, startY, size.width, size.height);
}
