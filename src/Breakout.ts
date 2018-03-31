import { brickConfig } from '@src/brickConfig';
import { config } from '@src/config';
import { createBall } from '@systems/ball/createBall';
import { createBricks } from '@systems/bricks/createBricks';
import { GameEntities } from '@systems/GameEntities';
import { BaseGameOver } from '@systems/gameOver/BaseGameOver';
import { createPaddle } from '@systems/paddle/createPaddle';
import { BasePhysics } from '@systems/physics/BasePhysics';
import { ReadonlyComposite } from '@systems/ReadonlyComposite';
import { Referee } from '@systems/referee/Referee';
import { BaseStats } from '@systems/score/BaseStats';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Breakout game.
 */
export class Breakout extends Phaser.Scene {
    private systems: ReadonlyComposite<System>;

    public preload(): void {
        this.load.image(config.graphics.texture.key, config.graphics.texture.url);
    }

    public create(): void {
        const stats: BaseStats = new BaseStats();
        const entities: GameEntities = {
            ball: createBall(config.ball, config.graphics),
            paddle: createPaddle(config.paddle, config.graphics),
            bricks: createBricks(config.physics.bricksWave, brickConfig(), stats),
            stats,
        };
        const physics: BasePhysics = new BasePhysics(config.physics, entities, this);
        const gameOver: BaseGameOver = new BaseGameOver(config.gameOver);
        this.systems = new ReadonlyComposite([
            entities.paddle,
            entities.ball,
            entities.bricks,
            physics,
            gameOver,
            new Referee(config.game, entities, physics, gameOver),
            stats,
        ]);
        this.systems.setup(this);
    }

    public update(): void {
        this.systems.update();
    }
}
