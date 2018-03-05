import { System } from '@core/System';
import { GraphicSprite } from '@display/GraphicSprite';
import { followPointerMovementX } from '@input/followPointerMovementX';

/**
 * Paddle.
 */
export class Paddle implements System {
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

    public update(): this {
        this.graphics.update();

        return this;
    }
}
