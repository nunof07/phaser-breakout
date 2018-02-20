import Phaser from 'phaser';

/**
 * Print Hello World message to screen.
 */
export class HelloWorldScene extends Phaser.Scene {
    public create(): void {
        Phaser.Display.Align.In.Center(
            this.add.text(0, 0, 'Hello World!', { font: '16px Courier', fill: '#ffffff' }),
            this.add.zone(400, 300, 800, 600),
        );
    }
}
