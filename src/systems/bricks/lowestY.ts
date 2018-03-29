import { Brick } from '@systems/bricks/Brick';

/**
 * Determine Y coordinate for brick in lowest position (most at the bottom). This will actually be the maximum Y of all bricks.
 * @param bricks Bricks.
 * @param defaultValue Default value if no bricks.
 */
export function lowestY(bricks: ReadonlyArray<Brick>, defaultValue: number): number {
    return bricks.length === 0
        ? defaultValue
        : bricks.reduce((prev: Brick, curr: Brick) => prev.sprite().y > curr.sprite().y ? prev : curr)
            .sprite().y;
}
