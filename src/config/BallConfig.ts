import { SpriteConfig } from '@config/SpriteConfig';

/**
 * Configuration for ball.
 */
export interface BallConfig extends SpriteConfig {
    readonly bounce: number;
    readonly startHitpoints: number;
    readonly loseLifePercentage: number;
    readonly text: {
        readonly fontSize: number;
        readonly fontFamily: string;
    };
}
