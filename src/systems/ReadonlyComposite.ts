import { Composite } from '@systems/Composite';
import { System } from '@systems/System';

/**
 * Composite system.
 */
export class ReadonlyComposite<T extends System> implements Composite<T> {
    private readonly collection: ReadonlyArray<T>;

    constructor(systems: ReadonlyArray<T>) {
        this.collection = systems;
    }

    public systems(): ReadonlyArray<T> {
        return this.collection;
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
