import { PhysicsConfig } from '@config/PhysicsConfig';
import { GraphicSprite } from '@display/GraphicSprite';
import { addCollider } from '@physics/addCollider';
import { setBoundsCollision } from '@physics/setBoundsCollision';
import { Ball } from '@systems/Ball';
import { Physics } from '@systems/Physics';

/**
 * Physics.
 */
export class BasePhysics implements Physics {
    private readonly ball: Ball;
    private readonly paddle: GraphicSprite;
    private readonly config: PhysicsConfig;

    constructor(config: PhysicsConfig, ball: Ball, paddle: GraphicSprite) {
        this.config = config;
        this.ball = ball;
        this.paddle = paddle;
    }

    public setup(scene: Phaser.Scene): this {
        setBoundsCollision(scene.physics.world, true, true, true, false);
        addCollider(
            scene.physics.add,
            this.ball.sprite(),
            this.paddle.sprite(),
            () => this.collide(this.ball.sprite(), this.paddle.sprite()),
        );
        scene.input.on('pointerup', () => {
            if (!this.ball.isInPlay()) {
                this.ball.launch(this.config.launchVelocity);
            }
        });

        return this;
    }

    public collide(ball: Phaser.Physics.Arcade.Sprite, paddle: Phaser.Physics.Arcade.Sprite): this {
        ball.setVelocityX((ball.x - paddle.x) * this.config.collideVelocity);

        return this;
    }

    public update(): this {
        return this;
    }
}
