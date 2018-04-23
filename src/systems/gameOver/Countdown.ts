import { System } from '@systems/System';

/**
 * Display countdown.
 */
export interface Countdown extends System {
    start(done: () => void): this;
    onTick(callback: (count: number) => void): this;
}
