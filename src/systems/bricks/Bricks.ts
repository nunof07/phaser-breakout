import { Brick } from '@systems/bricks/Brick';
import { System } from '@systems/System';

/**
 * Bricks;
 */
export interface Bricks extends System {
    group(): ReadonlyArray<Brick>;
}
