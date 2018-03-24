import { BrickConfig } from '@config/BrickConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { BaseBrick } from '@systems/bricks/BaseBrick';
import { Brick } from '@systems/bricks/Brick';

/**
 * Create a brick.
 * @param brick Brick config.
 * @param hitpoints Brick hitpoints.
 */
export function createBrick(brick: BrickConfig, hitpoints?: number): Brick {
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
        hitpoints,
    );
}
