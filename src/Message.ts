/**
 * Print a message.
 */
export class Message {
    private readonly msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    public print(): string {
        return this.msg;
    }
}
