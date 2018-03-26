import { Composite } from '@systems/Composite';
import { System } from '@systems/System';

/**
 * Mutable composite system.
 */
export interface MutableComposite<T extends System> extends Composite<T> {
    add(system: T): this;
    remove(system: T): this;
}
