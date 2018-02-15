/**
 * Print a message.
 */
export class Message {
    private readonly msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    public print(): this {
        // tslint:disable-next-line:no-console
        console.log(this.msg);

        return this;
    }
}
