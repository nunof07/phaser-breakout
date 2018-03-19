import { GraphicSprite } from '@display/GraphicSprite';
import { Ball } from '@systems/ball/Ball';
import { Bricks } from '@systems/bricks/Bricks';

/**
 * Interactive game entities.
 */
export interface GameEntities {
    readonly ball: Ball;
    readonly bricks: Bricks;
    readonly paddle: GraphicSprite;
}
