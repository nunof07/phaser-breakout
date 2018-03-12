import { System } from '@core/System';
import { Brick } from '@systems/Brick';

/**
 * Bricks;
 */
export interface Bricks extends System {
    group(): ReadonlyArray<Brick>;
}
