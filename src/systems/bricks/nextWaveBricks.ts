import { BrickConfig } from '@config/BrickConfig';
import { BricksWaveConfig } from '@config/BricksWaveConfig';
import { randomUniqueArray } from '@src/randomUniqueArray';
import { Brick } from '@systems/bricks/Brick';
import { brickConfig } from '@systems/bricks/brickConfig';
import { createBrick } from '@systems/bricks/createBrick';
import { nextWaveConfig } from '@systems/bricks/nextWaveConfig';
import { nextWaveCount } from '@systems/bricks/nextWaveCount';
import { nextWaveHitpoints } from '@systems/bricks/nextWaveHitpoints';
import { times } from 'ramda';
import * as Random from 'random-js';

/**
 * Create bricks for next wave.
 * @param wave Wave config.
 * @param iteration Iteration.
 * @param config Current config.
 * @param bricks Current bricks.
 */
export function nextWaveBricks(
    wave: BricksWaveConfig,
    iteration: number,
    config: BrickConfig,
    bricks: ReadonlyArray<Brick>,
): ReadonlyArray<Brick> {
    const engine: Random.Engine = Random.engines.mt19937().autoSeed();
    const nextCount: number = nextWaveCount(wave, iteration, config, engine);
    const randomColumns: ReadonlyArray<number> = randomUniqueArray(nextCount, 0, config.bricks.columns, engine);
    const brick: BrickConfig = {
        bricks: nextWaveConfig(config, bricks),
        sprite: config.sprite,
        graphics: config.graphics,
        text: config.text,
    };

    return times(
        (n: number): Brick => createBrick(
            brickConfig(brick, randomColumns[n]),
            nextWaveHitpoints(wave, iteration, engine),
        ),
        randomColumns.length,
    );
}