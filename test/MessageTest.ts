import { Message } from '@src/Message';
import { expect } from 'chai';

/**
 * {@link Message} unit tests.
 */
describe('Message', () => {
    describe('#constructor()', () => {
        it('should not throw', () => {
            expect(() => new Message('hello')).to.not.throw();
        });
    });
    describe('#print()', () => {
        it('should return hello', () => {
            expect(new Message('hello').print()).to.equal('hello');
        });
    });
});
