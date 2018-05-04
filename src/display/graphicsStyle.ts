import { GraphicsConfig } from '@config/GraphicsConfig';
import { GraphicsStyle } from '@config/GraphicsStyle';
import { SpriteConfig } from '@config/SpriteConfig';

/**
 * Graphics style from sprite and graphics config.
 * @param sprite Sprite config.
 * @param graphics Graphics config.
 */
export function graphicsStyle(sprite: SpriteConfig, graphics: GraphicsConfig): GraphicsStyle {
    return {
        fill: {
            color: sprite.color,
        },
        border: {
            color: sprite.border,
            width: graphics.width,
        },
    };
}
