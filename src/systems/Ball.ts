import { Coordinates } from '@display/Coordinates';
import { GraphicSprite } from '@display/GraphicSprite';

/**
 * Controls the ball.
 */
export interface Ball extends GraphicSprite {
    launch(velocity: Coordinates): this;
    reset(position: Coordinates): this;
    isInPlay(): boolean;
}
