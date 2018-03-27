import { TextConfig } from '@config/TextConfig';
import { gameHeight } from '@game/gameHeight';
import { gameWidth } from '@game/gameWidth';
import Phaser from 'phaser';

/**
 * Create text for game over screen
 * @param scene Scene.
 * @param text Text string.
 * @param config Text config.
 * @param depth Depth.
 */
export function createGameOverText(scene: Phaser.Scene, text: string, config: TextConfig, depth: number = 100): Phaser.GameObjects.Text {
    const x: number = gameWidth(scene.sys.game) * 0.5;
    const y: number = gameHeight(scene.sys.game) * 0.5;
    const result: Phaser.GameObjects.Text = scene.add.text(x, y, text, config);
    result.setOrigin(0.5, 0.5);
    result.visible = false;
    result.depth = depth;

    return result;
}
