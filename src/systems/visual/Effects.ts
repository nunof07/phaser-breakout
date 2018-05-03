import { EffectsConfig } from '@config/EffectsConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { Ball } from '@systems/ball/Ball';
import { Brick } from '@systems/bricks/Brick';
import { GameEntities } from '@systems/GameEntities';
import { System } from '@systems/System';
import { Explosion } from '@systems/visual/Explosion';
import { flyDownText } from '@systems/visual/flyDownText';
import Phaser from 'phaser';

/**
 * Visual effects.
 */
export class Effects implements System {
    private readonly config: EffectsConfig;
    private readonly entities: GameEntities;
    private explosion: Explosion;

    constructor(config: EffectsConfig, graphics: GraphicsConfig, entities: GameEntities) {
        this.config = config;
        this.entities = entities;
        this.explosion = new Explosion(config, graphics);
    }

    public setup(scene: Phaser.Scene): this {
        this.explosion.setup(scene);
        this.entities.bricks.onHit((_ball: Ball, brick: Brick, points: number) => {
            if (!brick.isPowerup()) {
                flyDownText(scene, this.config, brick, points);

                if (brick.hitpoints() === 0) {
                    this.explosion.explode(brick);
                }
            }
        });

        return this;
    }

    public update(): this {
        this.explosion.update();

        return this;
    }
}
