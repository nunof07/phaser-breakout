import { PhysicsConfig } from '@config/PhysicsConfig';
import { GraphicSprite } from '@display/GraphicSprite';
import { addCollider } from '@physics/addCollider';
import { setBoundsCollision } from '@physics/setBoundsCollision';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { GameEntities } from '@systems/GameEntities';
import { Physics } from '@systems/physics/Physics';
import Phaser from 'phaser';

/**
 * Physics.
 */
export class BasePhysics implements Physics {
    private readonly entities: GameEntities;
    private readonly congfigObj: PhysicsConfig;
    private readonly scene: Phaser.Scene;
    private readonly emitter: Phaser.EventEmitter;

    constructor(config: PhysicsConfig, entities: GameEntities, scene: Phaser.Scene) {
        this.congfigObj = config;
        this.entities = entities;
        this.scene = scene;
        this.emitter = new Phaser.EventEmitter();
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
        this.scene.physics.world.on(
            'worldbounds',
            (body: Phaser.Physics.Arcade.Body, up: boolean, down: boolean, left: boolean, right: boolean) => {
                if (body === this.entities.ball.sprite().body) {
                    this.emitter.emit('ballHitBounds', this.entities.ball, up, down, left, right);
                }
            },
        );

        return this;
    }

    public config(): PhysicsConfig {
        return this.congfigObj;
    }

    public setupBrick(brick: Brick): this {
        brick.setup(this.scene);
        addCollider(this.scene.physics.add, this.entities.ball, brick, () => this.entities.bricks.hit(this.entities.ball, brick));

        return this;
    }

    public collide(ball: Phaser.Physics.Arcade.Sprite, paddle: Phaser.Physics.Arcade.Sprite): this {
        ball.setVelocityX((ball.x - paddle.x) * this.congfigObj.collideVelocity);
        this.emitter.emit('ballHitPaddle', this.entities.ball, this.entities.paddle);

        return this;
    }

    public update(): this {
        return this;
    }

    public onBallHitPaddle(callback: (ball: Ball, paddle: GraphicSprite) => void): this {
        this.emitter.on('ballHitPaddle', callback);

        return this;
    }

    public onBallHitBounds(callback: (ball: Ball, up: boolean, down: boolean, left: boolean, right: boolean) => void): this {
        this.emitter.on('ballHitBounds', callback);

        return this;
    }
}
