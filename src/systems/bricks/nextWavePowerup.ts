import { BricksWaveConfig } from '@config/BricksWaveConfig';
import * as Random from 'random-js';

/**
 * Determine if brick for next wave is a powerup.
 * @param wave Wave config.
 * @param iteration Wave iteration.
 * @param engine Random engine.
 */
export function nextWavePowerup(
    wave: BricksWaveConfig,
    iteration: number,
    engine: Random.Engine = Random.engines.mt19937().autoSeed(),
): boolean {
    if (iteration < wave.powerup.minIteration) {
        return false;
    }

    return Random.bool(wave.powerup.factor)(engine);
}
