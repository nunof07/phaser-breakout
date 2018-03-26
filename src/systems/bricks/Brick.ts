import { GraphicSprite } from '@display/GraphicSprite';
import Phaser from 'phaser';

/**
 * Brick.
 */
export interface Brick extends GraphicSprite {
    hitpoints(): number;
    hit(): this;
    objects(): ReadonlyArray<Phaser.GameObjects.GameObject>;
}
