import { GameConfig } from '@config/GameConfig';
import { ballOnSpritePosition } from '@systems/ball/ballOnSpritePosition';
import { lowestY } from '@systems/bricks/lowestY';
import { GameEntities } from '@systems/GameEntities';
import { GameEvents } from '@systems/GameEvents';
import { GameOver } from '@systems/gameOver/GameOver';
import { Physics } from '@systems/physics/Physics';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Referee.
 */
export class Referee implements System, GameEvents {
    private readonly game: GameConfig;
    private readonly entities: GameEntities;
    private readonly physics: Physics;
    private readonly gameOver: GameOver;
    private readonly emitter: Phaser.EventEmitter;
    private lowerBricksTimer: Phaser.Time.TimerEvent;
    private isStopped: boolean;
    private isNewGame: boolean;

    constructor(game: GameConfig, entities: GameEntities, physics: Physics, gameOver: GameOver) {
        this.game = game;
        this.physics = physics;
        this.entities = entities;
        this.gameOver = gameOver;
        this.emitter = new Phaser.EventEmitter();
        this.isNewGame = true;
    }

    public setup(scene: Phaser.Scene): this {
        scene.input.on('pointerup', () => {
            this.resumePlay();
        });
        this.lowerBricksTimer = scene.time.addEvent(this.lowerBrickEvent(scene));
        this.lowerBricksTimer.paused = true;

        return this;
    }

    public update(): this {
        if (this.isBallTouchingFloor()) {
            this.entities.ball.loseLife();
            this.stopPlay();
        }

        if (this.isGameOver()) {
            this.stopPlay();
            this.gameOver.show();
        }

        return this;
    }

    public onStart(callback: () => void): this {
        this.emitter.on('start', callback);

        return this;
    }

    public onResume(callback: () => void): this {
        this.emitter.on('resume', callback);

        return this;
    }

    public onStop(callback: () => void): this {
        this.emitter.on('stop', callback);

        return this;
    }

    private isGameOver(): boolean {
        return this.isBrickTouchingFloor() || this.entities.ball.hitpoints() <= 0;
    }

    private isBallTouchingFloor(): boolean {
        return (this.entities.ball.sprite().y > this.game.height);
    }

    private isBrickTouchingFloor(): boolean {
        return (lowestY(this.entities.bricks.group(), -1) >= this.physics.config().gameOverBrickLine);
    }

    private stopPlay(): this {
        if (!this.isStopped) {
            this.lowerBricksTimer.paused = true;
            this.entities.ball.reset(ballOnSpritePosition(this.entities.ball, this.entities.paddle));
            this.isStopped = true;
            this.entities.stats.pause();
            this.emitter.emit('stop');
        }

        return this;
    }

    private resumePlay(): void {
        if (!this.gameOver.hideInProgress() && !this.entities.ball.isInPlay()) {
            this.isStopped = false;

            if (this.gameOver.isActive()) {
                this.isNewGame = true;
                this.entities.stats.reset();
                this.entities.ball.resetHitpoints();
                this.entities.bricks.reset().addRow(this.physics);
                this.gameOver.hide(() => {
                    this.launchBall();
                });
            } else {
                this.launchBall();
            }
        }
    }

    private launchBall(): this {
        this.lowerBricksTimer.paused = false;
        this.entities.ball.launch(this.physics.config().launchVelocity);
        this.entities.stats.resume();

        if (this.isNewGame) {
            this.emitter.emit('start');
            this.isNewGame = false;
        } else {
            this.emitter.emit('resume');
        }

        return this;
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
