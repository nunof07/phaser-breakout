import Phaser from 'phaser';

/**
 * Text.
 */
export interface Text {
    text(): Phaser.GameObjects.Text;
    updateText(text: string): this;
}
