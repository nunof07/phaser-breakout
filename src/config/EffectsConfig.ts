import { BrickConfig } from '@config/BrickConfig';
import { ExplosionConfig } from '@config/ExplosionConfig';
import { TextConfig } from '@config/TextConfig';

/**
 * Config for visual effects.
 */
export interface EffectsConfig {
    readonly brick: BrickConfig;
    readonly flyDown: {
        readonly ease: string;
        readonly duration: number;
        readonly distance: number;
        readonly text: TextConfig;
    };
    readonly explode: ExplosionConfig;
    readonly hit: ExplosionConfig;
}
