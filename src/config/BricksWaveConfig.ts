/**
 * Configuration for Bricks wave.
 */
export interface BricksWaveConfig {
    readonly delay: number;
    readonly maxDifficultyIteration: number;
    readonly minColumnsFactor: number;
    readonly maxMinColumnsFactor: number;
    readonly hitpointsRangeFactor: number;
    readonly powerup: {
        readonly minIteration: number;
        readonly factor: number;
        readonly hitpointFactor: number;
    };
}
