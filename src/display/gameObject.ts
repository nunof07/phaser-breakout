import Phaser from 'phaser';

/**
 * Sprite as game object.
 * @param sprite Sprite.
 */
export function gameObject(sprite: Phaser.Physics.Arcade.Sprite): Phaser.GameObjects.GameObject {
    // tslint:disable-next-line:no-any
    return <Phaser.GameObjects.GameObject><any>sprite;
}
