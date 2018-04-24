import { Fx } from '@config/Fx';

/**
 * Audio config.
 */
export interface AudioConfig {
    readonly music: {
        readonly key: string;
        readonly urls: ReadonlyArray<string>;
        readonly volume: number;
    };
    readonly fx: {
        readonly ballCollide: Fx;
        readonly brickDestroy: Fx;
        readonly powerup: Fx;
        readonly loseLife: Fx;
        readonly gameOver: Fx;
        readonly countdownTick: Fx;
        readonly bricksWave: Fx;
    };
}
