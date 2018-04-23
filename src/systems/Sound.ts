import { AudioConfig } from '@config/AudioConfig';
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
        this.gameOver.onCountdown((count: number) => {
            if (count > 0) {
                scene.sound.play(this.config.fx.countdownTick.key);
            }
        });
        this.gameOver.onShow(() => scene.sound.play(this.config.fx.gameOver.key));
        this.entities.bricks.onLower(() => scene.sound.play(this.config.fx.bricksWave.key));
        this.entities.bricks.onHit((_ball: Ball, brick: Brick) => {
            const key: string = (
                    brick.isPowerup()
                    ? this.config.fx.powerup.key
                    : (brick.hitpoints() <= 0 ? this.config.fx.brickDestroy.key : this.config.fx.ballCollide.key)
            );
            scene.sound.play(key);
        });
        this.physics.onBallHitPaddle(() => scene.sound.play(this.config.fx.ballCollide.key));
        this.physics.onBallHitBounds((_ball: Ball, _up: boolean, _down: boolean, _left: boolean, _right: boolean) => {
            scene.sound.play(this.config.fx.ballCollide.key);
        });
        this.entities.ball.onLoseLife(() => scene.sound.play(this.config.fx.loseLife.key));

        return this;
    }

    public update(): this {
        return this;
    }
}
