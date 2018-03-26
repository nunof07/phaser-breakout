import { BrickConfig } from '@config/BrickConfig';
import { BricksWaveConfig } from '@config/BricksWaveConfig';
import * as Random from 'random-js';

/**
 * Number of bricks for next wave.
 * @param iteration Iteration.
 * @param config Brick config.
 * @param engine Random engine.
 */
export function nextWaveCount(
    wave: BricksWaveConfig,
    iteration: number,
    config: BrickConfig,
    engine: Random.Engine = Random.engines.mt19937().autoSeed(),
): number {
    /**
     * Iteration that produces the highest probability of maxium bricks.
     */
    const maxIteration: number = wave.maxDifficultyIteration;

    /**
     * How much weight this iteration has.
     */
    const iterationFactor: number = Math.min(1, (iteration / maxIteration));

    /**
     * Maximum possible value for start of range.
     */
    const maxStartRange: number = Math.min(
        Math.floor(iterationFactor * config.bricks.columns * wave.maxMinColumnsFactor),
        config.bricks.columns,
    );

    /**
     * Determine start of range.
     */
    const startRange: number = Random.integer(1, maxStartRange)(engine);

    /**
     * Amount of slots left to fill all columns.
     */
    const rangeLeft: number = config.bricks.columns - startRange;

    /**
     * Maximum possible for end of range.
     */
    const maxEndRange: number = Math.max(1, Math.ceil(iterationFactor * rangeLeft));

    /**
     * Determine end of range.
     */
    const endRange: number = startRange + Random.integer(1, maxEndRange)(engine);

    /**
     * Determine random number between range.
     */
    return Random.integer(startRange, endRange)(engine);
}
