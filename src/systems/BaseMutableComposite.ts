import { MutableComposite } from '@systems/MutableComposite';
import { System } from '@systems/System';

/**
 * Composite system.
 */
export class BaseMutableComposite<T extends System> implements MutableComposite<T> {
    private collection: ReadonlyArray<T>;

    constructor(systems: ReadonlyArray<T>) {
        this.collection = systems;
    }

    public systems(): ReadonlyArray<T> {
        return this.collection;
    }

    public add(system: T): this {
        this.collection = this.collection.concat(system);

        return this;
    }

    public remove(system: T): this {
        this.collection = this.collection.filter((s: System) => s !== system);

        return this;
    }

    public setup(scene: Phaser.Scene): this {
        this.collection.forEach((system: System) => {
            system.setup(scene);
        });

        return this;
    }

    public update(): this {
        this.collection.forEach((system: System) => {
            system.update();
        });

        return this;
    }
}
