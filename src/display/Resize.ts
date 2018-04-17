import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Resize game to match screen size.
 */
export class Resize implements System {
    public setup(scene: Phaser.Scene): this {
        window.addEventListener('resize', () => this.resize(scene.sys.game.canvas));
        this.resize(scene.sys.game.canvas);

        return this;
    }

    public update(): this {
        return this;
    }

    private resize(canvas: HTMLCanvasElement): this {
        const width: number = window.innerWidth;
        const height: number = window.innerHeight;
        const windowRatio: number = width / height;
        const ratio: number = canvas.width / canvas.height;

        if (windowRatio < ratio) {
            canvas.style.width = `${width}px`;
            canvas.style.height = `${width / ratio}px`;
        } else {
            canvas.style.width = `${height * ratio}px`;
            canvas.style.height = `${height}px`;
        }

        return this;
    }
}
