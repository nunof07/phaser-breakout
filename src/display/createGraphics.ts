import { GraphicsStyle } from '@config/GraphicsStyle';
import Phaser from 'phaser';

/**
 * Create graphics.
 * @param factory Object factory.
 */
export function createGraphics(factory: Phaser.GameObjects.GameObjectFactory, style: GraphicsStyle): Phaser.GameObjects.Graphics {
    return factory.graphics({
        fillStyle: {
            color: style.fill.color,
        },
        lineStyle: {
            width: style.border.width,
            color: style.border.color,
        },
    });
}
