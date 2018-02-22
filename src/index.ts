import { HelloWorldScene } from '@src/HelloWorldScene';
import Phaser from 'phaser';

/**
 * Main entry point.
 */
// tslint:disable-next-line:no-unused-expression
new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    scene: HelloWorldScene,
});
