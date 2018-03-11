import { System } from '@core/System';
import Phaser from 'phaser';

/**
 * Bricks;
 */
export interface Bricks extends System {
    group(): Phaser.Physics.Arcade.StaticGroup;
}
