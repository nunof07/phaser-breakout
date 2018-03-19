import { gameWidth } from '@game/gameWidth';
import Phaser from 'phaser';
import { clamp } from 'ramda';

/**
 * Set the x coordinate on the sprite to follow the input pointer.
 * @param input Input.
 * @param sprite Sprite.
 * @param condition Optional condition to validate follow.
 */
export function followPointerMovementX(
    input: Phaser.Input.InputPlugin,
    sprite: Phaser.Physics.Arcade.Sprite,
    keepInBounds: boolean = false,
    condition: (pointer: Phaser.Input.Pointer) => boolean = (): boolean => true,
): void {
    input.on('pointermove', (pointer: Phaser.Input.Pointer): void => {
        if (condition(pointer)) {
            sprite.x = keepInBounds
                ? clamp(sprite.displayOriginX, gameWidth(input.systems.game) - sprite.displayOriginX, pointer.x)
                : pointer.x;
        }
    });
}
