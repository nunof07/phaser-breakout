import { Coordinates } from '@display/Coordinates';

/**
 * Configuration for physics.
 */
export interface PhysicsConfig {
    readonly launchVelocity: Coordinates;
    readonly collideVelocity: number;
    readonly bricksWave: {
        readonly delay: number;
        readonly count: number;
    };
}
