import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { BaseComposite } from '@systems/BaseComposite';
import { BaseBricks } from '@systems/bricks/BaseBricks';
import { Bricks } from '@systems/bricks/Bricks';
import { createBrickN } from '@systems/bricks/createBrickN';
import Phaser from 'phaser';
import { times } from 'ramda';

/**
 * Create the bricks.
 * @param physics Arcade physics.
 */
export function createBricks(
    scene: Phaser.Scene,
    bricks: BricksConfig,
    sprite: SpriteConfig,
    graphics: GraphicsConfig,
): Bricks {
    return new BaseBricks(
        bricks,
        new BaseComposite(
            times(
                createBrickN(bricks, sprite, graphics),
                bricks.rows * bricks.columns,
            ),
        ),
        scene,
    );
}
