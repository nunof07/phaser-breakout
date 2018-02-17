/**
 * Print "Hello! " followed by a message.
 */
export class Hello {
    private readonly msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    public print(): string {
        return `Hello! ${this.msg}`;
    }

    public source(): string {
        return this.msg;
    }
}
