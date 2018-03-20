import { Brick } from '@systems/bricks/Brick';
import Phaser from 'phaser';

/**
 * Lower brick.
 * @param config Tween config.
 * @param brick Brick.
 */
export function lowerBrick(
    tweens: Phaser.Tweens.TweenManager,
    config: { readonly ease: string; readonly duration: number },
    brick: Brick,
): Phaser.Tweens.Tween {
    return tweens.add({
        targets: brick.sprite(),
        y: brick.sprite().y + brick.sprite().displayHeight,
        ease: config.ease,
        duration: config.duration,
    });
}
