import { gameObject } from '@display/gameObject';
import { TextGraphicSprite } from '@display/TextGraphicSprite';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';

/**
 * Brick.
 */
export class BaseBrick implements Brick {
    private readonly graphics: TextGraphicSprite;
    private readonly isPowerupImp: boolean;
    private hp: number;

    constructor(graphics: TextGraphicSprite, hitpoints: number = 1, isPowerup: boolean = false) {
        this.graphics = graphics;
        this.hp = hitpoints;
        this.isPowerupImp = isPowerup;
    }

    public hitpoints(): number {
        return this.hp;
    }

    public hit(ball: Ball): number {
        if (this.hp > 0) {
            if (this.isPowerupImp) {
                const result: number = this.hp;
                ball.updateHitpoints(ball.hitpoints() + this.hp);
                this.updateHp(0);

                return result;
            } else {
                const result: number = (ball.hitpoints() > this.hp ? this.hp : ball.hitpoints());
                this.updateHp(this.hp - ball.hitpoints());

                return result;
            }
        }

        return 0;
    }

    public isPowerup(): boolean {
        return this.isPowerupImp;
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

    private updateHp(hitpoints: number): this {
        this.hp = hitpoints;
        this.graphics.updateText(this.hp.toString());

        if (this.hp <= 0) {
            this.destroy();
        }

        return this;
    }
}
