import { BrickConfig } from '@config/BrickConfig';
import { brickConfig } from '@src/brickConfig';
import { config } from '@src/config';
import { effectsConfig } from '@src/effectsConfig';
import { Music } from '@systems/audio/Music';
import { Sound } from '@systems/audio/Sound';
import { createBall } from '@systems/ball/createBall';
import { Boot } from '@systems/Boot';
import { createBricks } from '@systems/bricks/createBricks';
import { Camera } from '@systems/Camera';
import { GameEntities } from '@systems/GameEntities';
import { BaseGameOver } from '@systems/gameOver/BaseGameOver';
import { createPaddle } from '@systems/paddle/createPaddle';
import { BasePhysics } from '@systems/physics/BasePhysics';
import { ReadonlyComposite } from '@systems/ReadonlyComposite';
import { Referee } from '@systems/referee/Referee';
import { BaseScoreboard } from '@systems/score/BaseScoreboard';
import { BaseStats } from '@systems/score/BaseStats';
import { System } from '@systems/System';
import { Effects } from '@systems/visual/Effects';
import Phaser from 'phaser';

/**
 * Breakout game.
 */
export class Breakout extends Phaser.Scene {
    private systems: ReadonlyComposite<System>;

    public preload(): void {
        const boot: Boot = new Boot();
        boot.setup(this);
    }

    public create(): void {
        const brick: BrickConfig = brickConfig();
        const stats: BaseStats = new BaseStats();
        const entities: GameEntities = this.createEntities(brick, stats);
        const physics: BasePhysics = new BasePhysics(config.physics, entities, this);
        const scoreboard: BaseScoreboard = new BaseScoreboard(config.scoreboard, stats);
        const gameOver: BaseGameOver = new BaseGameOver(config.gameOver, scoreboard);
        const referee: Referee = new Referee(config.game, entities, physics, gameOver);
        this.systems = new ReadonlyComposite([
            entities.paddle,
            entities.ball,
            entities.bricks,
            physics,
            gameOver,
            referee,
            stats,
            scoreboard,
            new Music(config.audio, referee),
            new Sound(config.audio, entities, gameOver, physics),
            new Camera(config.camera, entities, gameOver),
            new Effects(effectsConfig(brick), config.graphics, entities),
        ]);
        this.systems.setup(this);
    }

    public update(): void {
        this.systems.update();
    }

    private createEntities(brick: BrickConfig, stats: BaseStats): GameEntities {
        return {
            ball: createBall(config.ball, config.graphics),
            paddle: createPaddle(config.paddle, config.graphics),
            bricks: createBricks(config.physics.bricksWave, brick, stats),
            stats,
        };
    }
}
