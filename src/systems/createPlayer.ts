import { PlayerConfig } from '@config/PlayerConfig';
import { System } from '@core/System';
import { createGraphics } from '@display/createGraphics';
import { createPlayerSprite } from '@display/createPlayerSprite';
import { GraphicSprite } from '@display/GraphicSprite';
import Phaser from 'phaser';

/**
 * Create a player system.
 * @param scene Scene.
 * @param config Player config.
 */
export function createPlayer(scene: Phaser.Scene, config: PlayerConfig): System {
    return new GraphicSprite(
        createGraphics(scene.add, config.color),
        createPlayerSprite(scene, config),
    );
}
