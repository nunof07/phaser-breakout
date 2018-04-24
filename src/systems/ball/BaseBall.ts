import { BallConfig } from '@config/BallConfig';
import { Coordinates } from '@display/Coordinates';
import { TextGraphicSprite } from '@display/TextGraphicSprite';
import { followPointerMovementX } from '@input/followPointerMovementX';
import { Ball } from '@systems/ball/Ball';
import Phaser from 'phaser';

/**
 * Default ball system.
 */
export class BaseBall implements Ball {
    private readonly graphics: TextGraphicSprite;
    private readonly config: BallConfig;
    private readonly emitter: Phaser.EventEmitter;
    private inPlay: boolean;
    private hp: number;

    constructor(config: BallConfig, graphics: TextGraphicSprite) {
        this.graphics = graphics;
        this.config = config;
        this.hp = config.startHitpoints;
        this.emitter = new Phaser.EventEmitter();
    }

    public setup(scene: Phaser.Scene): this {
        this.graphics.setup(scene);
        this.graphics.sprite().body.onWorldBounds = true;
        this.graphics.sprite().setCollideWorldBounds(true);
        this.graphics.sprite().setBounce(this.config.bounce, this.config.bounce);
        this.graphics.updateText(this.hp.toString());
        followPointerMovementX(scene.input, this.graphics.sprite(), true, () => !this.inPlay);

        return this;
    }

    public sprite(): Phaser.Physics.Arcade.Sprite {
        return this.graphics.sprite();
    }

    public borderWidth(): number {
        return this.graphics.borderWidth();
    }

    public launch(velocity: Coordinates): this {
        if (!this.isInPlay()) {
            this.graphics.sprite().setVelocity(velocity.x, velocity.y);
            this.inPlay = true;
        }

        return this;
    }

    public reset(position: Coordinates): this {
        this.graphics.sprite().setVelocity(0, 0);
        this.graphics.sprite().setPosition(position.x, position.y);
        this.inPlay = false;

        return this;
    }

    public update(): this {
        this.graphics.update();

        return this;
    }

    public isInPlay(): boolean {
        return this.inPlay;
    }

    public destroy(): this {
        this.graphics.destroy();

        return this;
    }

    public hitpoints(): number {
        return this.hp;
    }

    public updateHitpoints(hitpoints: number): this {
        this.hp = hitpoints;
        this.graphics.updateText(this.hp.toString());

        return this;
    }

    public resetHitpoints(): this {
        this.updateHitpoints(this.config.startHitpoints);

        return this;
    }

    public loseLife(): this {
        const dec: number = Math.max(1, Math.round(this.config.loseLifePercentage * this.hp));
        this.updateHitpoints(this.hp - dec);
        this.emitter.emit('loseLife');

        return this;
    }

    public onLoseLife(callback: () => void): this {
        this.emitter.on('loseLife', callback);

        return this;
    }
}
