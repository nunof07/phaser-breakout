import Phaser from 'phaser';

/**
 * Print Hello World message to screen.
 */
export class HelloWorldScene extends Phaser.Scene {
    private graphics: Phaser.GameObjects.Graphics;
    private sprite: Phaser.Physics.Arcade.Sprite;

    public preload(): void {
        this.load.image('pixel', 'images/transparent_pixel.png');
    }

    public create(): void {
        this.graphics = this.add.graphics({
            lineStyle: {
                width: 2,
                color: 0xAA0000,
            },
        });

        this.sprite = this.physics.add.sprite(400, 600 - 15 * 1.5, 'pixel');
        this.sprite.setScale(160, 30);
        this.sprite.setOrigin(80, 15);
        this.sprite.setImmovable(true);

        this.input.on('pointermove', (pointer: Phaser.Input.Pointer): void => {
            this.sprite.x = pointer.x;
        });
    }

    public update(): void {
        this.graphics.clear();
        const startX: number = this.sprite.x - (this.sprite.displayWidth - (this.sprite.displayWidth - this.sprite.displayOriginX));
        const startY: number = this.sprite.y - (this.sprite.displayHeight - (this.sprite.displayHeight - this.sprite.displayOriginY));
        this.graphics.strokeRect(startX, startY, this.sprite.displayWidth, this.sprite.displayHeight);
    }
}
