import { BallConfig } from '@config/BallConfig';
import { Coordinates } from '@display/Coordinates';
import { GraphicSprite } from '@display/GraphicSprite';
import { followPointerMovementX } from '@input/followPointerMovementX';
import { Ball } from '@systems/Ball';
import Phaser from 'phaser';

/**
 * Default ball system.
 */
export class BaseBall implements Ball {
    private readonly graphics: GraphicSprite;
    private readonly config: BallConfig;
    private inPlay: boolean;

    constructor(config: BallConfig, graphics: GraphicSprite) {
        this.graphics = graphics;
        this.config = config;
    }

    public setup(scene: Phaser.Scene): this {
        this.graphics.setup(scene);
        this.graphics.sprite().setCollideWorldBounds(true);
        this.graphics.sprite().setBounce(this.config.bounce, this.config.bounce);
        followPointerMovementX(scene.input, this.graphics.sprite(), () => !this.inPlay);

        return this;
    }

    public sprite(): Phaser.Physics.Arcade.Sprite {
        return this.graphics.sprite();
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
}
