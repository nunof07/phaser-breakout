import { BricksWaveConfig } from '@config/BricksWaveConfig';
import * as Random from 'random-js';

/**
 * Determine hitpoints for brick.
 * @param wave Wave config.
 * @param iteration Wave iteration.
 * @param engine Random engine.
 */
export function nextWaveHitpoints(
    wave: BricksWaveConfig,
    iteration: number,
    powerup: boolean,
    engine: Random.Engine = Random.engines.mt19937().autoSeed(),
): number {
    /**
     * Weight for current iteration (from 0% to 100%).
     */
    const iterationFactor: number = Math.min(1, iteration / wave.maxDifficultyIteration);

    /**
     * Maximum hitpoint difference for current iteration.
     */
    const range: number = iteration * wave.hitpointsRangeFactor;

    /**
     * Offset for min/max possible hitpoints.
     */
    const offset: number = iterationFactor * range;

    /**
     * Minimum possible hitpoints.
     * Never less than one.
     */
    const minHp: number = Math.floor(Math.max(1, iteration - range + offset));

    /**
     * Maximum possible hitpoints.
     * At least equal to the minimum hitpoints plus one.
     */
    const maxHp: number = Math.ceil(Math.max(minHp + 1, minHp + range));

    /**
     * Determine hitpoints randomly between min/max possible hitpoints.
     */
    const hitpoints: number = Random.integer(minHp, maxHp)(engine);

    if (powerup) {
        return Math.max(1, Math.round(wave.powerup.hitpointFactor * hitpoints));
    }

    return hitpoints;
}
