import { config } from '@src/config';
import { createBall } from '@systems/ball/createBall';
import { BaseComposite } from '@systems/BaseComposite';
import { createBricks } from '@systems/bricks/createBricks';
import { GameEntities } from '@systems/GameEntities';
import { createPaddle } from '@systems/paddle/createPaddle';
import { BasePhysics } from '@systems/physics/BasePhysics';
import { Referee } from '@systems/referee/Referee';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Breakout game.
 */
export class Breakout extends Phaser.Scene {
    private systems: BaseComposite<System>;

    public preload(): void {
        this.load.image(config.graphics.texture.key, config.graphics.texture.url);
    }

    public create(): void {
        const entities: GameEntities = {
            ball: createBall(config.ball, config.graphics),
            paddle: createPaddle(config.paddle, config.graphics),
            bricks: createBricks(this, config.bricks, config.brick, config.graphics),
        };
        this.systems = new BaseComposite([
            entities.paddle,
            entities.ball,
            entities.bricks,
            new BasePhysics(config.physics, entities),
            new Referee(config.game, config.physics, entities),
        ]);
        this.systems.setup(this);
    }

    public update(): void {
        this.systems.update();
    }
}
