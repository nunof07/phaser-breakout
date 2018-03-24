import { BrickConfig } from '@config/BrickConfig';
import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';

/**
 * Create brick config
 * @param bricks Bricks config.
 * @param sprite Sprite config.
 * @param graphics Graphics config.
 * @param n Brick index.
 */
export function brickConfig(bricks: BricksConfig, sprite: SpriteConfig, graphics: GraphicsConfig, n: number): BrickConfig {
    const row: number = Math.floor(n / bricks.columns);
    const column: number = n % bricks.columns;

    return { bricks, sprite, graphics, row, column };
}
