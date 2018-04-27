import { CameraConfig } from '@config/CameraConfig';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { GameEntities } from '@systems/GameEntities';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Camera effects.
 */
export class Camera implements System {
    private readonly config: CameraConfig;
    private readonly entities: GameEntities;

    constructor(config: CameraConfig, entities: GameEntities) {
        this.config = config;
        this.entities = entities;
    }

    public setup(scene: Phaser.Scene): this {
        this.entities.bricks.onLower(() => {
            scene.cameras.main.shake(this.config.lowerBricksShake.duration, this.config.lowerBricksShake.intensity, 1);
        });
        this.entities.bricks.onHit((_ball: Ball, brick: Brick) => {
            if (brick.isPowerup()) {
                scene.cameras.main.flash(
                    this.config.powerupFlash.duration,
                    this.config.powerupFlash.red,
                    this.config.powerupFlash.green,
                    this.config.powerupFlash.blue,
                    1,
                );
            }
        });

        return this;
    }

    public update(): this {
        return this;
    }
}
