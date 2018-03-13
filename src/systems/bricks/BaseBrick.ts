import { GraphicSprite } from '@display/GraphicSprite';
import { Brick } from '@systems/bricks/Brick';

/**
 * Brick.
 */
export class BaseBrick implements Brick {
    private readonly graphics: GraphicSprite;
    private hp: number;

    constructor(graphics: GraphicSprite, hitpoints: number = 1) {
        this.graphics = graphics;
        this.hp = hitpoints;
    }

    public hitpoints(): number {
        return this.hp;
    }

    public hit(): this {
        if (this.hp > 0) {
            this.hp -= 1;

            if (this.hp <= 0) {
                this.destroy();
            }
        }

        return this;
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

    public destroy(): this {
        this.hp = 0;
        this.graphics.destroy();

        return this;
    }
}
