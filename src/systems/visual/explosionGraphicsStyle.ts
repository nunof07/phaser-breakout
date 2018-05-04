import { ExplosionConfig } from '@config/ExplosionConfig';
import { GraphicsStyle } from '@config/GraphicsStyle';

/**
 * Graphics style from explosion config.
 * @param config Explosion config.
 */
export function explosionGraphicsStyle(config: ExplosionConfig): GraphicsStyle {
    return {
        fill: {
            color: config.fillColor,
        },
        border: {
            color: config.borderColor,
            width: config.borderWidth,
        },
    };
}
