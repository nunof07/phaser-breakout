import { System } from '@core/System';
import { GraphicSprite } from '@display/GraphicSprite';
import { config } from '@src/config';
import { Ball } from '@systems/Ball';
import { BasePhysics } from '@systems/BasePhysics';
import { createBall } from '@systems/createBall';
import { createPaddle } from '@systems/createPaddle';
import { Referee } from '@systems/Referee';
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
        this.systems = [
            paddle,
            ball,
            new BasePhysics(config.physics, ball, paddle),
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
