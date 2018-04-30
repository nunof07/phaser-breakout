import Phaser from 'phaser';

/**
 * Create graphics.
 * @param factory Object factory.
 */
export function createGraphics(
    factory: Phaser.GameObjects.GameObjectFactory,
    fillColor: number,
    borderColor: number,
    borderWidth: number,
): Phaser.GameObjects.Graphics {
    return factory.graphics({
        fillStyle: {
            color: fillColor,
        },
        lineStyle: {
            width: borderWidth,
            color: borderColor,
        },
    });
}
