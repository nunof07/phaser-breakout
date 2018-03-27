import { TextConfig } from '@config/TextConfig';

/**
 * Game Over config.
 */
export interface GameOverConfig {
    readonly title: string;
    readonly text: TextConfig;
    readonly countdown: number;
}
