import { BrickConfig } from '@config/BrickConfig';

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
}
