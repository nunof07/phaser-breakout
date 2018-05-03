import { BrickConfig } from '@config/BrickConfig';
import { ExplosionConfig } from '@config/ExplosionConfig';

/**
 * Config for visual effects.
 */
export interface EffectsConfig {
    readonly brick: BrickConfig;
    readonly flyDown: {
        readonly ease: string;
        readonly duration: number;
        readonly distance: number;
    };
    readonly explode: ExplosionConfig;
    readonly hit: ExplosionConfig;
}
