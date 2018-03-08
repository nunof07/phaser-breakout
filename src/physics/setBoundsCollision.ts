/**
 * Set collision bounds.
 * @param world World.
 */
// tslint:disable-next-line:no-any
export function setBoundsCollision(world: any, left: boolean, right: boolean, top: boolean, bottom: boolean): void {
    (<{ setBoundsCollision: Function }>world).setBoundsCollision(left, right, top, bottom);
}
