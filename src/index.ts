import { Hello } from '@src/Hello';
import { Message } from '@src/Message';

/**
 * Main entry point.
 */
// tslint:disable-next-line:no-console
console.log(
    new Message('Hello TypeScript').print(),
    new Hello('Bye2').print(),
);
