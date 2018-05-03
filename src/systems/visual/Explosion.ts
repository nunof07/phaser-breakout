import { ExplosionConfig } from '@config/ExplosionConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { createGraphics } from '@display/createGraphics';
import { Brick } from '@systems/bricks/Brick';
import { System } from '@systems/System';
import { createExplosion } from '@systems/visual/createExplosion';
import { drawExplodeParticle } from '@systems/visual/drawExplodeParticle';
import Phaser from 'phaser';

/**
 * Explosion visual effect.
 */
export class Explosion implements System {
    private readonly config: ExplosionConfig;
    private readonly graphics: GraphicsConfig;
    private particles: Phaser.GameObjects.Particles.ParticleEmitterManager;
    private explosionsGraphics: Phaser.GameObjects.Graphics;
    private explosion: Phaser.GameObjects.Particles.ParticleEmitter;

    constructor(config: ExplosionConfig, graphics: GraphicsConfig) {
        this.config = config;
        this.graphics = graphics;
    }

    public setup(scene: Phaser.Scene): this {
        this.explosionsGraphics = createGraphics(
            scene.add,
            this.config.fillColor,
            this.config.borderColor,
            this.config.borderWidth,
        );
        this.particles = scene.add.particles(this.graphics.texture.key);
        this.explosion = createExplosion(this.particles, this.config);

        return this;
    }

    public explode(brick: Brick): this {
        this.explosion.explode(this.config.quantity, brick.sprite().x, brick.sprite().y);

        return this;
    }

    public update(): this {
        this.explosionsGraphics.clear();
        this.explosion.forEachAlive(
            (particle: Phaser.GameObjects.Particles.Particle) => {
                drawExplodeParticle(this.explosionsGraphics, particle, this.config.size);
            },
            this,
        );

        return this;
    }
}
