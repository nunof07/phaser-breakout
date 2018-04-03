import { ScoreboardConfig } from '@config/ScoreboardConfig';
import { createScoreboardText } from '@systems/score/createScoreboardText';
import { Scoreboard } from '@systems/score/Scoreboard';
import { Stats } from '@systems/score/Stats';
import { System } from '@systems/System';
import formatDuration from 'format-duration';
import Phaser from 'phaser';

/**
 * Display score.
 */
export class BaseScoreboard implements Scoreboard, System {
    private readonly config: ScoreboardConfig;
    private readonly stats: Stats;
    private all: ReadonlyArray<Phaser.GameObjects.Text>;
    private points: Phaser.GameObjects.Text;
    private hits: Phaser.GameObjects.Text;
    private bricks: Phaser.GameObjects.Text;
    private iteration: Phaser.GameObjects.Text;
    private duration: Phaser.GameObjects.Text;

    constructor(config: ScoreboardConfig, stats: Stats) {
        this.stats = stats;
        this.config = config;
    }

    public show(): this {
        this.updateText();
        this.all.forEach((text: Phaser.GameObjects.Text) => text.visible = true);

        return this;
    }

    public hide(): this {
        this.all.forEach((text: Phaser.GameObjects.Text) => text.visible = false);

        return this;
    }

    public setup(scene: Phaser.Scene): this {
        this.points = createScoreboardText(scene, this.config.highScore, this.config.position.points);
        this.points.setOrigin(0.5, 0.5);
        this.hits = createScoreboardText(scene, this.config.details, this.config.position.hits);
        this.bricks = createScoreboardText(scene, this.config.details, this.config.position.bricks);
        this.iteration = createScoreboardText(scene, this.config.details, this.config.position.iteration);
        this.duration = createScoreboardText(scene, this.config.details, this.config.position.duration);
        this.all = [
            this.points,
            this.hits,
            this.bricks,
            this.iteration,
            this.duration,
        ];

        return this;
    }

    public update(): this {
        return this;
    }

    private updateText(): this {
        this.points.setText(this.config.points(this.stats.points()).toUpperCase());
        this.hits.setText(this.config.hits(this.stats.hits()).toUpperCase());
        this.bricks.setText(this.config.bricks(this.stats.bricks()).toUpperCase());
        this.iteration.setText(this.config.iteration(this.stats.iteration()).toUpperCase());
        this.duration.setText(this.config.duration(formatDuration(this.stats.duration() * 1000)).toUpperCase());

        return this;
    }
}
