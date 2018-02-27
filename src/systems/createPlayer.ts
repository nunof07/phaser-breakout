import { Position } from '@core/Position';
import { Size } from '@core/Size';
import { System } from '@core/System';
import { createGraphics } from '@display/createGraphics';
import { createSprite } from '@display/createSprite';
import { GraphicSprite } from '@display/GraphicSprite';
import Phaser from 'phaser';

/**
 * Create a player attached to the pointer movement.
 */
export function createPlayer(
    scene: Phaser.Scene,
    config: {
        position: Position;
        size: Size;
        color: number;
    },
): System {
    const sprite: Phaser.Physics.Arcade.Sprite = createSprite(scene.physics.add, config.position, config.size);
    sprite.setImmovable(true);

    scene.input.on('pointermove', (pointer: Phaser.Input.Pointer): void => {
        sprite.x = pointer.x;
    });

    return new GraphicSprite(
        createGraphics(scene.add, config.color),
        sprite,
    );
}
