import Phaser from 'phaser';

/**
 * Set the x coordinate on the sprite to follow the input pointer.
 * @param input Input.
 * @param sprite Sprite.
 */
export function followPointerMovementX(input: Phaser.Input.InputPlugin, sprite: Phaser.Physics.Arcade.Sprite): void {
    input.on('pointermove', (pointer: Phaser.Input.Pointer): void => {
        sprite.x = pointer.x;
    });
}
