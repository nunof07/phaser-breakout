import { TextConfig } from '@config/TextConfig';
import { Coordinates } from '@display/Coordinates';

/**
 * Game Over config.
 */
export interface GameOverConfig {
    readonly title: string;
    readonly text: TextConfig;
    readonly countdown: number;
    readonly position: Coordinates;
}
