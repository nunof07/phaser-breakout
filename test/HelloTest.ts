import { Hello } from '@src/Hello';
import { expect } from 'chai';

/**
 * {@link Hello} unit tests.
 */
describe('Hello', () => {
    describe('#constructor()', () => {
        it('should not throw', () => {
            expect(() => new Hello('hello')).to.not.throw();
        });
    });
    describe('#print()', () => {
        it('should return string', () => {
            expect(new Hello('hello').print()).to.equal('Hello! hello');
        });
    });
});
