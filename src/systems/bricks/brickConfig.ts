import { BrickConfig } from '@config/BrickConfig';
import { compose, lensProp, set } from 'ramda';

/**
 * Create brick config
 * @param brick Brick config.
 * @param n Brick index.
 */
export function brickConfig(brick: BrickConfig, n: number): BrickConfig {
    const row: number = Math.floor(n / brick.bricks.columns);
    const column: number = n % brick.bricks.columns;
    const setRow: (brick: BrickConfig) => BrickConfig = set(lensProp('row'), row);
    const setColumn: (brick: BrickConfig) => BrickConfig = set(lensProp('column'), column);
    const setRowAndColumn: (brick: BrickConfig) => BrickConfig = compose(setRow, setColumn);

    return setRowAndColumn(brick);
}
