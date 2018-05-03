import { BrickConfig } from '@config/BrickConfig';
import { EffectsConfig } from '@config/EffectsConfig';
import { config } from '@src/config';

/**
 * Effects config.
 */
export function effectsConfig(brick: BrickConfig): EffectsConfig {
    return {
        brick,
        flyDown: config.effects.flyDown,
        explode: config.effects.explode,
    };
}
