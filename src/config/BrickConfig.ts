import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';

/**
 * Brick configuration.
 */
export interface BrickConfig {
    readonly bricks: BricksConfig;
    readonly graphics: GraphicsConfig;
    readonly sprite: SpriteConfig;
    readonly row: number;
    readonly column: number;
}
