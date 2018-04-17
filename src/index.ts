import { startGame } from '@game/startGame';
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
    scene: Breakout,
    physics: {
        default: 'arcade',
        arcade: {
            debug: config.game.debug,
        },
    },
});
