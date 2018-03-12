import { GraphicSprite } from '@display/GraphicSprite';
import Phaser from 'phaser';

/**
 * Array of Phaser sprites from one or more graphic sprites.
 * @param sprite Sprite or sprite array.
 */
export function sprites(sprite: GraphicSprite | ReadonlyArray<GraphicSprite>): ReadonlyArray<Phaser.Physics.Arcade.Sprite> {
    return (
        Array.isArray(sprite) ? sprite : [sprite]
    ).map((s: GraphicSprite) => s.sprite());
}
