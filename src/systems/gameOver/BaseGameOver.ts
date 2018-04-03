import { GameOverConfig } from '@config/GameOverConfig';
import { createText } from '@display/createText';
import { BaseCountdown } from '@systems/gameOver/BaseCountdown';
import { Countdown } from '@systems/gameOver/Countdown';
import { GameOver } from '@systems/gameOver/GameOver';
import { Scoreboard } from '@systems/score/Scoreboard';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Game over screen.
 */
export class BaseGameOver implements GameOver, System {
    private readonly config: GameOverConfig;
    private readonly countdown: Countdown;
    private readonly scoreboard: Scoreboard;
    private text: Phaser.GameObjects.Text;
    private active: boolean;
    private hideInProgressImp: boolean;

    constructor(config: GameOverConfig, scoreboard: Scoreboard, countdown: Countdown = new BaseCountdown(config)) {
        this.config = config;
        this.active = false;
        this.countdown = countdown;
        this.hideInProgressImp = false;
        this.scoreboard = scoreboard;
    }

    public isActive(): boolean {
        return this.active;
    }

    public show(): this {
        if (!this.active) {
            this.active = true;
            this.text.visible = true;
            this.scoreboard.show();
        }

        return this;
    }

    public hide(done: () => void): this {
        if (this.active) {
            this.text.visible = false;
            this.hideInProgressImp = true;
            this.scoreboard.hide();
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
        this.text = createText(
            scene,
            {
                position: this.config.position,
                center: true,
                visible: false,
                depth: 100,
                text: this.config.title,
                config: this.config.text,
            },
        );
        this.countdown.setup(scene);

        return this;
    }

    public update(): this {
        this.countdown.update();

        return this;
    }
}
