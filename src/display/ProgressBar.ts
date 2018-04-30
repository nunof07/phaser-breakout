import { ProgressBarConfig } from '@config/ProgressBarConfig';
import { createGraphics } from '@display/createGraphics';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Loading animation progress bar.
 */
export class ProgressBar implements System {
    private readonly config: ProgressBarConfig;
    private graphics: Phaser.GameObjects.Graphics;
    private complete: Phaser.Geom.Rectangle;
    private bar: Phaser.Geom.Rectangle;

    constructor(config: ProgressBarConfig) {
        this.config = config;
    }

    public setup(scene: Phaser.Scene): this {
        scene.load.on('fileprogress', this.onProgress, this);
        scene.load.on('complete', this.onComplete, this);
        this.graphics = createGraphics(scene.add, this.config.color, this.config.border, this.config.borderWidth);
        this.complete = new Phaser.Geom.Rectangle(0, 0, this.config.width, this.config.height);
        Phaser.Geom.Rectangle.CenterOn(this.complete, scene.cameras.main.width / 2, scene.cameras.main.height / 2);
        this.bar = Phaser.Geom.Rectangle.Clone(this.complete);

        return this;
    }

    public update(): this {
        return this;
    }

    private onComplete(): this {
        this.graphics.destroy();

        return this;
    }

    private onProgress(_file: object, progress: number): this {
        this.complete.width = progress * this.bar.width;
        this.graphics
          .clear()
          .strokeRectShape(this.bar)
          .fillStyle(this.config.color)
          .fillRectShape(this.complete);

        return this;
    }
}
