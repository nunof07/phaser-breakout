import { BallConfig } from '@config/BallConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { Ball } from '@systems/ball/Ball';
import { BaseBall } from '@systems/ball/BaseBall';

/**
 * Create a ball.
 */
export function createBall(ball: BallConfig, graphics: GraphicsConfig): Ball {
    return new BaseBall(ball, new BaseGraphicSprite(ball, graphics));
}
