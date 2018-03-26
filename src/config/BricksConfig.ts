/**
 * Bricks configuration.
 */
export interface BricksConfig {
    readonly startX: number;
    readonly startY: number;
    readonly columns: number;
    readonly lower: {
        readonly ease: string;
        readonly duration: number;
    };
}
