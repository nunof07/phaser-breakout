import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { Physics } from '@systems/physics/Physics';
import { System } from '@systems/System';

/**
 * Bricks;
 */
export interface Bricks extends System {
    group(): ReadonlyArray<Brick>;
    lower(scene: Phaser.Scene): this;
    addRow(physics: Physics): this;
    hit(ball: Ball, brick: Brick): this;
    reset(): this;
}
