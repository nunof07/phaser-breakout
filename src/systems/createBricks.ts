import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { BaseBricks } from '@systems/BaseBricks';
import { Bricks } from '@systems/Bricks';

/**
 * Create the bricks.
 * @param physics Arcade physics.
 */
export function createBricks(sprite: SpriteConfig, graphics: GraphicsConfig): Bricks {
    return new BaseBricks(Array(10).map(() => new BaseGraphicSprite(sprite, graphics)));
}
