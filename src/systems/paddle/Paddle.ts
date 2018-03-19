import { GraphicSprite } from '@display/GraphicSprite';
import { followPointerMovementX } from '@input/followPointerMovementX';

/**
 * Paddle.
 */
export class Paddle implements GraphicSprite {
    private readonly graphics: GraphicSprite;

    constructor(graphics: GraphicSprite) {
        this.graphics = graphics;
    }

    public setup(scene: Phaser.Scene): this {
        this.graphics.setup(scene);
        this.graphics.sprite().setImmovable(true);
        followPointerMovementX(scene.input, this.graphics.sprite());

        return this;
    }

    public sprite(): Phaser.Physics.Arcade.Sprite {
        return this.graphics.sprite();
    }

    public borderWidth(): number {
        return this.graphics.borderWidth();
    }

    public update(): this {
        this.graphics.update();

        return this;
    }

    public destroy(): this {
        this.graphics.destroy();

        return this;
    }
}
