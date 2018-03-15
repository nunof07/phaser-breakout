import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { BaseBrick } from '@systems/bricks/BaseBrick';
import { Brick } from '@systems/bricks/Brick';

/**
 * Create a brick.
 * @param bricks Bricks config.
 * @param sprite Sprite config.
 * @param graphics Graphics config.
 * @param row Row index in grid.
 * @param column Column index in grid.
 */
export function createBrick(bricks: BricksConfig, sprite: SpriteConfig, graphics: GraphicsConfig, row: number, column: number): Brick {
    return new BaseBrick(
        new BaseGraphicSprite(
            {
                position: {
                    x: bricks.startX + column * sprite.size.width,
                    y: bricks.startY + row * sprite.size.height,
                },
                color: sprite.color,
                size: sprite.size,
            },
            graphics,
        ),
    );
}
