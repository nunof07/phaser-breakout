import { BrickConfig } from '@config/BrickConfig';
import { BricksConfig } from '@config/BricksConfig';
import { BricksWaveConfig } from '@config/BricksWaveConfig';
import { randomUniqueArray } from '@src/randomUniqueArray';
import { Brick } from '@systems/bricks/Brick';
import { createBrickN } from '@systems/bricks/createBrickN';
import { nextWaveConfig } from '@systems/bricks/nextWaveConfig';
import { nextWaveCount } from '@systems/bricks/nextWaveCount';
import { times } from 'ramda';
import * as Random from 'random-js';

/**
 * Create bricks for next wave.
 * @param config Current config.
 * @param bricks Current bricks.
 */
export function nextWaveBricks(
    wave: BricksWaveConfig,
    iteration: number,
    config: BrickConfig,
    bricks: ReadonlyArray<Brick>,
): ReadonlyArray<Brick> {
    const nextConfig: BricksConfig = nextWaveConfig(config, bricks);
    const engine: Random.Engine = Random.engines.mt19937().autoSeed();
    const nextCount: number = nextWaveCount(wave, iteration, config, engine);
    const randomColumns: ReadonlyArray<number> = randomUniqueArray(nextCount, 0, config.bricks.columns, engine);

    return times(
        (n: number): Brick => createBrickN(nextConfig, config.sprite, config.graphics, randomColumns[n]),
        randomColumns.length,
    );
}
