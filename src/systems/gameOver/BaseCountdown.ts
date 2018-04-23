import { GameOverConfig } from '@config/GameOverConfig';
import { createText } from '@display/createText';
import { Countdown } from '@systems/gameOver/Countdown';
import Phaser from 'phaser';

/**
 * Countdown.
 */
export class BaseCountdown implements Countdown {
    private readonly gameOverConfig: GameOverConfig;
    private readonly emitter: Phaser.EventEmitter;
    private text: Phaser.GameObjects.Text;
    private countdownTimer: Phaser.Time.TimerEvent;
    private count: number;
    private inProgress: boolean;
    private done: () => void;

    constructor(config: GameOverConfig) {
        this.gameOverConfig = config;
        this.count = config.countdown;
        this.inProgress = false;
        this.emitter = new Phaser.EventEmitter();
    }

    public start(done: () => void): this {
        if (!this.inProgress) {
            this.inProgress = true;
            this.updateCount(this.gameOverConfig.countdown);
            this.text.visible = true;
            this.done = done;
            this.countdownTimer.reset(this.config());
            this.countdownTimer.paused = false;
            this.emitter.emit('tick', this.count);
        }

        return this;
    }

    public setup(scene: Phaser.Scene): this {
        this.countdownTimer = scene.time.addEvent(this.config());
        this.countdownTimer.paused = true;
        this.text = createText(
            scene,
            {
                position: this.gameOverConfig.position,
                center: true,
                visible: false,
                depth: 100,
                text: this.gameOverConfig.countdown.toString(),
                config: this.gameOverConfig.text,
            },
        );

        return this;
    }

    public update(): this {
        return this;
    }

    public onTick(callback: (count: number) => void): this {
        this.emitter.on('tick', callback);

        return this;
    }

    private config(): object {
        return {
            delay: 1000,
            loop: false,
            repeat: this.gameOverConfig.countdown + 1,
            callback: (): void => {
                this.tick();
            },
        };
    }

    private tick(): void {
        if (this.count <= 1) {
            this.stop();
            this.done();
        }
        this.updateCount(this.count - 1);
        this.emitter.emit('tick', this.count);
    }

    private updateCount(count: number): this {
        this.count = count;
        this.text.setText(count.toString());

        return this;
    }

    private stop(): this {
        this.countdownTimer.paused = true;
        this.text.visible = false;
        this.inProgress = false;

        return this;
    }
}
