import { Coordinates } from '@display/Coordinates';

/**
 * Determines if positions are the same.
 * @param a A position.
 * @param b Another position.
 */
export function positionEqual(a: Coordinates, b: Coordinates): boolean {
    return a.x === b.x && a.y === b.y;
}
