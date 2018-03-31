/**
 * Game over screen.
 */
export interface GameOver {
    isActive(): boolean;
    show(): this;
    hide(done: () => void): this;
    hideInProgress(): boolean;
}
