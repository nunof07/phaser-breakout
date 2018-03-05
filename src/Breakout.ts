import { System } from '@core/System';
import { config } from '@src/config';
import { createBall } from '@systems/createBall';
import { createPaddle } from '@systems/createPaddle';
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
        this.systems = [
            createPaddle(config.paddle, config.graphics),
            createBall(config.ball, config.graphics),
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
