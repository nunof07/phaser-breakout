import { ProgressBar } from '@display/ProgressBar';
import { Resize } from '@display/Resize';
import { config } from '@src/config';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Resize display and load assets.
 */
export class Boot implements System {
    public setup(scene: Phaser.Scene): this {
        this.resize(scene);
        this.startLoading(scene);
        scene.load.image(config.graphics.texture.key, config.graphics.texture.url);
        scene.load.audio(config.audio.music.key, config.audio.music.urls, {});

        // tslint:disable-next-line:readonly-array
        Object.values(config.audio.fx).forEach((fx: { readonly key: string; readonly urls: string[] }) => {
            scene.load.audio(fx.key, fx.urls, {});
        });

        return this;
    }

    public update(): this {
        return this;
    }

    private startLoading(scene: Phaser.Scene): this {
        const bar: ProgressBar = new ProgressBar(config.progressBar);
        bar.setup(scene);

        return this;
    }

    private resize(scene: Phaser.Scene): this {
        const resize: Resize = new Resize();
        resize.setup(scene);

        return this;
    }
}
