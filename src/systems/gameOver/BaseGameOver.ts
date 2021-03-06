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
    private readonly emitter: Phaser.EventEmitter;
    private text: Phaser.GameObjects.Text;
    private active: boolean;
    private hideInProgressImp: boolean;
    private background: Phaser.GameObjects.Graphics;

    constructor(config: GameOverConfig, scoreboard: Scoreboard, countdown: Countdown = new BaseCountdown(config)) {
        this.config = config;
        this.active = false;
        this.countdown = countdown;
        this.hideInProgressImp = false;
        this.scoreboard = scoreboard;
        this.emitter = new Phaser.EventEmitter();
    }

    public isActive(): boolean {
        return this.active;
    }

    public show(): this {
        if (!this.active) {
            this.active = true;
            this.background.visible = true;
            this.text.visible = true;
            this.scoreboard.show();
            this.emitter.emit('show');
        }

        return this;
    }

    public hide(done: () => void): this {
        if (this.active) {
            this.text.visible = false;
            this.hideInProgressImp = true;
            this.scoreboard.hide();
            this.background.visible = false;
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
        this.background = scene.add.graphics({});
        this.background.fillStyle(this.config.background.color);
        this.background.fillRect(
            this.config.background.position.x,
            this.config.background.position.y,
            this.config.background.size.width,
            this.config.background.size.height,
        );
        this.background.depth = 50;
        this.background.visible = false;

        return this;
    }

    public update(): this {
        this.countdown.update();

        return this;
    }

    public onShow(callback: () => void): this {
        this.emitter.on('show', callback);

        return this;
    }

    public onCountdown(callback: (count: number) => void): this {
        this.countdown.onTick(callback);

        return this;
    }
}
