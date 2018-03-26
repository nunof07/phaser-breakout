import { BrickConfig } from '@config/BrickConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { TextGraphicSprite } from '@display/TextGraphicSprite';
import { BaseBrick } from '@systems/bricks/BaseBrick';
import { Brick } from '@systems/bricks/Brick';

/**
 * Create a brick.
 * @param brick Brick config.
 * @param hitpoints Brick hitpoints.
 */
export function createBrick(brick: BrickConfig, hitpoints?: number): Brick {
    const column: number = typeof brick.column === 'number' ? brick.column : 0;
    const row: number = typeof brick.row === 'number' ? brick.row : 0;

    return new BaseBrick(
        new TextGraphicSprite(
            new BaseGraphicSprite(
                {
                    position: {
                        x: brick.bricks.startX + column * brick.sprite.size.width,
                        y: brick.bricks.startY + row * brick.sprite.size.height,
                    },
                    color: brick.sprite.color,
                    size: brick.sprite.size,
                },
                brick.graphics,
            ),
            brick.text,
        ),
        hitpoints,
    );
}
