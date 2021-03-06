import { PhysicsConfig } from '@config/PhysicsConfig';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Physics.
 */
export interface Physics extends System {
    collide(ball: Phaser.Physics.Arcade.Sprite, paddle: Phaser.Physics.Arcade.Sprite): this;
    setupBrick(brick: Brick): this;
    config(): PhysicsConfig;
    onBallHitPaddle(callback: () => void): this;
    onBallHitBounds(callback: (ball: Ball, up: boolean, down: boolean, left: boolean, right: boolean) => void): this;
}
