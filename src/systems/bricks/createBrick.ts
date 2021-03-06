import { BrickConfig } from '@config/BrickConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { TextGraphicSprite } from '@display/TextGraphicSprite';
import { BaseBrick } from '@systems/bricks/BaseBrick';
import { Brick } from '@systems/bricks/Brick';
import { brickTextConfig } from '@systems/bricks/brickTextConfig';

/**
 * Create a brick.
 * @param brick Brick config.
 * @param hitpoints Brick hitpoints.
 */
export function createBrick(brick: BrickConfig, hitpoints?: number, isPowerup: boolean = false): Brick {
    const column: number = typeof brick.column === 'number' ? brick.column : 0;
    const row: number = typeof brick.row === 'number' ? brick.row : 0;
    const color: number = isPowerup ? brick.powerupColor : brick.sprite.color;
    const border: number = isPowerup ? brick.powerupBorder : brick.sprite.border;

    return new BaseBrick(
        new TextGraphicSprite(
            new BaseGraphicSprite(
                {
                    position: {
                        x: brick.bricks.startX + column * brick.sprite.size.width,
                        y: brick.bricks.startY + row * brick.sprite.size.height,
                    },
                    color,
                    size: brick.sprite.size,
                    border,
                },
                brick.graphics,
            ),
            brickTextConfig(brick, isPowerup),
        ),
        hitpoints,
        isPowerup,
    );
}
