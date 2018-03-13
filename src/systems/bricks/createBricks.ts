import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { BaseBrick } from '@systems/bricks/BaseBrick';
import { BaseBricks } from '@systems/bricks/BaseBricks';
import { Brick } from '@systems/bricks/Brick';
import { Bricks } from '@systems/bricks/Bricks';

/**
 * Create the bricks.
 * @param physics Arcade physics.
 */
export function createBricks(bricks: BricksConfig, sprite: SpriteConfig, graphics: GraphicsConfig): Bricks {
    const sprites: ReadonlyArray<Brick> = [].concat.apply(
        [],
        Array.from({ length: bricks.rows }, (_r: {}, row: number) =>
            Array.from({ length: bricks.columns }, (_c: {}, column: number) =>
                new BaseBrick(
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
                ),
            ),
        ),
    );

    return new BaseBricks(sprites);
}
