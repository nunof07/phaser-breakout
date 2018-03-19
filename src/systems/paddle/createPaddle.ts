import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { GraphicSprite } from '@display/GraphicSprite';
import { Paddle } from '@systems/paddle/Paddle';

/**
 * Create a paddle.
 * @param sprite Sprite configuration.
 * @param graphics Graphics configuration.
 */
export function createPaddle(sprite: SpriteConfig, graphics: GraphicsConfig): GraphicSprite {
    return new Paddle(new BaseGraphicSprite(sprite, graphics));
}
