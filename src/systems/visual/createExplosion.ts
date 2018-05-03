import { EffectsConfig } from '@config/EffectsConfig';
import Phaser from 'phaser';

/**
 * Create explode brick emitter.
 * @param scene Scene.
 * @param config Effects config.
 * @param brick Brick.
 */
export function createExplosion(
    particles: Phaser.GameObjects.Particles.ParticleEmitterManager,
    config: EffectsConfig,
): Phaser.GameObjects.Particles.ParticleEmitter {
    return particles.createEmitter({
        speed: config.explode.speed,
        lifespan: config.explode.lifespan,
        gravityY: config.explode.gravity,
        frequency: -1,
    });
}
