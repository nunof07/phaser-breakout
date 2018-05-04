import { EffectsConfig } from '@config/EffectsConfig';
import { createText } from '@display/createText';
import { Brick } from '@systems/bricks/Brick';
import Phaser from 'phaser';

/**
 * Create text for fly down animation.
 * @param scene Scene.
 * @param config Brick config.
 * @param brick Brick.
 * @param points Points.
 */
export function createFlyDownText(scene: Phaser.Scene, config: EffectsConfig, brick: Brick, points: number): Phaser.GameObjects.Text {
    return createText(scene, {
        text: points.toString(),
        config: config.flyDown.text,
        position: brick.sprite(),
        center: true,
    });
}
