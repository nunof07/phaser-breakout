import { BrickConfig } from '@config/BrickConfig';
import { createText } from '@display/createText';
import { textConfig } from '@display/textConfig';
import { Brick } from '@systems/bricks/Brick';
import Phaser from 'phaser';

/**
 * Create text for fly down animation.
 * @param scene Scene.
 * @param config Brick config.
 * @param brick Brick.
 * @param points Points.
 */
export function createFlyDownText(scene: Phaser.Scene, config: BrickConfig, brick: Brick, points: number): Phaser.GameObjects.Text {
    return createText(scene, {
        text: points.toString(),
        config: textConfig(config.text, brick.isPowerup() ? config.powerupColor : config.sprite.color),
        position: brick.sprite(),
        center: true,
    });
}
