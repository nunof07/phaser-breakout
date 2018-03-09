/**
 * Set collision bounds.
 * @param world World.
 */
// tslint:disable-next-line:no-any
export function setBoundsCollision(world: any, directions: { left: boolean; right: boolean; top: boolean; bottom: boolean }): void {
    (<{ setBoundsCollision: Function }>world).setBoundsCollision(directions.left, directions.right, directions.top, directions.bottom);
}
