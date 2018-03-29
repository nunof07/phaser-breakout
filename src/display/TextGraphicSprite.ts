import { TextConfig } from '@config/TextConfig';
import { GraphicSprite } from '@display/GraphicSprite';
import { Text } from '@display/Text';
import Phaser from 'phaser';

/**
 * Graphic sprite with text.
 */
export class TextGraphicSprite implements GraphicSprite, Text {
    private readonly gs: GraphicSprite;
    private readonly textConfig: TextConfig;
    private textObj: Phaser.GameObjects.Text;
    private isSetup: boolean;

    constructor(sprite: GraphicSprite, text: TextConfig) {
        this.gs = sprite;
        this.textConfig = text;
        this.isSetup = false;
    }

    public sprite(): Phaser.Physics.Arcade.Sprite {
        return this.gs.sprite();
    }

    public borderWidth(): number {
        return this.gs.borderWidth();
    }

    public destroy(): this {
        this.gs.destroy();
        this.textObj.setText('');
        this.textObj.destroy();

        return this;
    }

    public setup(scene: Phaser.Scene): this {
        if (this.isSetup) {
            return this;
        }
        this.gs.setup(scene);
        this.textObj = scene.add.text(this.sprite().x, this.sprite().y, '', this.textConfig);
        this.textObj.setOrigin(0.5, 0.5);
        this.isSetup = true;

        return this;
    }

    public update(): this {
        this.text().x = this.sprite().x;
        this.text().y = this.sprite().y;
        this.gs.update();

        return this;
    }

    public text(): Phaser.GameObjects.Text {
        return this.textObj;
    }

    public updateText(text: string): this {
        this.textObj.setText(text);

        return this;
    }
}
