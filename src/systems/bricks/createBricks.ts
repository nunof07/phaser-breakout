import { BrickConfig } from '@config/BrickConfig';
import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { BaseMutableComposite } from '@systems/BaseMutableComposite';
import { BaseBricks } from '@systems/bricks/BaseBricks';
import { Bricks } from '@systems/bricks/Bricks';
import { nextWaveBricks } from '@systems/bricks/nextWaveBricks';

/**
 * Create the bricks.
 * @param physics Arcade physics.
 */
export function createBricks(bricks: BricksConfig, sprite: SpriteConfig, graphics: GraphicsConfig): Bricks {
    const config: BrickConfig = { bricks, sprite, graphics, row: 0, column: 0 };

    return new BaseBricks(config, new BaseMutableComposite(nextWaveBricks(config, [])));
}
