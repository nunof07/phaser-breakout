export class Hello {
    private readonly msg: string;

    constructor(msg: string) {
        this.msg = msg;
    }

    public print(): this {
        console.log('Hello! ' + this.msg);

        return this;
    }
}