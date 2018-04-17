/**
 * Game events.
 */
export interface GameEvents {
    onStart(callback: () => void): this;
    onResume(callback: () => void): this;
    onStop(callback: () => void): this;
}
