import { BrickConfig } from '@config/BrickConfig';
import { Brick } from '@systems/bricks/Brick';
import { highestY } from '@systems/bricks/highestY';

/**
 * Start Y for next wave of bricks.
 * @param bricks Bricks.
 * @param config Brick config.
 */
export function nextWaveStartY(bricks: ReadonlyArray<Brick>, config: BrickConfig): number {
    return highestY(bricks, config.bricks.startY) - config.sprite.size.height;
}
