import { Coordinates } from '@display/Coordinates';
import { Size } from '@display/Size';

/**
 * Configuration for a sprite.
 */
export interface SpriteConfig {
    readonly position: Coordinates;
    readonly size: Size;
    readonly color: number;
}
