import { GameConfig } from '@config/GameConfig';
import { PhysicsConfig } from '@config/PhysicsConfig';
import { ballOnSpritePosition } from '@systems/ball/ballOnSpritePosition';
import { GameEntities } from '@systems/GameEntities';
import { Physics } from '@systems/physics/Physics';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Referee.
 */
export class Referee implements System {
    private readonly game: GameConfig;
    private readonly physicsConfig: PhysicsConfig;
    private readonly entities: GameEntities;
    private readonly physics: Physics;
    private timer: Phaser.Time.TimerEvent;

    constructor(game: GameConfig, physicsConfig: PhysicsConfig, entities: GameEntities, physics: Physics) {
        this.game = game;
        this.physicsConfig = physicsConfig;
        this.physics = physics;
        this.entities = entities;
    }

    public setup(scene: Phaser.Scene): this {
        scene.input.on('pointerup', () => {
            if (!this.entities.ball.isInPlay()) {
                this.timer.paused = false;
                this.entities.ball.launch(this.physicsConfig.launchVelocity);
            }
        });
        this.timer = scene.time.addEvent({
            delay: this.physicsConfig.bricksWave.delay,
            loop: true,
            callback: (): void => {
                this.entities.bricks
                    .addRow(this.physics, this.physicsConfig.bricksWave)
                    .lower(scene);
            },
        });

        return this;
    }

    public update(): this {
        if (this.entities.ball.sprite().y > this.game.height) {
            this.timer.paused = true;
            this.entities.ball.reset(ballOnSpritePosition(this.entities.ball, this.entities.paddle));
        }

        return this;
    }
}
