import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { BaseBrick } from '@systems/BaseBrick';
import { BaseBricks } from '@systems/BaseBricks';
import { Bricks } from '@systems/Bricks';

/**
 * Create the bricks.
 * @param physics Arcade physics.
 */
export function createBricks(sprite: SpriteConfig, graphics: GraphicsConfig): Bricks {
    return new BaseBricks(
        Array.from({ length: 10 }, (_v: {}, i: number) =>
            new BaseBrick(new BaseGraphicSprite(
                {
                    position: {
                        x: (i + 1) * (32),
                        y: sprite.position.y,
                    },
                    color: sprite.color,
                    size: sprite.size,
                },
                graphics,
            ))),
    );
}
