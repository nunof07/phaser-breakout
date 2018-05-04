import { GraphicsStyle } from '@config/GraphicsStyle';

/**
 * Graphics style from sprite and graphics config.
 * @param sprite Sprite config.
 * @param graphics Graphics config.
 */
export function graphicsStyle(sprite: { color: number, border: number }, graphics: { width: number }): GraphicsStyle {
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
