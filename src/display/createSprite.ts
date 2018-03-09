import { Coordinates } from '@display/Coordinates';
import { Size } from '@display/Size';
import Phaser from 'phaser';

/**
 * Create a sprite.
 * @param factory Object factory.
 * @param position Sprite position.
 * @param size Sprite size.
 * @param texture Sprite texture.
 */
export function createSprite(
    factory: Phaser.Physics.Arcade.Factory,
    position: Coordinates,
    size: Size,
    texture: string,
): Phaser.Physics.Arcade.Sprite {
    const sprite: Phaser.Physics.Arcade.Sprite = factory.sprite(position.x, position.y, texture);
    sprite.setScale(size.width, size.height);
    sprite.setOrigin(size.width * 0.5, size.height * 0.5);

    return sprite;
}
