import { PhysicsConfig } from '@config/PhysicsConfig';
import { addCollider } from '@physics/addCollider';
import { setBoundsCollision } from '@physics/setBoundsCollision';
import { Brick } from '@systems/bricks/Brick';
import { GameEntities } from '@systems/GameEntities';
import { Physics } from '@systems/physics/Physics';
import Phaser from 'phaser';

/**
 * Physics.
 */
export class BasePhysics implements Physics {
    private readonly entities: GameEntities;
    private readonly config: PhysicsConfig;
    private readonly scene: Phaser.Scene;

    constructor(config: PhysicsConfig, entities: GameEntities, scene: Phaser.Scene) {
        this.config = config;
        this.entities = entities;
        this.scene = scene;
    }

    public setup(_scene: Phaser.Scene): this {
        setBoundsCollision(this.scene.physics.world, { left: true, right: true, top: true, bottom: false });
        addCollider(
            this.scene.physics.add,
            this.entities.ball,
            this.entities.paddle,
            () => this.collide(this.entities.ball.sprite(), this.entities.paddle.sprite()),
        );
        this.entities.bricks.group().forEach((brick: Brick) => this.setupBrick(brick), this);

        return this;
    }

    public setupBrick(brick: Brick): this {
        brick.setup(this.scene);
        addCollider(this.scene.physics.add, this.entities.ball, brick, () => this.entities.bricks.hit(brick));

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
