import { Brick } from '@systems/bricks/Brick';
import { Stats } from '@systems/score/Stats';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Game stats.
 */
export class BaseStats implements Stats, System {
    private pointsImp: number;
    private hitsImp: number;
    private iterationImp: number;
    private durationImp: number;
    private bricksImp: number;
    private timer: Phaser.Time.TimerEvent;

    constructor() {
        this.reset();
        this.iterationImp = 1;
    }

    public points(): number {
        return this.pointsImp;
    }

    public hits(): number {
        return this.hitsImp;
    }

    public iteration(): number {
        return this.iterationImp;
    }

    public bricks(): number {
        return this.bricksImp;
    }

    public duration(): number {
        return this.durationImp;
    }

    public pause(): this {
        this.timer.paused = true;

        return this;
    }

    public resume(): this {
        this.timer.paused = false;

        return this;
    }

    public addPoints(brick: Brick, add: number): this {
        if (!brick.isPowerup()) {
            this.pointsImp = this.pointsImp + add;
        }

        return this;
    }

    public addHit(brick: Brick): this {
        if (!brick.isPowerup()) {
            this.hitsImp = this.hitsImp + 1;
        }

        return this;
    }

    public addIteration(): this {
        this.iterationImp = this.iterationImp + 1;

        return this;
    }

    public addBrick(brick: Brick): this {
        if (brick.isPowerup()) {
            return this;
        }
        this.bricksImp = this.bricksImp + 1;

        return this;
    }

    public reset(): this {
        this.pointsImp = 0;
        this.hitsImp = 0;
        this.iterationImp = 0;
        this.durationImp = 0;
        this.bricksImp = 0;

        if (this.timer !== undefined) {
            this.timer.reset(this.timerConfig());
        }

        return this;
    }

    public setup(scene: Phaser.Scene): this {
        this.timer = scene.time.addEvent(this.timerConfig());
        this.pause();

        return this;
    }

    public update(): this {
        return this;
    }

    private timerConfig(): object {
        return {
            delay: 1000,
            loop: true,
            callback: (): void => {
                this.durationImp = this.durationImp + 1;
            },
        };
    }
}
