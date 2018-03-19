import Phaser from 'phaser';

/**
 * Game height.
 * @param game Game.
 */
export function gameHeight(game: Phaser.Game): number {
    return (<{ height: number }>game.config).height;
}
