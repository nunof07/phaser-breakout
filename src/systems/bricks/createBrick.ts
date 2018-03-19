import { BrickConfig } from '@config/BrickConfig';
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
export function createBrick(brick: BrickConfig): Brick {
    return new BaseBrick(
        new BaseGraphicSprite(
            {
                position: {
                    x: brick.bricks.startX + brick.column * brick.sprite.size.width,
                    y: brick.bricks.startY + brick.row * brick.sprite.size.height,
                },
                color: brick.sprite.color,
                size: brick.sprite.size,
            },
            brick.graphics,
        ),
    );
}
