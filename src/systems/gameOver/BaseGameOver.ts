import { GameOverConfig } from '@config/GameOverConfig';
import { BaseCountdown } from '@systems/gameOver/BaseCountdown';
import { Countdown } from '@systems/gameOver/Countdown';
import { createGameOverText } from '@systems/gameOver/createGameOverText';
import { GameOver } from '@systems/gameOver/GameOver';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Game over screen.
 */
export class BaseGameOver implements GameOver, System {
    private readonly config: GameOverConfig;
    private readonly countdown: Countdown;
    private text: Phaser.GameObjects.Text;
    private active: boolean;
    private hideInProgressImp: boolean;

    constructor(config: GameOverConfig, countdown: Countdown = new BaseCountdown(config)) {
        this.config = config;
        this.active = false;
        this.countdown = countdown;
        this.hideInProgressImp = false;
    }

    public isActive(): boolean {
        return this.active;
    }

    public show(): this {
        if (!this.active) {
            this.active = true;
            this.text.visible = true;
        }

        return this;
    }

    public hide(done: () => void): this {
        if (this.active) {
            this.text.visible = false;
            this.hideInProgressImp = true;
            this.countdown.start(() => {
                this.active = false;
                this.hideInProgressImp = false;
                done();
            });
        }

        return this;
    }

    public hideInProgress(): boolean {
        return this.hideInProgressImp;
    }

    public setup(scene: Phaser.Scene): this {
        this.text = createGameOverText(scene, this.config.title, this.config.text);
        this.countdown.setup(scene);

        return this;
    }

    public update(): this {
        this.countdown.update();

        return this;
    }
}
