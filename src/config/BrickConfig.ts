import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { TextConfig } from '@config/TextConfig';

/**
 * Brick configuration.
 */
export interface BrickConfig {
    readonly bricks: BricksConfig;
    readonly graphics: GraphicsConfig;
    readonly sprite: SpriteConfig;
    readonly text: TextConfig;
    readonly row?: number;
    readonly column?: number;
    readonly powerupColor: number;
    readonly powerupBorder: number;
}
