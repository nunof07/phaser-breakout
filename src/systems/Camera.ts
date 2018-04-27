import { CameraConfig } from '@config/CameraConfig';
import { shake } from '@display/shake';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { GameEntities } from '@systems/GameEntities';
import { GameOver } from '@systems/gameOver/GameOver';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Camera effects.
 */
export class Camera implements System {
    private readonly config: CameraConfig;
    private readonly entities: GameEntities;
    private readonly gameOver: GameOver;

    constructor(config: CameraConfig, entities: GameEntities, gameOver: GameOver) {
        this.config = config;
        this.entities = entities;
        this.gameOver = gameOver;
    }

    public setup(scene: Phaser.Scene): this {
        this.entities.bricks.onLower(() => {
            shake(scene.cameras.main, this.config.lowerBricks);
        });
        this.entities.bricks.onHit((_ball: Ball, brick: Brick) => {
            if (brick.isPowerup()) {
                scene.cameras.main.flash(
                    this.config.powerup.duration,
                    this.config.powerup.red,
                    this.config.powerup.green,
                    this.config.powerup.blue,
                    1,
                );
            }
        });
        this.gameOver.onShow(() => {
            shake(scene.cameras.main, this.config.gameOver);
        });

        return this;
    }

    public update(): this {
        return this;
    }
}
