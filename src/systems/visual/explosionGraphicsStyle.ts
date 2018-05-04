import { ExplosionConfig } from '@config/ExplosionConfig';
import { GraphicsStyle } from '@config/GraphicsStyle';
import { graphicsStyle } from '@display/graphicsStyle';

/**
 * Graphics style from explosion config.
 * @param config Explosion config.
 */
export function explosionGraphicsStyle(config: ExplosionConfig): GraphicsStyle {
    return graphicsStyle({ color: config.fillColor, border: config.borderColor}, { width: config.borderWidth });
}
