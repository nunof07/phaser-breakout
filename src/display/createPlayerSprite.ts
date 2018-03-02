import { PlayerConfig } from '@config/PlayerConfig';
import { createSprite } from '@display/createSprite';
import { followPointerMovementX } from '@input/followPointerMovementX';
import Phaser from 'phaser';

/**
 * Create a player sprite.
 * @param scene Scene.
 * @param config Player config.
 */
export function createPlayerSprite(scene: Phaser.Scene, config: PlayerConfig): Phaser.Physics.Arcade.Sprite {
    const sprite: Phaser.Physics.Arcade.Sprite = createSprite(scene.physics.add, config.position, config.size);
    sprite.setImmovable(true);
    followPointerMovementX(scene.input, sprite);

    return sprite;
}
