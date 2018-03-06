import { System } from '@core/System';
import { config } from '@src/config';
import { Ball } from '@systems/Ball';
import { createBall } from '@systems/createBall';
import { createPaddle } from '@systems/createPaddle';
import { Physics } from '@systems/Physics';
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
        this.systems = [
            createPaddle(config.paddle, config.graphics),
            ball,
            new Physics(config.physics, ball),
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
