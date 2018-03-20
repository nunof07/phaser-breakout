import { BrickConfig } from '@config/BrickConfig';
import { BricksConfig } from '@config/BricksConfig';
import { Brick } from '@systems/bricks/Brick';
import { Bricks } from '@systems/bricks/Bricks';
import { createBrickN } from '@systems/bricks/createBrickN';
import { lowerBrick } from '@systems/bricks/lowerBrick';
import { nextWaveStartY } from '@systems/bricks/nextWaveStartY';
import { MutableComposite } from '@systems/MutableComposite';
import { Physics } from '@systems/physics/Physics';
import Phaser from 'phaser';
import { curry, lensProp, set, times } from 'ramda';

/**
 * Bricks.
 */
export class BaseBricks implements Bricks {
    private readonly bricks: MutableComposite<Brick>;
    private readonly config: BrickConfig;

    constructor(config: BrickConfig, bricks: MutableComposite<Brick>) {
        this.config = config;
        this.bricks = bricks;
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

    public hit(brick: Brick): this {
        brick.hit();

        if (brick.hitpoints() <= 0) {
            this.bricks.remove(brick);
        }

        return this;
    }

    public lower(scene: Phaser.Scene): this {
        const lower: (brick: Brick) => void = curry(lowerBrick)(scene.tweens, this.config.bricks.lower);
        this.bricks.systems().forEach(lower);

        return this;
    }

    public add(count: number, physics: Physics): this {
        const bricks: BricksConfig = set(
            lensProp('startY'),
            nextWaveStartY(this.bricks.systems(), this.config),
            this.config.bricks,
        );
        const createBrick: (n: number) => Brick = createBrickN(bricks, this.config.sprite, this.config.graphics);
        const newBricks: ReadonlyArray<Brick> = times(createBrick, count);
        newBricks.forEach(
            (brick: Brick) => {
                this.bricks.add(brick);
                physics.setupBrick(brick);
            },
            this,
        );

        return this;
    }
}
