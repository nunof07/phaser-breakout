import { BaseComposite } from '@systems/BaseComposite';
import { Brick } from '@systems/bricks/Brick';
import { Bricks } from '@systems/bricks/Bricks';
import Phaser from 'phaser';

/**
 * Bricks.
 */
export class BaseBricks implements Bricks {
    private readonly bricks: BaseComposite<Brick>;

    constructor(bricks: ReadonlyArray<Brick>) {
        this.bricks = new BaseComposite(bricks);
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
}
