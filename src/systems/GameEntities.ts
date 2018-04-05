import { GraphicSprite } from '@display/GraphicSprite';
import { Ball } from '@systems/ball/Ball';
import { Bricks } from '@systems/bricks/Bricks';
import { Stats } from '@systems/score/Stats';

/**
 * Interactive game entities.
 */
export interface GameEntities {
    readonly ball: Ball;
    readonly bricks: Bricks;
    readonly paddle: GraphicSprite;
    readonly stats: Stats;
}
