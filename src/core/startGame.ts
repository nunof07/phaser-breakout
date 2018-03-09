import Phaser from 'phaser';

/**
 * Start game.
 * @param config Game config.
 */
export function startGame(config: object): Phaser.Game {
    return new Phaser.Game(config);
}
