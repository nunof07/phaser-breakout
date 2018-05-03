import { BrickConfig } from '@config/BrickConfig';
import { Size } from '@display/Size';

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
    readonly explode: {
        readonly fillColor: number;
        readonly borderColor: number;
        readonly quantity: number;
        readonly size: Size;
        readonly speed: {
            readonly min: number;
            readonly max: number;
        };
        readonly lifespan: number;
        readonly gravity: number;
    };
}
