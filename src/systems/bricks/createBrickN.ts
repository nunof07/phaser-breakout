import { BricksConfig } from '@config/BricksConfig';
import { GraphicsConfig } from '@config/GraphicsConfig';
import { SpriteConfig } from '@config/SpriteConfig';
import { Brick } from '@systems/bricks/Brick';
import { createBrick } from '@systems/bricks/createBrick';
import { curry } from 'ramda';

/**
 * Create the nth brick.
 */
// tslint:disable-next-line:typedef
export const createBrickN = curry((bricks: BricksConfig, sprite: SpriteConfig, graphics: GraphicsConfig, n: number): Brick => {
    const row: number = Math.floor(n / bricks.columns);
    const column: number = n % bricks.columns;

    return createBrick(bricks, sprite, graphics, row, column);
});
