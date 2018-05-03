import { Size } from '@display/Size';

/**
 * Config explosion.
 */
export interface ExplosionConfig {
    readonly fillColor: number;
    readonly borderColor: number;
    readonly borderWidth: number;
    readonly quantity: number;
    readonly size: Size;
    readonly speed: {
        readonly min: number;
        readonly max: number;
    };
    readonly lifespan: number;
    readonly gravity: number;
}
