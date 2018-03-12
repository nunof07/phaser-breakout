import { GraphicSprite } from '@display/GraphicSprite';
import { Brick } from '@systems/Brick';

/**
 * Brick.
 */
export class BaseBrick implements Brick {
    private readonly graphics: GraphicSprite;

    constructor(graphics: GraphicSprite) {
        this.graphics = graphics;
    }

    public hitpoints(): number {
        return 1;
    }

    public sprite(): Phaser.Physics.Arcade.Sprite {
        return this.graphics.sprite();
    }

    public borderWidth(): number {
        return this.graphics.borderWidth();
    }

    public setup(scene: Phaser.Scene): this {
        this.graphics.setup(scene);
        this.graphics.sprite().setImmovable(true);

        return this;
    }

    public update(): this {
        this.graphics.update();

        return this;
    }
}
