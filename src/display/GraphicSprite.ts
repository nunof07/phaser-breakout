import { System } from '@core/System';
import { Position } from '@display/Position';
import { positionEqual } from '@display/positionEqual';
import { redrawSprite } from '@display/redrawSprite';
import { spritePosition } from '@display/spritePosition';
import Phaser from 'phaser';

/**
 * Draw graphics based on sprite.
 */
export class GraphicSprite implements System {
    private readonly graphics: Phaser.GameObjects.Graphics;
    private readonly sprite: Phaser.Physics.Arcade.Sprite;
    private previousPosition: Position;

    constructor(graphics: Phaser.GameObjects.Graphics, sprite: Phaser.Physics.Arcade.Sprite) {
        this.graphics = graphics;
        this.sprite = sprite;
        this.previousPosition = { x: -1, y: -1 };
    }

    public update(): this {
        if (!positionEqual(this.previousPosition, this.sprite)) {
            redrawSprite(this.graphics, this.sprite);
        }
        this.previousPosition = spritePosition(this.sprite);

        return this;
    }
}
