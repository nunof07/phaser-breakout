import { PhysicsConfig } from '@config/PhysicsConfig';
import { System } from '@core/System';
import { Ball } from '@systems/Ball';

/**
 * Physics.
 */
export class Physics implements System {
    private readonly ball: Ball;
    private readonly config: PhysicsConfig;

    constructor(config: PhysicsConfig, ball: Ball) {
        this.config = config;
        this.ball = ball;
    }

    public setup(scene: Phaser.Scene): this {
        scene.input.on('pointerup', () => {
            if (!this.ball.isInPlay()) {
                this.ball.launch(this.config.launchVelocity);
            }
        });

        return this;
    }

    public update(): this {
        return this;
    }
}
