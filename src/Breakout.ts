import { GraphicSprite } from '@display/GraphicSprite';
import { config } from '@src/config';
import { Ball } from '@systems/ball/Ball';
import { createBall } from '@systems/ball/createBall';
import { Bricks } from '@systems/bricks/Bricks';
import { createBricks } from '@systems/bricks/createBricks';
import { createPaddle } from '@systems/paddle/createPaddle';
import { BasePhysics } from '@systems/physics/BasePhysics';
import { Referee } from '@systems/referee/Referee';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Breakout game.
 */
export class Breakout extends Phaser.Scene {
    private systems: ReadonlyArray<System>;

    public preload(): void {
        this.load.image(config.graphics.texture.key, config.graphics.texture.url);
    }

    public create(): void {
        const ball: Ball = createBall(config.ball, config.graphics);
        const paddle: GraphicSprite = createPaddle(config.paddle, config.graphics);
        const bricks: Bricks = createBricks(config.bricks, config.brick, config.graphics);
        this.systems = [
            paddle,
            ball,
            bricks,
            new BasePhysics(config.physics, ball, paddle, bricks),
            new Referee(config.game, config.physics, ball, paddle),
        ];
        this.systems.forEach((system: System) => {
            system.setup(this);
        });
    }

    public update(): void {
        this.systems.forEach((system: System) => {
            system.update();
        });
    }
}
