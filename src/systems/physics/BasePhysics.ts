import { PhysicsConfig } from '@config/PhysicsConfig';
import { addCollider } from '@physics/addCollider';
import { setBoundsCollision } from '@physics/setBoundsCollision';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { GameEntities } from '@systems/GameEntities';
import { Physics } from '@systems/physics/Physics';

/**
 * Physics.
 */
export class BasePhysics implements Physics {
    private readonly entities: GameEntities;
    private readonly config: PhysicsConfig;

    constructor(config: PhysicsConfig, entities: GameEntities) {
        this.config = config;
        this.entities = entities;
    }

    public setup(scene: Phaser.Scene): this {
        setBoundsCollision(scene.physics.world, { left: true, right: true, top: true, bottom: false });
        addCollider(
            scene.physics.add,
            this.entities.ball,
            this.entities.paddle,
            () => this.collide(this.entities.ball.sprite(), this.entities.paddle.sprite()),
        );
        this.entities.bricks.group().forEach(
            (brick: Brick) => {
                addCollider(scene.physics.add, this.entities.ball, brick, () => this.hit(this.entities.ball, brick));
            },
            this,
        );

        return this;
    }

    public collide(ball: Phaser.Physics.Arcade.Sprite, paddle: Phaser.Physics.Arcade.Sprite): this {
        ball.setVelocityX((ball.x - paddle.x) * this.config.collideVelocity);

        return this;
    }

    public hit(_ball: Ball, brick: Brick): this {
        brick.hit();

        return this;
    }

    public update(): this {
        return this;
    }
}
