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
    sprite1: Phaser.Physics.Arcade.Sprite | Phaser.Physics.Arcade.Group | Phaser.Physics.Arcade.StaticGroup,
    sprite2: Phaser.Physics.Arcade.Sprite | Phaser.Physics.Arcade.Group | Phaser.Physics.Arcade.StaticGroup,
    hit?: (sprite1: Phaser.Physics.Arcade.Sprite, sprite2: Phaser.Physics.Arcade.Sprite) => void,
): void {
    factory.collider(
        // tslint:disable-next-line:no-any
        <Phaser.Physics.Arcade.Body><any>sprite1,
        // tslint:disable-next-line:no-any
        <Phaser.Physics.Arcade.Body><any>sprite2,
        // tslint:disable-next-line:no-empty
        hit ? hit : ((): void => {}),
        () => true,
        {},
    );
}
