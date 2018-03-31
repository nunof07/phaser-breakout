import { BrickConfig } from '@config/BrickConfig';
import { BricksWaveConfig } from '@config/BricksWaveConfig';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { Bricks } from '@systems/bricks/Bricks';
import { lowerBrick } from '@systems/bricks/lowerBrick';
import { nextWaveBricks } from '@systems/bricks/nextWaveBricks';
import { MutableComposite } from '@systems/MutableComposite';
import { Physics } from '@systems/physics/Physics';
import { Stats } from '@systems/score/Stats';
import Phaser from 'phaser';
import { curry } from 'ramda';

/**
 * Bricks.
 */
export class BaseBricks implements Bricks {
    private readonly bricks: MutableComposite<Brick>;
    private readonly config: BrickConfig;
    private readonly stats: Stats;
    private iteration: number;

    constructor(config: BrickConfig, bricks: MutableComposite<Brick>, stats: Stats) {
        this.config = config;
        this.bricks = bricks;
        this.iteration = 1;
        this.stats = stats;
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

    public hit(ball: Ball, brick: Brick): this {
        this.stats.addPoints(brick, brick.hit(ball));
        this.stats.addHit(brick);

        if (brick.hitpoints() <= 0) {
            this.bricks.remove(brick);
            this.stats.addBrick(brick);
        }

        return this;
    }

    public lower(scene: Phaser.Scene): this {
        const lower: (brick: Brick) => void = curry(lowerBrick)(scene.tweens, this.config.bricks.lower);
        this.bricks.systems().forEach(lower);

        return this;
    }

    public addRow(physics: Physics): this {
        this.iteration = this.iteration + 1;
        const wave: BricksWaveConfig = physics.config().bricksWave;
        const newBricks: ReadonlyArray<Brick> = nextWaveBricks(wave, this.iteration, this.config, this.bricks.systems());
        newBricks.forEach(
            (brick: Brick) => {
                this.bricks.add(brick);
                physics.setupBrick(brick);
            },
            this,
        );
        this.stats.addIteration();

        return this;
    }

    public reset(): this {
        this.bricks.systems().forEach((brick: Brick) => {
            this.bricks.remove(brick);
            brick.destroy();
        });
        this.iteration = 0;

        return this;
    }
}
