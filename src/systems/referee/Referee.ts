import { GameConfig } from '@config/GameConfig';
import { PhysicsConfig } from '@config/PhysicsConfig';
import { ballOnSpritePosition } from '@systems/ball/ballOnSpritePosition';
import { GameEntities } from '@systems/GameEntities';
import { System } from '@systems/System';

/**
 * Referee.
 */
export class Referee implements System {
    private readonly game: GameConfig;
    private readonly physics: PhysicsConfig;
    private readonly entities: GameEntities;

    constructor(game: GameConfig, physics: PhysicsConfig, entities: GameEntities) {
        this.game = game;
        this.physics = physics;
        this.entities = entities;
    }

    public setup(scene: Phaser.Scene): this {
        scene.input.on('pointerup', () => {
            if (!this.entities.ball.isInPlay()) {
                this.entities.ball.launch(this.physics.launchVelocity);
            }
        });
        scene.time.addEvent({
            delay: this.physics.bricksDelay,
            loop: true,
            callback: (): void => {
                this.entities.bricks.lower();
            },
        });

        return this;
    }

    public update(): this {
        if (this.entities.ball.sprite().y > this.game.height) {
            this.entities.ball.reset(ballOnSpritePosition(this.entities.ball, this.entities.paddle));
        }

        return this;
    }
}
