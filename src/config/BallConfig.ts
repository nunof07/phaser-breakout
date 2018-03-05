import { SpriteConfig } from '@config/SpriteConfig';

/**
 * Configuration for ball.
 */
export interface BallConfig extends SpriteConfig {
    readonly bounce: number;
}
