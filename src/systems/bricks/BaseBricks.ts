import { BaseComposite } from '@systems/BaseComposite';
import { Brick } from '@systems/bricks/Brick';
import { Bricks } from '@systems/bricks/Bricks';
import Phaser from 'phaser';

/**
 * Bricks.
 */
export class BaseBricks implements Bricks {
    private readonly bricks: BaseComposite<Brick>;
    private readonly scene: Phaser.Scene;

    constructor(bricks: ReadonlyArray<Brick>, scene: Phaser.Scene) {
        this.bricks = new BaseComposite(bricks);
        this.scene = scene;
    }

    public group(): ReadonlyArray<Brick> {
        return this.bricks.systems();
    }

    public setup(scene: Phaser.Scene): this {
        this.bricks.setup(scene);

        return this;
    }

    public update(): this {
        this.bricks.update();

        return this;
    }

    public lower(): this {
        this.bricks.systems().forEach(
            (brick: Brick): void => {
                this.scene.tweens.add({
                    targets: brick.sprite(),
                    y: brick.sprite().y + brick.sprite().displayHeight,
                    ease: 'linear',
                    duration: 250,
                });
            },
            this,
        );

        return this;
    }
}
