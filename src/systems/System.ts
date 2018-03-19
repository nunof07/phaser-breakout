import Phaser from 'phaser';

/**
 * System.
 */
export interface System {
    setup(scene: Phaser.Scene): this;
    update(): this;
}
