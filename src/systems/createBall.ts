import { BallConfig } from '@config/BallConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { System } from '@core/System';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { BaseBall } from '@systems/BaseBall';

/**
 * Create a ball.
 */
export function createBall(ball: BallConfig, graphics: GraphicsConfig): System {
    return new BaseBall(ball, new BaseGraphicSprite(ball, graphics));
}
