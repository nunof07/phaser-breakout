import { PhysicsConfig } from '@config/PhysicsConfig';
import { GraphicSprite } from '@display/GraphicSprite';
import { addCollider } from '@physics/addCollider';
import { setBoundsCollision } from '@physics/setBoundsCollision';
import { Ball } from '@systems/Ball';
import { Bricks } from '@systems/Bricks';
import { Physics } from '@systems/Physics';

/**
 * Physics.
 */
export class BasePhysics implements Physics {
    private readonly ball: Ball;
    private readonly paddle: GraphicSprite;
    private readonly bricks: Bricks;
    private readonly config: PhysicsConfig;

    constructor(config: PhysicsConfig, ball: Ball, paddle: GraphicSprite, bricks: Bricks) {
        this.config = config;
        this.ball = ball;
        this.paddle = paddle;
        this.bricks = bricks;
    }

    public setup(scene: Phaser.Scene): this {
        setBoundsCollision(scene.physics.world, { left: true, right: true, top: true, bottom: false });
        addCollider(
            scene.physics.add,
            this.ball,
            this.paddle,
            () => this.collide(this.ball.sprite(), this.paddle.sprite()),
        );
        addCollider(scene.physics.add, this.ball, this.bricks.group());

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
