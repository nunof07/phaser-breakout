import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { createGraphics } from '@display/createGraphics';
import { createSprite } from '@display/createSprite';
import { GraphicSprite } from '@display/GraphicSprite';
import { Position } from '@display/Position';
import { positionEqual } from '@display/positionEqual';
import { redrawSprite } from '@display/redrawSprite';
import { spritePosition } from '@display/spritePosition';
import Phaser from 'phaser';

/**
 * Draw graphics based on sprite.
 */
export class BaseGraphicSprite implements GraphicSprite {
    private readonly config: SpriteConfig;
    private readonly graphics: GraphicsConfig;
    private graphicsObj: Phaser.GameObjects.Graphics;
    private spriteObj: Phaser.Physics.Arcade.Sprite;
    private previousPosition: Position;

    constructor(sprite: SpriteConfig, graphics: GraphicsConfig) {
        this.config = sprite;
        this.graphics = graphics;
        this.previousPosition = { x: -1, y: -1 };
    }

    public setup(scene: Phaser.Scene): this {
        this.graphicsObj = createGraphics(scene.add, this.config.color, this.graphics.width);
        this.spriteObj = createSprite(scene.physics.add, this.config.position, this.config.size, this.graphics.texture.key);

        return this;
    }

    public update(): this {
        if (!positionEqual(this.previousPosition, this.spriteObj)) {
            redrawSprite(this.graphicsObj, this.spriteObj);
        }
        this.previousPosition = spritePosition(this.spriteObj);

        return this;
    }

    public sprite(): Phaser.Physics.Arcade.Sprite {
        return this.spriteObj;
    }
}
