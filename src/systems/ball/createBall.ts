import { BallConfig } from '@config/BallConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { BaseGraphicSprite } from '@display/BaseGraphicSprite';
import { textConfig } from '@display/textConfig';
import { TextGraphicSprite } from '@display/TextGraphicSprite';
import { Ball } from '@systems/ball/Ball';
import { BaseBall } from '@systems/ball/BaseBall';

/**
 * Create a ball.
 */
export function createBall(ball: BallConfig, graphics: GraphicsConfig): Ball {
    return new BaseBall(
        ball,
        new TextGraphicSprite(
            new BaseGraphicSprite(ball, graphics),
            textConfig(ball.text, ball.color),
        ),
    );
}
