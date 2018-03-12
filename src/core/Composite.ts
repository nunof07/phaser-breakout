import { System } from '@core/System';

/**
 * Multiple systems.
 */
export interface Composite<T extends System> extends System {
    systems(): ReadonlyArray<T>;
}
