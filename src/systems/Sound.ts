import { AudioConfig } from '@config/AudioConfig';
import { Fx } from '@config/Fx';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { GameEntities } from '@systems/GameEntities';
import { GameOver } from '@systems/gameOver/GameOver';
import { Physics } from '@systems/physics/Physics';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Game sound effects.
 */
export class Sound implements System {
    private readonly config: AudioConfig;
    private readonly entities: GameEntities;
    private readonly gameOver: GameOver;
    private readonly physics: Physics;

    constructor(config: AudioConfig, entities: GameEntities, gameOver: GameOver, physics: Physics) {
        this.config = config;
        this.entities = entities;
        this.gameOver = gameOver;
        this.physics = physics;
    }

    public setup(scene: Phaser.Scene): this {
        const callbacks: ReadonlyArray<(callback: () => void) => void> = this.callbacks();
        const fx: ReadonlyArray<Fx> = this.fx();

        callbacks.forEach((callback: (callback: () => void) => void, index: number) => {
            callback(() => scene.sound.play(fx[index].key));
        });
        this.gameOver.onCountdown((count: number) => {
            if (count > 0) {
                scene.sound.play(this.config.fx.countdownTick.key);
            }
        });
        this.entities.bricks.onHit((_ball: Ball, brick: Brick) => {
            const key: string = (
                    brick.isPowerup()
                    ? this.config.fx.powerup.key
                    : (brick.hitpoints() <= 0 ? this.config.fx.brickDestroy.key : this.config.fx.ballCollide.key)
            );
            scene.sound.play(key);
        });

        return this;
    }

    public update(): this {
        return this;
    }

    private callbacks(): ReadonlyArray<(callback: () => void) => void> {
        return [
            (callback: () => void): void => {
                this.gameOver.onShow(callback);
            },
            (callback: () => void): void => {
                this.entities.bricks.onLower(callback);
            },
            (callback: () => void): void => {
                this.physics.onBallHitPaddle(callback);
            },
            (callback: () => void): void => {
                this.physics.onBallHitBounds(callback);
            },
            (callback: () => void): void => {
                this.entities.ball.onLoseLife(callback);
            },
        ];
    }

    private fx(): ReadonlyArray<Fx> {
        return [
            this.config.fx.gameOver,
            this.config.fx.bricksWave,
            this.config.fx.ballCollide,
            this.config.fx.ballCollide,
            this.config.fx.loseLife,
        ];
    }
}
