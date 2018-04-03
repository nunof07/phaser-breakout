import { TextConfig } from '@config/TextConfig';
import { Coordinates } from '@display/Coordinates';
import { createText } from '@display/createText';
import Phaser from 'phaser';

/**
 * Create text for game over screen
 * @param scene Scene.
 * @param config Text config.
 * @param position Position.
 * @param depth Depth.
 */
export function createScoreboardText(
    scene: Phaser.Scene,
    config: TextConfig,
    position: Coordinates,
    depth: number = 100,
): Phaser.GameObjects.Text {
    return createText(
        scene,
        {
            position,
            visible: false,
            depth,
            text: '',
            config,
        },
    );
}
