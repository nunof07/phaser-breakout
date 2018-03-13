import { GameConfig } from '@config/GameConfig';
import { PhysicsConfig } from '@config/PhysicsConfig';
import { GraphicSprite } from '@display/GraphicSprite';
import { Ball } from '@systems/ball/Ball';
import { ballOnSpritePosition } from '@systems/ball/ballOnSpritePosition';
import { System } from '@systems/System';

/**
 * Referee.
 */
export class Referee implements System {
    private readonly game: GameConfig;
    private readonly physics: PhysicsConfig;
    private readonly ball: Ball;
    private readonly paddle: GraphicSprite;

    constructor(game: GameConfig, physics: PhysicsConfig, ball: Ball, paddle: GraphicSprite) {
        this.game = game;
        this.physics = physics;
        this.ball = ball;
        this.paddle = paddle;
    }

    public setup(scene: Phaser.Scene): this {
        scene.input.on('pointerup', () => {
            if (!this.ball.isInPlay()) {
                this.ball.launch(this.physics.launchVelocity);
            }
        });

        return this;
    }

    public update(): this {
        if (this.ball.sprite().y > this.game.height) {
            this.ball.reset(ballOnSpritePosition(this.ball, this.paddle));
        }

        return this;
    }
}
