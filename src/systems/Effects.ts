import { EffectsConfig } from '@config/EffectsConfig';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { flyDownText } from '@systems/flyDownText';
import { GameEntities } from '@systems/GameEntities';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Visual effects.
 */
export class Effects implements System {
    private readonly config: EffectsConfig;
    private readonly entities: GameEntities;

    constructor(config: EffectsConfig, entities: GameEntities) {
        this.config = config;
        this.entities = entities;
    }

    public setup(scene: Phaser.Scene): this {
        this.entities.bricks.onHit((_ball: Ball, brick: Brick, points: number) => {
            if (!brick.isPowerup()) {
                flyDownText(scene, this.config, brick, points);
            }
        });

        return this;
    }

    public update(): this {
        return this;
    }
}
