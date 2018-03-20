import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { BaseMutableComposite } from '@systems/BaseMutableComposite';
import { BaseBricks } from '@systems/bricks/BaseBricks';
import { Bricks } from '@systems/bricks/Bricks';
import { createBrickN } from '@systems/bricks/createBrickN';
import { times } from 'ramda';

/**
 * Create the bricks.
 * @param physics Arcade physics.
 */
export function createBricks(
    bricks: BricksConfig,
    sprite: SpriteConfig,
    graphics: GraphicsConfig,
): Bricks {
    return new BaseBricks(
        { bricks, sprite, graphics, row: 0, column: 0 },
        new BaseMutableComposite(
            times(
                createBrickN(bricks, sprite, graphics),
                bricks.rows * bricks.columns,
            ),
        ),
    );
}
