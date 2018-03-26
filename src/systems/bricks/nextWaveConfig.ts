import { BrickConfig } from '@config/BrickConfig';
import { BricksConfig } from '@config/BricksConfig';
import { Brick } from '@systems/bricks/Brick';
import { nextWaveStartY } from '@systems/bricks/nextWaveStartY';
import { lensProp, set } from 'ramda';

/**
 * Get brick config for next wave
 * @param config Current config.
 * @param bricks Current bricks.
 */
export function nextWaveConfig(config: BrickConfig, bricks: ReadonlyArray<Brick>): BricksConfig {
    return set(
        lensProp('startY'),
        nextWaveStartY(bricks, config),
        config.bricks,
    );

}
