import { System } from '@core/System';
import { redrawSprite } from '@display/redrawSprite';
import Phaser from 'phaser';

/**
 * Draw graphics based on sprite.
 */
export class GraphicSprite implements System {
    private readonly graphics: Phaser.GameObjects.Graphics;
    private readonly sprite: Phaser.Physics.Arcade.Sprite;

    constructor(graphics: Phaser.GameObjects.Graphics, sprite: Phaser.Physics.Arcade.Sprite) {
        this.graphics = graphics;
        this.sprite = sprite;
    }

    public update(): this {
        redrawSprite(this.graphics, this.sprite);

        return this;
    }
}
