import { Brick } from '@systems/bricks/Brick';

/**
 * Game stats.
 */
export interface Stats {
    points(): number;
    hits(): number;
    bricks(): number;
    iteration(): number;
    duration(): number;
    pause(): this;
    resume(): this;
    addPoints(brick: Brick, add: number): this;
    addHit(brick: Brick): this;
    addIteration(): this;
    addBrick(brick: Brick): this;
    reset(): this;
}
