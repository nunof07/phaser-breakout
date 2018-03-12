import { GraphicSprite } from '@display/GraphicSprite';
import { sprites } from '@display/sprites';
import Phaser from 'phaser';

/**
 * Collide two sprites.
 * @param factory Factory.
 * @param sprite1 Sprite 1.
 * @param sprite2 Sprite 2.
 * @param hit Hit callback
 */
export function addCollider(
    factory: Phaser.Physics.Arcade.Factory,
    sprite1: GraphicSprite | ReadonlyArray<GraphicSprite>,
    sprite2: GraphicSprite | ReadonlyArray<GraphicSprite>,
    hit?: (sprite1: Phaser.Physics.Arcade.Sprite, sprite2: Phaser.Physics.Arcade.Sprite) => void,
): void {
    factory.collider(
        // tslint:disable-next-line:no-any
        <Phaser.Physics.Arcade.Body><any>sprites(sprite1),
        // tslint:disable-next-line:no-any
        <Phaser.Physics.Arcade.Body><any>sprites(sprite2),
        // tslint:disable-next-line:no-empty
        hit ? hit : ((): void => {}),
        () => true,
        {},
    );
}
