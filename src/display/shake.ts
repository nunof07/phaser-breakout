import { ShakeConfig } from '@config/ShakeConfig';
import Phaser from 'phaser';

/**
 * Shake camera.
 * @param camera Camera.
 * @param config Config.
 */
export function shake(camera: Phaser.Cameras.Scene2D.Camera, config: ShakeConfig): void {
    camera.shake(config.duration, config.intensity, 1);
}
