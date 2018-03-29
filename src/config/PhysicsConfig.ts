import { BricksWaveConfig } from '@config/BricksWaveConfig';
import { Coordinates } from '@display/Coordinates';

/**
 * Configuration for physics.
 */
export interface PhysicsConfig {
    readonly launchVelocity: Coordinates;
    readonly collideVelocity: number;
    readonly bricksWave: BricksWaveConfig;
    readonly gameOverBrickLine: number;
}
