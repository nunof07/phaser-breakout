import { config } from '@src/config';
import Phaser from 'phaser';

/**
 * Create graphics.
 * @param factory Object factory.
 */
export function createGraphics(
    factory: Phaser.GameObjects.GameObjectFactory,
    color: number,
    width: number = config.graphics.width,
): Phaser.GameObjects.Graphics {
    return factory.graphics({
        lineStyle: {
            width,
            color,
        },
    });
}
