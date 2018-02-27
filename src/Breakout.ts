import { System } from '@core/System';
import { config } from '@src/config';
import { createPlayer } from '@systems/createPlayer';
import Phaser from 'phaser';

/**
 * Breakout game.
 */
export class Breakout extends Phaser.Scene {
    private player: System;

    public preload(): void {
        this.load.image(config.pixel.key, config.pixel.url);
    }

    public create(): void {
        this.player = createPlayer(this, config.player);
    }

    public update(): void {
        this.player.update();
    }
}
