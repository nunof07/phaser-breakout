import { System } from '@core/System';
import { Coordinates } from '@display/Coordinates';

/**
 * Controls the ball.
 */
export interface Ball extends System {
    launch(velocity: Coordinates): this;
    reset(position: Coordinates): this;
    isInPlay(): boolean;
}
