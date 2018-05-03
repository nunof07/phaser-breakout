import { ExplosionConfig } from '@config/ExplosionConfig';
import Phaser from 'phaser';

/**
 * Create explode brick emitter.
 * @param scene Scene.
 * @param config Effects config.
 * @param brick Brick.
 */
export function createExplosion(
    particles: Phaser.GameObjects.Particles.ParticleEmitterManager,
    config: ExplosionConfig,
): Phaser.GameObjects.Particles.ParticleEmitter {
    return particles.createEmitter({
        speed: config.speed,
        lifespan: config.lifespan,
        gravityY: config.gravity,
        frequency: -1,
    });
}
