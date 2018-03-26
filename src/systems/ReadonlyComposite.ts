import { BaseMutableComposite } from '@systems/BaseMutableComposite';
import { Composite } from '@systems/Composite';
import { System } from '@systems/System';

/**
 * Composite system.
 */
export class ReadonlyComposite<T extends System> implements Composite<T> {
    private readonly collection: Composite<T>;

    constructor(systems: ReadonlyArray<T>) {
        this.collection = new BaseMutableComposite(systems);
    }

    public systems(): ReadonlyArray<T> {
        return this.collection.systems();
    }

    public setup(scene: Phaser.Scene): this {
        this.collection.setup(scene);

        return this;
    }

    public update(): this {
        this.collection.update();

        return this;
    }
}
