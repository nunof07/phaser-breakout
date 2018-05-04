import { ShakeConfig } from '@config/ShakeConfig';

/**
 * Camera config.
 */
export interface CameraConfig {
    readonly lowerBricks: ShakeConfig;
    readonly powerup: {
        readonly duration: number;
        readonly red: number;
        readonly green: number;
        readonly blue: number;
    };
    readonly gameOver: ShakeConfig;
}
