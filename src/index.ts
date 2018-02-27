import { startGame } from '@core/startGame';
import { Breakout } from '@src/Breakout';
import { config } from '@src/config';

/**
 * Main entry point.
 */
startGame({
    type: Phaser.AUTO,
    parent: config.game.container,
    width: config.game.width,
    height: config.game.height,
    pixelArt: true,
    scene: Breakout,
    physics: {
        default: 'arcade',
    },
});
