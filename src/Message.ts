export class Message {
    private readonly msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    public print(): this {
        console.log(this.msg);

        return this;
    }
}