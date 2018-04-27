/**
 * Camera config.
 */
export interface CameraConfig {
    readonly lowerBricksShake: {
        readonly duration: number;
        readonly intensity: number;
    };
    readonly powerupFlash: {
        readonly duration: number;
        readonly red: number;
        readonly green: number;
        readonly blue: number;
    };
}
