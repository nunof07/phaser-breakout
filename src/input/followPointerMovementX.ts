import Phaser from 'phaser';

/**
 * Set the x coordinate on the sprite to follow the input pointer.
 * @param input Input.
 * @param sprite Sprite.
 * @param condition Optional condition to validate follow.
 */
export function followPointerMovementX(
    input: Phaser.Input.InputPlugin,
    sprite: Phaser.Physics.Arcade.Sprite,
    condition: (pointer: Phaser.Input.Pointer) => boolean = (): boolean => true,
): void {
    input.on('pointermove', (pointer: Phaser.Input.Pointer): void => {
        if (condition(pointer)) {
            sprite.x = pointer.x;
        }
    });
}
