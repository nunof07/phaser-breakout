import { TextConfig } from '@config/TextConfig';
import { Coordinates } from '@display/Coordinates';
import { Size } from '@display/Size';

/**
 * Game Over config.
 */
export interface GameOverConfig {
    readonly title: string;
    readonly text: TextConfig;
    readonly countdown: number;
    readonly position: Coordinates;
    readonly background: {
        readonly color: number;
        readonly position: Coordinates;
        readonly size: Size;
    };
}
