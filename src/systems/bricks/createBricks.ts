import { BrickConfig } from '@config/BrickConfig';
import { BricksWaveConfig } from '@config/BricksWaveConfig';
import { BaseMutableComposite } from '@systems/BaseMutableComposite';
import { BaseBricks } from '@systems/bricks/BaseBricks';
import { Bricks } from '@systems/bricks/Bricks';
import { nextWaveBricks } from '@systems/bricks/nextWaveBricks';

/**
 * Create the bricks.
 * @param wave Wave config.
 * @param brick Brick config.
 */
export function createBricks(wave: BricksWaveConfig, brick: BrickConfig): Bricks {
    return new BaseBricks(brick, new BaseMutableComposite(nextWaveBricks(wave, 1, brick, [])));
}
