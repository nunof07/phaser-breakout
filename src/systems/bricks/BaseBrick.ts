import { gameObject } from '@display/gameObject';
import { TextGraphicSprite } from '@display/TextGraphicSprite';
import { Brick } from '@systems/bricks/Brick';

/**
 * Brick.
 */
export class BaseBrick implements Brick {
    private readonly graphics: TextGraphicSprite;
    private hp: number;

    constructor(graphics: TextGraphicSprite, hitpoints: number = 1) {
        this.graphics = graphics;
        this.hp = hitpoints;
    }

    public hitpoints(): number {
        return this.hp;
    }

    public hit(): this {
        if (this.hp > 0) {
            this.hp -= 1;
            this.graphics.updateText(this.hp.toString());

            if (this.hp <= 0) {
                this.destroy();
            }
        }

        return this;
    }

    public objects(): ReadonlyArray<Phaser.GameObjects.GameObject> {
        return [gameObject(this.sprite()), this.graphics.text()];
    }

    public sprite(): Phaser.Physics.Arcade.Sprite {
        return this.graphics.sprite();
    }

    public borderWidth(): number {
        return this.graphics.borderWidth();
    }

    public setup(scene: Phaser.Scene): this {
        this.graphics.setup(scene);
        this.graphics.updateText(this.hp.toString());
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
