import { BricksConfig } from '@config/BricksConfig';
import { Brick } from '@systems/bricks/Brick';
import { Bricks } from '@systems/bricks/Bricks';
import { lowerBrick } from '@systems/bricks/lowerBrick';
import { Composite } from '@systems/Composite';
import Phaser from 'phaser';
import { curry } from 'ramda';

/**
 * Bricks.
 */
export class BaseBricks implements Bricks {
    private readonly bricks: Composite<Brick>;
    private readonly scene: Phaser.Scene;
    private readonly config: BricksConfig;

    constructor(config: BricksConfig, bricks: Composite<Brick>, scene: Phaser.Scene) {
        this.config = config;
        this.bricks = bricks;
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
            curry(lowerBrick)(this.scene.tweens, this.config.lower),
        );

        return this;
    }
}
