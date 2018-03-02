import { Position } from '@display/Position';

/**
 * Determines if positions are the same.
 * @param a A position.
 * @param b Another position.
 */
export function positionEqual(a: Position, b: Position): boolean {
    return a.x === b.x && a.y === b.y;
}
