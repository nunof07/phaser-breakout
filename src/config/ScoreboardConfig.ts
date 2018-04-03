import { TextConfig } from '@config/TextConfig';
import { Coordinates } from '@display/Coordinates';

/**
 * Scoreboard config.
 */
export interface ScoreboardConfig {
    readonly highScore: TextConfig;
    readonly details: TextConfig;
    readonly position: {
        readonly points: Coordinates;
        readonly hits: Coordinates;
        readonly bricks: Coordinates;
        readonly iteration: Coordinates;
        readonly duration: Coordinates;
    };
    points(value: number): string;
    hits(value: number): string;
    bricks(value: number): string;
    iteration(value: number): string;
    duration(value: string): string;
}
