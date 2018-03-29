import { GameOverConfig } from '@config/GameOverConfig';
import { Countdown } from '@systems/gameOver/Countdown';
import { createGameOverText } from '@systems/gameOver/createGameOverText';
import Phaser from 'phaser';

/**
 * Countdown.
 */
export class BaseCountdown implements Countdown {
    private readonly gameOverConfig: GameOverConfig;
    private text: Phaser.GameObjects.Text;
    private countdownTimer: Phaser.Time.TimerEvent;
    private count: number;
    private inProgress: boolean;
    private done: () => void;

    constructor(config: GameOverConfig) {
        this.gameOverConfig = config;
        this.count = config.countdown;
        this.inProgress = false;
    }

    public start(done: () => void): this {
        if (!this.inProgress) {
            this.inProgress = true;
            this.updateCount(this.gameOverConfig.countdown);
            this.text.visible = true;
            this.done = done;
            this.countdownTimer.reset(this.config());
            this.countdownTimer.paused = false;
        }

        return this;
    }

    public setup(scene: Phaser.Scene): this {
        this.countdownTimer = scene.time.addEvent(this.config());
        this.countdownTimer.paused = true;
        this.text = createGameOverText(scene, this.gameOverConfig.countdown.toString(), this.gameOverConfig.text);

        return this;
    }

    public update(): this {
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
        } else {
            this.updateCount(this.count - 1);
        }
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
