import { Coordinates } from '@display/Coordinates';
import { GraphicSprite } from '@display/GraphicSprite';
import { startY } from '@display/startY';

/**
 * Calculates the position for the ball to sit on top of the sprite.
 * @param ball Ball sprite.
 * @param paddle Sprite.
 */
export function ballOnSpritePosition(ball: GraphicSprite, paddle: GraphicSprite): Coordinates {
    return {
        x: paddle.sprite().x,
        y: startY(paddle.sprite()) - ball.sprite().displayHeight - paddle.borderWidth() - 1,
    };
}
