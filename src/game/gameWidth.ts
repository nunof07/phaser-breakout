import Phaser from 'phaser';

/**
 * Game width.
 * @param game Game.
 */
export function gameWidth(game: Phaser.Game): number {
    return (<{ width: number }>game.config).width;
}
