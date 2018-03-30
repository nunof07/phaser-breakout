import { GraphicSprite } from '@display/GraphicSprite';
import { Ball } from '@systems/ball/Ball';
import Phaser from 'phaser';

/**
 * Brick.
 */
export interface Brick extends GraphicSprite {
    hitpoints(): number;
    hit(ball: Ball): this;
    objects(): ReadonlyArray<Phaser.GameObjects.GameObject>;
}
