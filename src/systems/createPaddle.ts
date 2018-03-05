import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { System } from '@core/System';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { Paddle } from '@systems/Paddle';

/**
 * Create a paddle.
 * @param sprite Sprite configuration.
 * @param graphics Graphics configuration.
 */
export function createPaddle(sprite: SpriteConfig, graphics: GraphicsConfig): System {
    return new Paddle(new BaseGraphicSprite(sprite, graphics));
}
