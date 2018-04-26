import { CameraConfig } from '@config/CameraConfig';
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

        return this;
    }

    public update(): this {
        return this;
    }
}
