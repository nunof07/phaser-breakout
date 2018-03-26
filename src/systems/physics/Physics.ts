import { Brick } from '@systems/bricks/Brick';
import { System } from '@systems/System';
import Phaser from 'phaser';

/**
 * Physics.
 */
export interface Physics extends System {
    collide(ball: Phaser.Physics.Arcade.Sprite, paddle: Phaser.Physics.Arcade.Sprite): this;
    setupBrick(brick: Brick): this;
}
