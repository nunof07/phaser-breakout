import { GameConfig } from '@config/GameConfig';
import { ballOnSpritePosition } from '@systems/ball/ballOnSpritePosition';
import { lowestY } from '@systems/bricks/lowestY';
import { GameEntities } from '@systems/GameEntities';
import { GameOver } from '@systems/GameOver';
import { Physics } from '@systems/physics/Physics';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Referee.
 */
export class Referee implements System {
    private readonly game: GameConfig;
    private readonly entities: GameEntities;
    private readonly physics: Physics;
    private readonly gameOver: GameOver;
    private lowerBricksTimer: Phaser.Time.TimerEvent;

    constructor(game: GameConfig, entities: GameEntities, physics: Physics, gameOver: GameOver) {
        this.game = game;
        this.physics = physics;
        this.entities = entities;
        this.gameOver = gameOver;
    }

    public setup(scene: Phaser.Scene): this {
        scene.input.on('pointerup', () => this.resumePlay());
        this.lowerBricksTimer = scene.time.addEvent(this.lowerBrickEvent(scene));

        return this;
    }

    public update(): this {
        if (this.isGameOver()) {
            this.lowerBricksTimer.paused = true;
            this.entities.ball.reset(ballOnSpritePosition(this.entities.ball, this.entities.paddle));
            this.gameOver.show();
        }

        return this;
    }

    private isGameOver(): boolean {
        const ballTouchesFloor: boolean = (this.entities.ball.sprite().y > this.game.height);
        const brickTouchesFloor: boolean = (lowestY(this.entities.bricks.group(), -1) >= this.physics.config().gameOverBrickLine);

        return ballTouchesFloor || brickTouchesFloor;
    }

    private resumePlay(): void {
        if (!this.entities.ball.isInPlay()) {
            if (this.gameOver.isActive()) {
                this.entities.bricks.reset().addRow(this.physics);
                this.gameOver.hide(() => this.launchBall());
            } else {
                this.launchBall();
            }
        }
    }

    private launchBall(): void {
        this.lowerBricksTimer.paused = false;
        this.entities.ball.launch(this.physics.config().launchVelocity);
    }

    private lowerBrickEvent(scene: Phaser.Scene): object {
        return {
            delay: this.physics.config().bricksWave.delay,
            loop: true,
            callback: (): void => {
                this.entities.bricks
                    .addRow(this.physics)
                    .lower(scene);
            },
        };
    }
}
