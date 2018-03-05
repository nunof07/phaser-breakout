import { Position } from '@display/Position';
import { Size } from '@display/Size';

/**
 * Configuration for a sprite.
 */
export interface SpriteConfig {
    readonly position: Position;
    readonly size: Size;
    readonly color: number;
}
