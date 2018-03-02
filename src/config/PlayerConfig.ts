import { Position } from '@display/Position';
import { Size } from '@display/Size';

/**
 * Configuration for player.
 */
export interface PlayerConfig {
    readonly position: Position;
    readonly size: Size;
    readonly color: number;
}
