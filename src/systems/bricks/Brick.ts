import { GraphicSprite } from '@display/GraphicSprite';

/**
 * Brick.
 */
export interface Brick extends GraphicSprite {
    hitpoints(): number;
    hit(): this;
}
