import { System } from '@core/System';
import { Position } from '@display/Position';

/**
 * Controls the ball.
 */
export interface Ball extends System {
    launch(velocity: Position): this;
    reset(position: Position): this;
    isInPlay(): boolean;
}
