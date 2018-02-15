/**
 * Print "Hello! " followed by a message.
 */
export class Hello {
    private readonly msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    public print(): this {
        // tslint:disable-next-line:no-console
        console.log(`Hello! ${this.msg}`);

        return this;
    }
}
