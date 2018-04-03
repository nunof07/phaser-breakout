import { TextDisplay } from '@display/TextDisplay';
import Phaser from 'phaser';

/**
 * Create text.
 * @param scene Scene.
 * @param text Text.
 */
export function createText(scene: Phaser.Scene, text: TextDisplay): Phaser.GameObjects.Text {
    const result: Phaser.GameObjects.Text = scene.add.text(text.position.x, text.position.y, text.text, text.config);

    if (text.center) {
        result.setOrigin(0.5, 0.5);
    }

    if (text.visible !== undefined) {
        result.visible = text.visible;
    }

    if (text.depth !== undefined) {
        result.depth = text.depth;
    }

    return result;
}
