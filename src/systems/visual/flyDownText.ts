import { EffectsConfig } from '@config/EffectsConfig';
import { Brick } from '@systems/bricks/Brick';
import { createFlyDownText } from '@systems/visual/createFlyDownText';
import Phaser from 'phaser';

/**
 * Create fly down animated text.
 * @param scene Scene.
 * @param config Effects config.
 * @param brick Brick.
 * @param points Points.
 */
export function flyDownText(scene: Phaser.Scene, config: EffectsConfig, brick: Brick, points: number): void {
    const text: Phaser.GameObjects.Text = createFlyDownText(scene, config.brick, brick, points);
    scene.tweens.add({
        targets: text,
        y: brick.sprite().y + config.flyDown.distance,
        alpha: 0,
        ease: config.flyDown.ease,
        duration: config.flyDown.duration,
        onComplete: (): void => {
            text.destroy();
        },
    });
}
