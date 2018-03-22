import { Brick } from '@systems/bricks/Brick';

/**
 * Determine Y coordinate for brick in highest position (most at the top). This will actually be the minimum Y of all bricks.
 * @param bricks Bricks.
 * @param defaultValue Default value if no bricks.
 */
export function highestY(bricks: ReadonlyArray<Brick>, defaultValue: number): number {
    return bricks.length === 0
        ? defaultValue
        : bricks.reduce((prev: Brick, curr: Brick) => prev.sprite().y < curr.sprite().y ? prev : curr)
            .sprite().y;
}
